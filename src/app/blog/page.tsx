/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  ID: number;
  title: string;
  date: string;
  slug: string;
}

const decodeHtmlEntities = (text: string): string => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(text, "text/html").body.textContent || "";
  return decodedString;
};

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com/posts/?page=${page}`
      );
      const data: { posts: Post[] } = await response.json();

      if (data.posts && data.posts.length > 0) {
        setPosts((prevPosts) => {
          const newPosts = data.posts.filter(
            (post) => !prevPosts.some((existingPost) => existingPost.ID === post.ID)
          );
          return [...prevPosts, ...newPosts].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      fetchPosts(page);
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="flex justify-center py-6 bg-black min-h-screen">
      <div className="w-full max-w-3xl rounded-3xl shadow-2xl px-4 md:px-12 p-6 md:p-12 bg-white">
        <div className="w-full mb-8">
          <Image
            src="/images/blog-cover.jpg"
            alt="Blog Cover"
            width={1200}
            height={300}
            className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-md"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 text-center mb-8 drop-shadow">Blog</h1>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.ID}>
              <Link href={`/blog/${post.slug}`} className="block rounded-2xl bg-zinc-50 border border-zinc-200 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2 hover:underline">
                  {decodeHtmlEntities(post.title)}
                </h2>
                <p className="text-gray-500 text-sm mb-1">{formatDate(post.date)}</p>
              </Link>
            </li>
          ))}
        </ul>
        {loading && <p className="text-center mt-8">Loading more posts...</p>}
        {!hasMore && !loading && <p className="text-center mt-8 text-gray-400">No more posts to load.</p>}
      </div>
    </div>
  );
};

export default Blog;