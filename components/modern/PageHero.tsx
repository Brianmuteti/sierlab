import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    breadcrumb?: string;
    breadcrumbTrail?: BreadcrumbItem[];
    description?: string;
    eyebrow?: string;
}

export default function PageHero({
    title,
    breadcrumb,
    breadcrumbTrail,
    description,
    eyebrow = "Sierlab",
}: PageHeroProps) {
    const trail: BreadcrumbItem[] = breadcrumbTrail ?? [
        { label: breadcrumb ?? title },
    ];

    return (
        <section className="sl-page-hero">
            <div className="sl-page-hero__grid" aria-hidden />
            <div className="sl-section__container">
                <p className="sl-page-hero__eyebrow">{eyebrow}</p>
                <h1 className="sl-page-hero__title">{title}</h1>
                {description && (
                    <p className="sl-page-hero__desc">{description}</p>
                )}
                <nav className="sl-page-hero__breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    {trail.map((item) => (
                        <span key={item.label} className="sl-page-hero__crumb-group">
                            <span aria-hidden>/</span>
                            {item.href ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </section>
    );
}
