import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/posts";
import { SITE_URL } from "@/lib/site-config";
import { SERVICES_NAV } from "@/lib/site-data";

const STATIC_ROUTES = [
    "",
    "/about",
    "/services",
    "/work",
    "/integrations",
    "/pricing",
    "/blog",
    "/contact",
    "/career",
    "/features",
    "/privacy",
    "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const staticPages = STATIC_ROUTES.map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: path === "" ? 1 : 0.8,
    }));

    const servicePages = SERVICES_NAV.map((s) => ({
        url: `${SITE_URL}${s.href}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const blogPages = getPostSlugs().map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        return {
            url: `${SITE_URL}/blog/${slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        };
    });

    return [...staticPages, ...servicePages, ...blogPages];
}
