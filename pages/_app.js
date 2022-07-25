import "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";

import HomeLogo from "../components/HomeLogo";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poppins"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <title>Mtaji</title>
            </Head>

            <Component {...pageProps} />
            {/* Footer */}
            <footer className="max-w-full mx-auto px-4 py-10 bg-white lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex-col space-y-4">
                        <HomeLogo />
                        <div className="flex gap-4 items-center">
                            <a
                                href="https://www.linkedin.com/company/mtaji-io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/assets/linked_in.svg"
                                    alt="linkedin"
                                />
                            </a>
                            <a
                                href="https://facebook.com/mtaji_io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/assets/facebook.svg"
                                    alt="facebook"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://twitter.com/mtaji_io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/assets/twitter.svg"
                                    alt="twitter"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/mtaji.io/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/assets/instagram.svg"
                                    alt="instagram"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex-col space-y-4">
                        <div className="flex gap-2">
                            <img src="/assets/email.svg" alt="email" />
                            <a
                                href="mailto:support@mtaji.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span> support@mtaji.io </span>
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <img src="/assets/phone.svg" alt="phone" />
                            <span>01222845686</span>
                        </div>
                    </div>
                    <div className="flex-col space-y-4">
                        <p>
                            <Link href="/about">About</Link>
                        </p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </div>
                    <div className="flex-col space-y-4">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>
                            <Link href="/aml">AML Policy</Link>
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <small className="text-xs">
                        &copy; Mansa Finance. All Rights Reserved.
                    </small>
                </div>
            </footer>
        </>
    );
}

export default MyApp;
