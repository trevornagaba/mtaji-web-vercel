import "../styles/styles.css";
import "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer";

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
            <footer className="max-w-full mx-auto px-4 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex-col space-y-4">
                        <HomeLogo />
                        <div className="flex gap-2">
                            <img src="/assets/linked_in.svg" alt="linkedin" />
                            <img src="/assets/facebook.svg" alt="facebook" />
                            <img src="/assets/twitter.svg" alt="twitter" />
                            <img src="/assets/instagram.svg" alt="instagram" />
                        </div>
                    </div>
                    <div className="flex-col space-y-4">
                        <div className="flex gap-2">
                            <img src="/assets/email.svg" alt="email" />
                            <span> support@mtaji.io </span>
                        </div>
                        <div className="flex gap-2">
                            <img src="/assets/phone.svg" alt="phone" />
                            <span>01222845686</span>
                        </div>
                    </div>
                    <div className="flex-col space-y-4">
                        <p>About</p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </div>
                    <div className="flex-col space-y-4">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>AML Policy</p>
                    </div>
                </div>
                <div className="my-8 text-center">
                    <small className="text-xs">&copy; Mansa Finance. All Rights Reserved.</small>
                </div>
            </footer>
        </>
    );
}

export default MyApp;
