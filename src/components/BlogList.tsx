"use client";

import Link from "next/link";
import { useState } from "react";
import {
  decodeHtml,
  formatPostDate,
  type BlogPostSummary,
} from "@/src/lib/wordpress";

export default function BlogList({
  initialPosts,
}: {
  initialPosts: BlogPostSummary[];
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length > 0);
  const [error, setError] = useState<string | null>(null);

  async function loadMore() {
    setLoading(true);
    setError(null);
    try {
      const nextPage = page + 1;
      const response = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com/posts/?page=${nextPage}`,
      );
      if (!response.ok) throw new Error();
      const data = (await response.json()) as { posts?: BlogPostSummary[] };
      const newPosts = data.posts ?? [];
      setPosts((current) =>
        [
          ...current,
          ...newPosts.filter(
            (post) => !current.some(({ ID }) => ID === post.ID),
          ),
        ].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
      );
      setPage(nextPage);
      setHasMore(newPosts.length > 0);
    } catch {
      setError("The next posts could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-12 border-t border-zinc-800">
      {posts.map((post) => (
        <article key={post.ID} className="border-b border-zinc-800">
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-3 py-7 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-7"
          >
            <time
              dateTime={post.date}
              className="text-sm tabular-nums text-zinc-400"
            >
              {formatPostDate(post.date)}
            </time>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-100 transition group-hover:text-indigo-400 sm:text-xl">
              {decodeHtml(post.title)}
            </h2>
            <span
              aria-hidden
              className="text-xl text-zinc-400 transition group-hover:translate-x-1 group-hover:text-indigo-400"
            >
              &rarr;
            </span>
          </Link>
        </article>
      ))}
      {error && (
        <p className="pt-7 text-center text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
      {hasMore ? (
        <div className="py-8 text-center">
          <button
            type="button"
            onClick={loadMore}
            disabled={loading}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-700 px-5 text-sm font-semibold text-zinc-200 transition hover:border-indigo-400 hover:text-white disabled:cursor-wait disabled:opacity-60"
          >
            {loading
              ? "Loading more writing..."
              : error
                ? "Try again"
                : "Load more writing"}
          </button>
        </div>
      ) : (
        <p className="py-8 text-center text-sm text-zinc-400">
          You&apos;ve reached the end.
        </p>
      )}
    </div>
  );
}
