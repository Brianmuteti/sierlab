import Layout from "@/components/layout/Layout";
import ContactContent from "@/components/pages/ContactContent";

export const metadata = {
    title: "Contact Us - Sierlab",
    description: "Get in touch with Sierlab for inquiries and support.",
};

export default function ContactPage() {
    return (
        <Layout>
            <ContactContent />
        </Layout>
    );
}
