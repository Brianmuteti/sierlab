import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog/Section1";
import PageHeader from "@/components/sections/PageHeader";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
    title: "Blog | Sierlab",
    description:
        "Read insights, tips, and updates from Sierlab on web development, ecommerce, SEO, cybersecurity, and IT consultancy. Stay informed with the latest trends and expert advice.",
    keywords: [
        "Sierlab blog",
        "web development tips",
        "ecommerce insights",
        "SEO strategies",
        "cybersecurity advice",
        "IT consultancy articles",
        "technology trends",
    ],
};

export default function Home() {
    const posts = getAllPosts();

    return (
        <>
            <Layout>
                <PageHeader title="Our Inside" current_page="blogs" />
                <Section1 posts={posts} />
            </Layout>
        </>
    );
}
