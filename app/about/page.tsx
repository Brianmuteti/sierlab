import Layout from "@/components/layout/Layout";
import AboutContent from "@/components/pages/AboutContent";

export const metadata = {
    title: "About Us - Sierlab",
    description:
        "Learn more about Sierlab, our mission, values, and the services we offer.",
};

export default function AboutPage() {
    return (
        <Layout>
            <AboutContent />
        </Layout>
    );
}
