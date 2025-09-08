import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="section-footer-3 position-relative pt-120">
                    <div className="container-fluid">
                        <div className="container position-relative z-2">
                            <div className="row pb-110">
                                <div className="col-lg-5 col-12">
                                    <Link className="navbar-brand" href="/">
                                        <img
                                            src="/assets/imgs/pages/startup/logo-dark.png"
                                            alt="Sierlab Logo"
                                            width="200"
                                            // height="150"
                                        />
                                        {/* <h5 className="mb-0">Sierlab</h5> */}
                                    </Link>
                                    <p className="text-white py-3">
                                        Sierlab embarks on a journey of <br />
                                        innovating &amp; building.
                                    </p>
                                    <Link href="#" className="d-flex gap-2">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <g opacity="0.4">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.0604 4.86069C9.3408 1.58029 14.6594 1.58029 17.9398 4.86069C21.2202 8.1411 21.2202 13.4597 17.9398 16.7401L12.0001 22.6798L6.0604 16.7401C2.78 13.4597 2.78 8.1411 6.0604 4.86069ZM12.0001 13.2004C13.3256 13.2004 14.4001 12.1259 14.4001 10.8004C14.4001 9.47491 13.3256 8.40039 12.0001 8.40039C10.6746 8.40039 9.6001 9.47491 9.6001 10.8004C9.6001 12.1259 10.6746 13.2004 12.0001 13.2004Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-white">
                                            Lumumba drive, Roysambu, <br />
                                            Nairobi, Kenya
                                        </p>
                                    </Link>
                                    <Link href="#" className="d-flex gap-2">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <g opacity="0.4">
                                                    <path
                                                        d="M2.4039 7.06105L11.9998 11.859L21.5959 7.06099C21.5235 5.80056 20.4785 4.80078 19.1999 4.80078H4.7999C3.52132 4.80078 2.47626 5.8006 2.4039 7.06105Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M21.5999 9.74227L11.9998 14.5423L2.3999 9.74233V16.8008C2.3999 18.1263 3.47442 19.2008 4.7999 19.2008H19.1999C20.5254 19.2008 21.5999 18.1263 21.5999 16.8008V9.74227Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-white">
                                            support@sierlab.com
                                        </p>
                                    </Link>
                                </div>
                                <div className="col-lg-7 mt-lg-0 mt-8">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-6">
                                            <h6 className="text-white pb-3">
                                                Company
                                            </h6>
                                            <div className="d-flex flex-column align-items-start">
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        About
                                                    </p>
                                                </Link>
                                                <Link href="/blog">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        News
                                                    </p>
                                                </Link>
                                                <Link href="./pricing">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Pricing
                                                    </p>
                                                </Link>
                                                <Link href="/services">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Services
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6">
                                            <h6 className="text-white pb-3">
                                                Help
                                            </h6>
                                            <div className="d-flex flex-column align-items-start">
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Customer Support
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Delivery Details
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Term &amp; Condition
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Privacy Policy
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-6 mt-md-0 mt-5">
                                            <h6 className="text-white pb-3">
                                                Resources
                                            </h6>
                                            <div className="d-flex flex-column align-items-start">
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Design Kit
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Development Tutorial
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        How to - Code
                                                    </p>
                                                </Link>
                                                <Link href="#">
                                                    <p className="hover-effect-1 text-white opacity-75">
                                                        Become a Partner
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative bg-footer-3">
                                <div className="d-flex flex-column flex-md-row gap-3 align-items-center p-4">
                                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-md-5 gap-3">
                                        <Link href="/about">
                                            <span className="btn-text text-white">
                                                About
                                            </span>
                                        </Link>
                                        <Link href="/services">
                                            <span className="btn-text text-white">
                                                Solutions
                                            </span>
                                        </Link>
                                        <Link href="/pricing">
                                            <span className="btn-text text-white">
                                                Pricing
                                            </span>
                                        </Link>
                                        <Link href="/blog">
                                            <span className="btn-text text-white">
                                                News
                                            </span>
                                        </Link>
                                    </div>
                                    <ul className="list-unstyled d-flex mb-0 justify-content-center ms-md-auto">
                                        <li>
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 320 512"
                                                    >
                                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>

                                        <li className="ms-3">
                                            <Link href="#">
                                                <span className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center py-4 d-flex align-items-center justify-content-center flex-wrap">
                                <p className="text-white opacity-50 mb-0">
                                    Copyright &amp; design by
                                </p>
                                <Link href="#" className="text-white">
                                    <span className="text-white opacity-100 fw-medium">
                                        &nbsp; ©Sierlab &nbsp;
                                    </span>
                                </Link>
                                <p className="text-white opacity-50 mb-0">
                                    2025, All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary position-absolute top-0 start-0 w-100 h-100" />
                </div>
            </footer>
        </>
    );
}
