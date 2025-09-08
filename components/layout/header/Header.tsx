import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({
    scroll,
    isMobileMenu,
    handleMobileMenu,
}: any) {
    return (
        <>
            <header>
                <div>
                    {/* TOP-BAR 5 */}
                    <div className="top-bar bg-light-2">
                        <div className="container d-flex justify-content-md-between justify-content-center align-items-center">
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <Link href="#" className="fs-7 border-dark">
                                    info@sierlab.com
                                </Link>
                                <Link
                                    href="telto:+(254) 731 824 251"
                                    className="fs-7 border-dark"
                                >
                                    +(254) 731 824 251
                                </Link>
                            </div>
                            <div className="social-icons d-none d-md-flex">
                                <Link
                                    href="#"
                                    className="border border-top-0 border-dark border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md"
                                >
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link
                                    href="#"
                                    className="border border-top-0 border-dark border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md"
                                >
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link
                                    href="#"
                                    className="border border-top-0 border-dark border-bottom-0 border-opacity-10 icon-shape icon-md"
                                >
                                    <i className="bi bi-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav
                        className={`navbar navbar-expand-lg z-5 ${
                            scroll
                                ? "navbar-stick top-0 position-fixed w-100"
                                : ""
                        }`}
                    >
                        <div className="container mt-0 mb-0">
                            <Link className="navbar-brand" href="/">
                                <img
                                    src="/assets/imgs/pages/startup/logo.png"
                                    alt="Sierlab Logo"
                                    width="200"
                                    // height="150"
                                />
                                {/* <h5 className="mb-0">Sierlab</h5> */}
                            </Link>
                            <div className="d-none d-lg-flex">
                                <MainMenu />
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary d-none d-md-flex hover-up"
                                >
                                    <span>let’s talk</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_816_117)">
                                            <path
                                                d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>

                                <div
                                    className="burger-icon burger-icon-white border rounded-3 top-0 end-0"
                                    onClick={handleMobileMenu}
                                >
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <MobileMenu
                        isMobileMenu={isMobileMenu}
                        handleMobileMenu={handleMobileMenu}
                    />
                </div>
            </header>
        </>
    );
}
