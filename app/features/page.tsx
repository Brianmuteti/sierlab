import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/features/Section1";
import Section6 from "@/components/sections/home/Section6";
import Section8 from "@/components/sections/home/Section8";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Our Features" current_page="Features" />
                <Section1 />
                <Section6 />
                <Section8 />
            </Layout>
        </>
    );
}
