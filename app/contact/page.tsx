import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section2 from "@/components/sections/integrations/Section2";

export const metadata = {
    title: "Contact Us - SierLab",
    description: "Get in touch with SierLab for inquiries and support.",
    keywords: "SierLab, Contact Us, Inquiries, Support",
};

export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Contact Us" current_page="Contact Us" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
