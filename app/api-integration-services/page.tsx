import Layout from "@/components/layout/Layout";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { SERVICE_DETAILS } from "@/lib/site-data";

export const metadata = {
    title: "API Integration Services | Sierlab",
    description: SERVICE_DETAILS["/api-integration-services"].description,
};

export default function Page() {
    return (
        <Layout>
            <ServiceDetailContent
                service={SERVICE_DETAILS["/api-integration-services"]}
            />
        </Layout>
    );
}
