import PageHero from "@/components/modern/PageHero";

interface PageHeaderProps {
    title: string;
    current_page: string;
    description?: string;
}

export default function PageHeader({
    title,
    current_page,
    description,
}: PageHeaderProps) {
    return (
        <PageHero
            title={title}
            breadcrumb={current_page}
            description={description}
        />
    );
}
