import Layout from "@/components/layout/Layout";
import BlogContent from "@/components/pages/BlogContent";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
    title: "Blog | Sierlab",
    description: "Insights on web development, e-commerce, SEO, and cybersecurity.",
};

export default function BlogPage() {
    const posts = getAllPosts().map((p) => ({
        slug: p.slug,
        title: p.meta.title as string,
        excerpt: (p.meta.description as string) || p.content.slice(0, 120),
        date: p.meta.date as string | undefined,
        category: Array.isArray(p.meta.categories)
            ? (p.meta.categories[0] as string)
            : undefined,
    }));

    return (
        <Layout>
            <BlogContent posts={posts} />
        </Layout>
    );
}
