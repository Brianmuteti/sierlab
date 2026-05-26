import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { SITE_URL } from "@/lib/site-config";

export interface PostMeta {
    title: string;
    description?: string;
    date?: string;
    author?: string;
    avatar?: string;
    categories?: string[];
    cover?: string;
    keywords?: string[];
}

export interface BlogHeading {
    id: string;
    text: string;
    level: 2 | 3;
}

export function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .replace(/<[^>]+>/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export function extractHeadings(markdown: string): BlogHeading[] {
    return markdown.split("\n").flatMap((line) => {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (!match) return [];
        const level = match[1].length as 2 | 3;
        const text = match[2].replace(/\*\*/g, "").trim();
        return [{ level, text, id: slugifyHeading(text) }];
    });
}

export function readingTimeMinutes(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export function formatPostDate(date?: string): string {
    if (!date) return "";
    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) return date;
    return parsed.toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function addHeadingIds(html: string): string {
    return html.replace(/<h([23])>([^<]+)<\/h\1>/gi, (_, level, text) => {
        const id = slugifyHeading(text);
        return `<h${level} id="${id}">${text}</h${level}>`;
    });
}

export function getRelatedPosts(slug: string, limit = 3) {
    const current = getPostBySlug(slug);
    const all = getAllPosts().filter((p) => p.slug !== slug);
    const currentCats = new Set(
        Array.isArray(current.meta.categories) ? current.meta.categories : []
    );

    const scored = all.map((post) => {
        const cats = Array.isArray(post.meta.categories) ? post.meta.categories : [];
        const overlap = cats.filter((c) => currentCats.has(c)).length;
        return { post, overlap };
    });

    scored.sort((a, b) => b.overlap - a.overlap);
    return scored.slice(0, limit).map((s) => s.post);
}

export function getAdjacentPosts(slug: string) {
    const posts = getAllPosts().sort((a, b) => {
        const da = new Date((a.meta.date as string) ?? 0).getTime();
        const db = new Date((b.meta.date as string) ?? 0).getTime();
        return db - da;
    });
    const index = posts.findIndex((p) => p.slug === slug);
    return {
        prev: index > 0 ? posts[index - 1] : null,
        next: index < posts.length - 1 ? posts[index + 1] : null,
    };
}

export function postUrl(slug: string) {
    return `${SITE_URL}/blog/${slug}`;
}
