import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Integrations from "@/components/home/Integrations";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
    title: "Sierlab | Smart Digital Solutions for Modern Business",
    description:
        "Custom web applications, e-commerce, API integrations, and cybersecurity — built for Kenyan and African businesses.",
};

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Marquee />
            <Services />
            <Integrations />
            <Industries />
            <Testimonials />
            <ContactCTA />
        </Layout>
    );
}
