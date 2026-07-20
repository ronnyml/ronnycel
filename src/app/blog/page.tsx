import type { Metadata } from "next";
import BlogList from "@/src/components/BlogList";
import { getPosts, type BlogPostSummary } from "@/src/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Ronny Yabar Aizcorbe about software, open source, travel, and life.",
  alternates: { canonical: "/blog" },
};

export default async function Blog() {
  let posts: BlogPostSummary[] = [];
  let unavailable = false;
  try {
    posts = await getPosts();
  } catch {
    unavailable = true;
  }

  return (
    <section className="page-shell page-section">
      <h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Blog
      </h1>
      {unavailable ? (
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-zinc-700 bg-zinc-900 p-6 text-center">
          <p className="text-zinc-200" role="alert">
            The blog is temporarily unavailable. Please try again shortly.
          </p>
        </div>
      ) : (
        <BlogList initialPosts={posts} />
      )}
    </section>
  );
}
