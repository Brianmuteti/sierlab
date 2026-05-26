import Layout from "@/components/layout/Layout";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.meta.title,
        description: post.meta.description || post.content.slice(0, 150),
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return notFound();

    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <Layout>
            <PageHero title={post.meta.title as string} breadcrumb="Blog" />
            <section className="sl-section">
                <div className="sl-section__container sl-blog-article">
                    <div className="sl-blog-article__meta">
                        {Array.isArray(post.meta.categories) &&
                            post.meta.categories.map((cat: string) => (
                                <span key={cat} className="sl-hero__tag">
                                    {cat}
                                </span>
                            ))}
                        <span className="sl-blog-card__date">
                            {post.meta.author} · {post.meta.date}
                        </span>
                    </div>
                    {post.meta.cover && (
                        <img
                            className="sl-blog-article__cover"
                            src={post.meta.cover as string}
                            alt={post.meta.title as string}
                        />
                    )}
                    <div
                        className="sl-blog-article__body"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                    <Link href="/blog" className="sl-btn sl-btn--outline mt-4">
                        ← Back to blog
                    </Link>
                </div>
            </section>
            <CtaBanner />
        </Layout>
    );
}
