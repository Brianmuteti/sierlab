import Layout from "@/components/layout/Layout";
import { TermsContent } from "@/components/pages/LegalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Terms of Service",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <Layout>
            <TermsContent />
        </Layout>
    );
}
