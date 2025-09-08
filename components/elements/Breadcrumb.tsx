import Link from "next/link";

export default function Breadcrumb({ page }: any) {
    return (
        <div className="d-flex align-items-center gap-2 d-inline-flex mt-3">
            <Link href="/">
                <span className="text-capitalize fw-medium">home</span>
            </Link>
            <i className="fa-solid fa-angle-right text-secondary fs-7" />

            <span>
                <span className="text-capitalize text-primary fw-medium">{page}</span>
            </span>
        </div>
    );
}
