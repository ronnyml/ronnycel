import { notFound } from "next/navigation";
import Link from "next/link";

interface PostDetail {
  ID: number;
  title: string;
  date: string;
  content: string;
  slug: string;
}

function processContent(html: string) {
  html = html.replace(/https?:\/\/ronnyml\.wordpress\.com\/(\d{4})\/(\d{2})\/(\d{2})\/([a-zA-Z0-9\-]+)\//g, "/blog/$4");
  html = html.replace(/<a ([^>]*?)target="_blank"([^>]*)>/gi, "<a $1$2>");
  html = html.replace(/<a /g, '<a class="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-600" ');
  html = html.replace(/<img ([^>]+?)>/g, '<img class="mx-auto my-8 block" $1>');
  html = html.replace(/<pre>/g, '<pre class="my-6 w-full overflow-x-auto rounded-xl bg-zinc-950 p-5 text-left text-sm text-zinc-100">');
  html = html.replace(/<code>/g, '<code class="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-pink-700">');
  return html;
}

async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com/posts/slug:${slug}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data?.ID) return null;
  return { ID: data.ID, title: data.title, date: data.date, content: data.content, slug: data.slug };
}

export default async function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return <article className="page-shell page-section">
    <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white px-5 py-7 shadow-2xl shadow-black/25 sm:px-10 sm:py-10 lg:px-14">
      <Link href="/blog" className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-zinc-600 transition hover:text-indigo-600"><span aria-hidden>&larr;</span> Back to writing</Link>
      <header className="mt-10 border-b border-zinc-200 pb-8 sm:mt-12 sm:pb-10">
        <time className="text-sm text-zinc-500">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-5xl" dangerouslySetInnerHTML={{ __html: post.title }} />
      </header>
      <div className="article-content mt-8 text-base leading-8 text-zinc-700 sm:mt-10 sm:text-lg" dangerouslySetInnerHTML={{ __html: processContent(post.content) }} />
    </div>
  </article>;
}
