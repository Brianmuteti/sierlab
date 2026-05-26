import Layout from "@/components/layout/Layout";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { SERVICE_DETAILS } from "@/lib/site-data";

export const metadata = {
    title: "E-Commerce Development | Sierlab",
    description: SERVICE_DETAILS["/ecommerce-development"].description,
};

export default function Page() {
    return (
        <Layout>
            <ServiceDetailContent
                service={SERVICE_DETAILS["/ecommerce-development"]}
            />
        </Layout>
    );
}
