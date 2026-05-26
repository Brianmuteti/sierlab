import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";

interface Post {
    slug: string;
    title: string;
    excerpt?: string;
    date?: string;
    category?: string;
}

export default function BlogContent({ posts }: { posts: Post[] }) {
    return (
        <>
            <PageHero
                title="News & Insights"
                breadcrumb="Blog"
                description="Tips on web development, e-commerce, SEO, and digital growth."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    {posts.length === 0 ? (
                        <p className="text-center sl-section__desc mx-auto">
                            No posts yet. Check back soon.
                        </p>
                    ) : (
                        <div className="sl-blog-grid">
                            {posts.map((post) => (
                                <article key={post.slug} className="sl-card sl-blog-card">
                                    <span className="sl-blog-card__cat">
                                        {post.category ?? "Insights"}
                                    </span>
                                    <h3>
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    {post.excerpt && <p>{post.excerpt}</p>}
                                    {post.date && (
                                        <time className="sl-blog-card__date">
                                            {post.date}
                                        </time>
                                    )}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="sl-btn sl-btn--outline"
                                    >
                                        Read more
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <CtaBanner />
        </>
    );
}
