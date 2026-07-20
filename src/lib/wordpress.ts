import sanitizeHtml from "sanitize-html";

export interface BlogPostSummary {
  ID: number;
  title: string;
  date: string;
  slug: string;
}
export interface BlogPost extends BlogPostSummary {
  content: string;
  excerpt?: string;
}

const API_URL =
  "https://public-api.wordpress.com/rest/v1.1/sites/ronnyml.wordpress.com";

export function decodeHtml(text: string) {
  return sanitizeHtml(text, { allowedTags: [], allowedAttributes: {} });
}

export function formatPostDate(date: string, long = false) {
  return new Date(date).toLocaleDateString("en-US", {
    month: long ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function getPosts(page = 1): Promise<BlogPostSummary[]> {
  const response = await fetch(`${API_URL}/posts/?page=${page}`, {
    next: { revalidate: 300 },
  });
  if (!response.ok) throw new Error("Unable to load blog posts.");
  const data = (await response.json()) as { posts?: BlogPostSummary[] };
  return data.posts ?? [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetch(
    `${API_URL}/posts/slug:${encodeURIComponent(slug)}`,
    { next: { revalidate: 300 } },
  );
  if (!response.ok) return null;
  const data = (await response.json()) as BlogPost;
  return data?.ID ? data : null;
}

function proxyWordPressImage(value: string) {
  return value.replace(
    /https:\/\/ronnyml\.wordpress\.com\/wp-content\/uploads/g,
    "https://i0.wp.com/ronnyml.wordpress.com/wp-content/uploads",
  );
}

export function sanitizePostContent(content: string) {
  const internalizedLinks = content.replace(
    /https?:\/\/ronnyml\.wordpress\.com\/\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9-]+)\/?/g,
    "/blog/$1",
  );

  return sanitizeHtml(internalizedLinks, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "figure",
      "figcaption",
      "video",
      "source",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "title"],
      img: [
        "src",
        "alt",
        "title",
        "width",
        "height",
        "srcset",
        "sizes",
        "loading",
        "decoding",
      ],
      video: ["src", "controls", "poster", "width", "height"],
      source: ["src", "type"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: (_tagName, attributes) => ({
        tagName: "a",
        attribs: {
          ...attributes,
          class:
            "font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-600",
        },
      }),
      img: (_tagName, attributes) => ({
        tagName: "img",
        attribs: {
          ...attributes,
          src: attributes.src ? proxyWordPressImage(attributes.src) : "",
          srcset: attributes.srcset
            ? proxyWordPressImage(attributes.srcset)
            : "",
          alt: attributes.alt ?? "",
          loading: "lazy",
          decoding: "async",
          class: "mx-auto my-8 block",
        },
      }),
      pre: (_tagName, attributes) => ({
        tagName: "pre",
        attribs: {
          ...attributes,
          class:
            "my-6 w-full overflow-x-auto rounded-xl bg-zinc-950 p-5 text-left text-sm text-zinc-100",
        },
      }),
      code: (_tagName, attributes) => ({
        tagName: "code",
        attribs: {
          ...attributes,
          class:
            "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-pink-700",
        },
      }),
    },
  });
}
