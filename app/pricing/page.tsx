import Layout from "@/components/layout/Layout";
import PricingContent from "@/components/pages/PricingContent";

export const metadata = {
    title: "Pricing Plans | Sierlab",
    description:
        "Transparent pricing for custom web applications, e-commerce, API integrations, SEO, and cybersecurity.",
};

export default function PricingPage() {
    return (
        <Layout>
            <PricingContent />
        </Layout>
    );
}
