import Layout from "@/components/layout/Layout";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import Section1 from "@/components/sections/career/Section1";
import Section2 from "@/components/sections/career/Section2";
import Section3 from "@/components/sections/career/Section3";
import Section4 from "@/components/sections/career/Section4";

export const metadata = {
    title: "Careers - Sierlab",
    description: "Join the Sierlab team in Nairobi.",
};

export default function CareerPage() {
    return (
        <Layout>
            <PageHero
                title="Careers"
                description="Build the future of digital solutions with us."
            />
            <div className="sl-legacy-sections">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
            <CtaBanner />
        </Layout>
    );
}
