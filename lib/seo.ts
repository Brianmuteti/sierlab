import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/imgs/pages/startup/logo.png`;

export function createPageMetadata({
    title,
    description = SITE_DESCRIPTION,
    path = "",
    image = DEFAULT_OG_IMAGE,
}: {
    title: string;
    description?: string;
    path?: string;
    image?: string;
}): Metadata {
    const url = `${SITE_URL}${path}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    return {
        title: fullTitle,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            locale: "en_KE",
            url,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            images: [{ url: image, alt: SITE_NAME }],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
        },
    };
}

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "info@sierlab.com",
    telephone: "+254-731-824-251",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Lumumba Drive, Roysambu",
        addressLocality: "Nairobi",
        addressCountry: "KE",
    },
    sameAs: [
        "https://www.linkedin.com/company/sierlab",
        "https://twitter.com/sierlab",
        "https://www.facebook.com/sierlab",
    ],
};
