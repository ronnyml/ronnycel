import { notFound } from "next/navigation";
import Link from "next/link";

interface PostDetail {
  ID: number;
  title: string;
  date: string;
  content: string;
  slug: string;
}

// Utility to add Tailwind classes to all <a> tags, remove <b>/<strong> tags, rewrite WP links, center images, and style code
function processContent(html: string): string {
  // Replace WP links with local blog links
  html = html.replace(/https?:\/\/ronnyml\.wordpress\.com\/(\d{4})\/(\d{2})\/(\d{2})\/([a-zA-Z0-9\-]+)\//g, '/blog/$4');
  // Remove target="_blank" from <a> tags
  html = html.replace(/<a ([^>]*?)target="_blank"([^>]*)>/gi, '<a $1$2>');
  // Make all <a> tags blue and normal font
  html = html.replace(/<a /g, '<a class="text-sky-700 hover:underline font-normal" ');
  // Center all images and add <br> before and after
  html = html.replace(/<img ([^>]+?)>/g, '<br><img class="mx-auto block" $1><br>');
  // Remove <b> and <strong> tags but keep their content
  html = html.replace(/<\/?(b|strong)>/gi, '');
  // Style <pre> and <code> blocks for code
  html = html.replace(/<pre>/g, '<pre class="bg-zinc-200 text-zinc-900 rounded-md p-4 my-4 text-left w-full block break-words whitespace-pre-wrap max-w-full">');
  html = html.replace(/<code>/g, '<code class="bg-zinc-100 text-pink-700 rounded px-1 py-0.5 font-mono text-sm break-words whitespace-pre-wrap max-w-full">');
  // Wrap inline code (text between backticks) in <code> if not already
  html = html.replace(/`([^`]+)`/g, '<code class="bg-zinc-100 text-pink-700 rounded px-1 py-0.5 font-mono text-sm">$1</code>');
  return html;
}

async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  // Fetch post by slug from WordPress API
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com/posts/slug:${slug}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  if (!data || !data.ID) return null;
  return {
    ID: data.ID,
    title: data.title,
    date: data.date,
    content: data.content,
    slug: data.slug,
  };
}

export default async function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="flex justify-center py-10 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 min-h-screen">
      <div className="w-full max-w-3xl rounded-3xl shadow-2xl px-4 md:px-12 py-8 md:py-14 bg-white/95 border border-zinc-200 relative">
        <Link href="/blog" className="absolute left-6 top-6 text-sky-700 hover:underline text-sm md:text-base mb-4">← Volver al Blog</Link>
        <div className="mt-14 md:mt-12 mb-2">
          <span className="block text-gray-500 text-sm md:text-base mb-1 text-left">{new Date(post.date).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 text-left" dangerouslySetInnerHTML={{ __html: post.title }} />
        </div>
        <div
          className="prose prose-zinc max-w-none text-justify text-base md:text-lg font-normal"
          style={{ fontWeight: 400 }}
          dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
        />
      </div>
    </div>
  );
}