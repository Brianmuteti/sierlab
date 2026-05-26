import Layout from "@/components/layout/Layout";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import Section1 from "@/components/sections/features/Section1";

export const metadata = {
    title: "Features - Sierlab",
    description: "Platform features and capabilities.",
};

export default function FeaturesPage() {
    return (
        <Layout>
            <PageHero title="Our Features" description="What makes our solutions stand out." />
            <div className="sl-legacy-sections">
                <Section1 />
            </div>
            <CtaBanner />
        </Layout>
    );
}
