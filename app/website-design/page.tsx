import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/website-design/Section1";
import PageHeader from "@/components/sections/PageHeader";
export const metadata = {
    title: "Website Design | Sierlab",
    description:
        "Discover our website design services that elevate your online presence. Learn about our approach and solutions.",
    keywords: [
        "website design",
        "landing page design",
        "Sierlab",
        "UI/UX design",
        "responsive design",
        "web development",
    ],
};
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Website Design "
                    current_page="Website and Landing Page Design"
                />
                <Section1 />
                {/* <Section2 /> */}
            </Layout>
        </>
    );
}
