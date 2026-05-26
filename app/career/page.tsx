import Layout from "@/components/layout/Layout";
import CareerContent from "@/components/pages/CareerContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Careers",
    description: "Join the Sierlab team in Nairobi — developers, designers, and engineers.",
    path: "/career",
});

export default function CareerPage() {
    return (
        <Layout>
            <CareerContent />
        </Layout>
    );
}
