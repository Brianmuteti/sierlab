import Layout from "@/components/layout/Layout";
import FeaturesContent from "@/components/pages/FeaturesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Platform Features",
    description: "Performance, security, M-Pesa, dashboards, and integrations built into every Sierlab project.",
    path: "/features",
});

export default function FeaturesPage() {
    return (
        <Layout>
            <FeaturesContent />
        </Layout>
    );
}
