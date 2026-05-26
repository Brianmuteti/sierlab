import Layout from "@/components/layout/Layout";
import BlogPostContent from "@/components/pages/BlogPostContent";
import JsonLd from "@/components/seo/JsonLd";
import {
    addHeadingIds,
    extractHeadings,
    getAdjacentPosts,
    getRelatedPosts,
    postUrl,
    readingTimeMinutes,
} from "@/lib/blog-utils";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { createPageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
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

    const cover = post.meta.cover as string | undefined;
    const image = cover
        ? cover.startsWith("http")
            ? cover
            : `${SITE_URL}${cover}`
        : undefined;

    return createPageMetadata({
        title: post.meta.title as string,
        description:
            (post.meta.description as string) || post.content.slice(0, 160),
        path: `/blog/${slug}`,
        image,
    });
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
    const contentHtml = addHeadingIds(processedContent.toString());
    const headings = extractHeadings(post.content);
    const readMinutes = readingTimeMinutes(post.content);
    const related = getRelatedPosts(slug).map((p) => ({
        slug: p.slug,
        title: p.meta.title as string,
        description: p.meta.description as string | undefined,
        date: p.meta.date as string | undefined,
        category: Array.isArray(p.meta.categories)
            ? (p.meta.categories[0] as string)
            : undefined,
    }));
    const { prev, next } = getAdjacentPosts(slug);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.meta.title,
        description: post.meta.description,
        datePublished: post.meta.date,
        author: {
            "@type": "Person",
            name: post.meta.author ?? SITE_NAME,
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
        },
        image: post.meta.cover
            ? `${SITE_URL}${post.meta.cover}`
            : undefined,
        mainEntityOfPage: postUrl(slug),
    };

    return (
        <Layout>
            <JsonLd data={articleJsonLd} />
            <BlogPostContent
                slug={slug}
                meta={{
                    title: post.meta.title as string,
                    description: post.meta.description as string | undefined,
                    date: post.meta.date as string | undefined,
                    author: post.meta.author as string | undefined,
                    avatar: post.meta.avatar as string | undefined,
                    categories: Array.isArray(post.meta.categories)
                        ? (post.meta.categories as string[])
                        : undefined,
                    cover: post.meta.cover as string | undefined,
                }}
                contentHtml={contentHtml}
                headings={headings}
                readMinutes={readMinutes}
                related={related}
                prev={
                    prev
                        ? {
                              slug: prev.slug,
                              title: prev.meta.title as string,
                          }
                        : null
                }
                next={
                    next
                        ? {
                              slug: next.slug,
                              title: next.meta.title as string,
                          }
                        : null
                }
            />
        </Layout>
    );
}
