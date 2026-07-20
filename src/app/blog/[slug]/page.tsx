import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  decodeHtml,
  formatPostDate,
  getPostBySlug,
  sanitizePostContent,
} from "@/src/lib/wordpress";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const title = decodeHtml(post.title);
  const description = post.excerpt
    ? decodeHtml(post.excerpt).slice(0, 160)
    : title;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostDetail({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="page-shell page-section">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white px-5 py-7 shadow-2xl shadow-black/25 sm:px-10 sm:py-10 lg:px-14">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-zinc-600 transition hover:text-indigo-600"
        >
          <span aria-hidden>&larr;</span> Back to writing
        </Link>
        <header className="mt-10 border-b border-zinc-200 pb-8 sm:mt-12 sm:pb-10">
          <time dateTime={post.date} className="text-sm text-zinc-600">
            {formatPostDate(post.date, true)}
          </time>
          <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
            {decodeHtml(post.title)}
          </h1>
        </header>
        <div
          className="article-content mt-8 text-base leading-8 text-zinc-700 sm:mt-10 sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: sanitizePostContent(post.content),
          }}
        />
      </div>
    </article>
  );
}
