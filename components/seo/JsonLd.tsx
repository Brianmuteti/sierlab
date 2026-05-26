import { organizationJsonLd } from "@/lib/seo";

export default function JsonLd({ data }: { data?: Record<string, unknown> }) {
    const payload = data ?? organizationJsonLd;
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
    );
}
