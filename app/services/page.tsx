import Layout from "@/components/layout/Layout";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata = {
    title: "Services - Sierlab",
    description:
        "Explore services from Sierlab: web apps, e-commerce, API integrations, SEO, and cybersecurity.",
};

export default function ServicesPage() {
    return (
        <Layout>
            <ServicesContent />
        </Layout>
    );
}
