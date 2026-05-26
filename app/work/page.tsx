import Layout from "@/components/layout/Layout";
import WorkContent from "@/components/pages/WorkContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Our Work & Case Studies",
    description:
        "See how Sierlab helps Kenyan businesses with custom apps, e-commerce, and integrations.",
    path: "/work",
});

export default function WorkPage() {
    return (
        <Layout>
            <WorkContent />
        </Layout>
    );
}
