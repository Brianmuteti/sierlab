import Layout from "@/components/layout/Layout";
import { PrivacyContent } from "@/components/pages/LegalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Privacy Policy",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <Layout>
            <PrivacyContent />
        </Layout>
    );
}
