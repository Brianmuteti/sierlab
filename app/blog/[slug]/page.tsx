import Layout from "@/components/layout/Layout";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) return {};

    return {
        title: post.meta.title,
        description: post.meta.description || post.content.slice(0, 150),
        keywords: post.meta.keywords || post.meta.categories,
        authors: [{ name: post.meta.author }],
        openGraph: {
            title: post.meta.title,
            description: post.meta.description || post.content.slice(0, 150),
            images: [post.meta.cover],
        },
    };
}

export default async function BlogDetails({
    params,
}: {
    params: { slug: string };
}) {
    const post = getPostBySlug(params.slug);
    if (!post) return notFound();

    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <>
            <Layout>
                <section className="startup-blog-details-section-1 position-relative py-120 border-bottom overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-lg-auto">
                                <div className="content">
                                    <div className="d-flex">
                                        {post.meta.categories.map(
                                            (cat: string) => (
                                                <span
                                                    key={cat}
                                                    className="bg-primary px-2 py-1 rounded-2 me-3 text-white"
                                                >
                                                    {cat}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <h4 className="my-3 text-anime-style-3">
                                        {post.meta.title}
                                    </h4>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle avatar avatar-md"
                                            src={post.meta.avatar}
                                            alt={post.meta.author}
                                        />
                                        <p className="mb-0 ms-3">
                                            {post.meta.author}
                                        </p>
                                        <p className="mb-0 ms-4">
                                            {post.meta.date}
                                        </p>
                                    </div>
                                    <img
                                        className="w-100 py-5 wow img-custom-anim-top"
                                        src={post.meta.cover}
                                        alt={post.meta.title}
                                    />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: contentHtml,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
