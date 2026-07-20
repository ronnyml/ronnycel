"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post { ID: number; title: string; date: string; slug: string }
const decode = (text: string) => new DOMParser().parseFromString(text, "text/html").body.textContent || "";
const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!hasMore) return;
    const controller = new AbortController();
    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com/posts/?page=${page}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data: { posts: Post[] }) => {
        if (data.posts?.length) setPosts((previous) => [...previous, ...data.posts.filter((post) => !previous.some((existing) => existing.ID === post.ID))].sort((a, b) => +new Date(b.date) - +new Date(a.date)));
        else setHasMore(false);
      })
      .catch((error) => { if (error.name !== "AbortError") console.error("Error fetching blog posts:", error); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [page, hasMore]);

  useEffect(() => {
    const scroll = () => {
      if (innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 && !loading && hasMore) {
        setLoading(true);
        setPage((current) => current + 1);
      }
    };
    addEventListener("scroll", scroll);
    return () => removeEventListener("scroll", scroll);
  }, [loading, hasMore]);

  return <section className="page-shell page-section"><h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Blog</h1><div className="mt-12 border-t border-zinc-800">{posts.map((post) => <article key={post.ID} className="border-b border-zinc-800"><Link href={`/blog/${post.slug}`} className="group grid gap-3 py-7 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-7"><span className="text-sm tabular-nums text-zinc-400">{formatDate(post.date)}</span><h2 className="text-lg font-semibold tracking-tight text-zinc-100 transition group-hover:text-indigo-600 sm:text-xl">{decode(post.title)}</h2><span aria-hidden className="text-xl text-zinc-400 transition group-hover:translate-x-1 group-hover:text-indigo-600">&rarr;</span></Link></article>)}{loading && <p className="py-8 text-center text-sm text-zinc-500" role="status">Loading more writing...</p>}{!hasMore && !loading && <p className="py-8 text-center text-sm text-zinc-400">You&apos;ve reached the end.</p>}</div></section>;
}
