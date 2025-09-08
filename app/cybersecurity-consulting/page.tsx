import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/cybersecurity-consulting/Section1";
import PageHeader from "@/components/sections/PageHeader";
export const metadata = {
    title: "Cybersecurity Consulting | Sierlab",
    description:
        "Discover our cybersecurity consulting services to protect your business from digital threats. Learn how we can help you secure your online presence.",
    keywords: [
        "cybersecurity consulting",
        "digital security",
        "Sierlab",
        "IT consulting",
        "data protection",
        "network security",
    ],
};
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Cybersecurity Consulting"
                    current_page="Cybersecurity Consulting"
                />
                <Section1 />
            </Layout>
        </>
    );
}
