import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import {
    type BlogHeading,
    formatPostDate,
    postUrl,
    readingTimeMinutes,
} from "@/lib/blog-utils";
import { contactUrl } from "@/lib/contact-url";
import { WHATSAPP_URL } from "@/lib/site-config";

interface RelatedPost {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
}

interface AdjacentPost {
    slug: string;
    title: string;
}

export interface BlogPostContentProps {
    slug: string;
    meta: {
        title: string;
        description?: string;
        date?: string;
        author?: string;
        avatar?: string;
        categories?: string[];
        cover?: string;
    };
    contentHtml: string;
    headings: BlogHeading[];
    readMinutes: number;
    related: RelatedPost[];
    prev: AdjacentPost | null;
    next: AdjacentPost | null;
}

export default function BlogPostContent({
    slug,
    meta,
    contentHtml,
    headings,
    readMinutes,
    related,
    prev,
    next,
}: BlogPostContentProps) {
    const formattedDate = formatPostDate(meta.date);
    const shareUrl = postUrl(slug);
    const shareText = encodeURIComponent(meta.title);
    const authorInitials =
        meta.author
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase() ?? "SL";

    return (
        <>
            <PageHero
                eyebrow={
                    meta.categories?.[0] ? meta.categories[0] : "Insights"
                }
                title={meta.title}
                description={meta.description}
                breadcrumbTrail={[
                    { label: "Blog", href: "/blog" },
                    { label: meta.title },
                ]}
            />

            <section className="sl-section sl-blog-post">
                <div className="sl-section__container">
                    <div className="sl-blog-post__layout">
                        <article className="sl-blog-post__main">
                            <header className="sl-blog-post__header">
                                <div className="sl-blog-post__meta">
                                    {meta.categories?.map((cat) => (
                                        <Link
                                            key={cat}
                                            href="/blog"
                                            className="sl-blog-post__category"
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                                <ul className="sl-blog-post__byline">
                                    {meta.author && <li>{meta.author}</li>}
                                    {formattedDate && (
                                        <li>
                                            <time dateTime={meta.date}>
                                                {formattedDate}
                                            </time>
                                        </li>
                                    )}
                                    <li>{readMinutes} min read</li>
                                </ul>
                            </header>

                            {meta.cover && (
                                <div className="sl-blog-post__cover">
                                    <Image
                                        src={meta.cover}
                                        alt={meta.title}
                                        width={1200}
                                        height={630}
                                        priority
                                        className="sl-blog-post__cover-img"
                                    />
                                </div>
                            )}

                            <div
                                className="sl-blog-article__body sl-prose"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />

                            <footer className="sl-blog-post__footer">
                                <div className="sl-blog-post__author">
                                    {meta.avatar ? (
                                        <Image
                                            src={meta.avatar}
                                            alt={meta.author ?? "Author"}
                                            width={56}
                                            height={56}
                                            className="sl-blog-post__author-img"
                                        />
                                    ) : (
                                        <span
                                            className="sl-blog-post__author-fallback"
                                            aria-hidden
                                        >
                                            {authorInitials}
                                        </span>
                                    )}
                                    <div>
                                        <strong>{meta.author ?? "Sierlab Team"}</strong>
                                        <p>
                                            Building digital products for Kenyan businesses —
                                            web apps, e-commerce, and integrations.
                                        </p>
                                    </div>
                                </div>

                                <div className="sl-blog-post__cta">
                                    <h3>Need help with this topic?</h3>
                                    <p>
                                        We design and build custom software, stores, and API
                                        integrations. Tell us about your project.
                                    </p>
                                    <div className="sl-page-main__actions">
                                        <Link
                                            href={contactUrl({
                                                service: "Blog inquiry",
                                                message: `I read "${meta.title}" and would like to discuss a project.`,
                                            })}
                                            className="sl-btn sl-btn--primary"
                                        >
                                            Get in touch
                                        </Link>
                                        <a
                                            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Sierlab, I read your article "${meta.title}" and have a question.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sl-btn sl-btn--whatsapp"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </footer>

                            {(prev || next) && (
                                <nav
                                    className="sl-blog-post__adjacent"
                                    aria-label="Adjacent posts"
                                >
                                    {prev ? (
                                        <Link
                                            href={`/blog/${prev.slug}`}
                                            className="sl-blog-post__adjacent-link sl-blog-post__adjacent-link--prev"
                                        >
                                            <span>Previous</span>
                                            <strong>{prev.title}</strong>
                                        </Link>
                                    ) : (
                                        <span />
                                    )}
                                    {next ? (
                                        <Link
                                            href={`/blog/${next.slug}`}
                                            className="sl-blog-post__adjacent-link sl-blog-post__adjacent-link--next"
                                        >
                                            <span>Next</span>
                                            <strong>{next.title}</strong>
                                        </Link>
                                    ) : (
                                        <span />
                                    )}
                                </nav>
                            )}
                        </article>

                        <aside className="sl-blog-post__sidebar">
                            <div className="sl-blog-post__sidebar-card">
                                <h2 className="sl-blog-post__sidebar-title">Share</h2>
                                <ul className="sl-blog-post__share">
                                    <li>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            X (Twitter)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`${meta.title} ${shareUrl}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {headings.length > 0 && (
                                <div className="sl-blog-post__sidebar-card sl-blog-post__toc">
                                    <h2 className="sl-blog-post__sidebar-title">
                                        On this page
                                    </h2>
                                    <ol>
                                        {headings.map((h) => (
                                            <li
                                                key={h.id}
                                                className={
                                                    h.level === 3
                                                        ? "sl-blog-post__toc-h3"
                                                        : undefined
                                                }
                                            >
                                                <a href={`#${h.id}`}>{h.text}</a>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            <div className="sl-blog-post__sidebar-card sl-blog-post__sidebar-cta">
                                <h2 className="sl-blog-post__sidebar-title">
                                    Work with us
                                </h2>
                                <p>
                                    From idea to launch — web apps, e-commerce, and M-Pesa
                                    integrations.
                                </p>
                                <Link
                                    href="/contact"
                                    className="sl-btn sl-btn--primary w-100 justify-content-center"
                                >
                                    Start a project
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {related.length > 0 && (
                        <div className="sl-blog-post__related">
                            <p className="sl-section__eyebrow">Keep reading</p>
                            <h2 className="sl-section__title">Related articles</h2>
                            <div className="sl-blog-grid">
                                {related.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="sl-card sl-blog-card"
                                    >
                                        <span className="sl-blog-card__cat">
                                            {post.category ?? "Insights"}
                                        </span>
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        {post.description && <p>{post.description}</p>}
                                        {post.date && (
                                            <time className="sl-blog-card__date">
                                                {formatPostDate(post.date)}
                                            </time>
                                        )}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="sl-btn sl-btn--outline"
                                        >
                                            Read article
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="sl-blog-post__back">
                        <Link href="/blog" className="sl-btn sl-btn--outline">
                            ← All articles
                        </Link>
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
