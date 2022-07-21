import styles from "../styles/Footer.module.css";
import HomeLogo from "./HomeLogo";
import Link from "next/link";

const Footer = () => {
  return (
  
    <div className={styles.footer}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex-col space-y-4">
            <HomeLogo />
            <div className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/company/mtaji-io"  target="_blank" rel="noreferrer">
                    <img
                        src="/assets/linked_in.svg"
                        alt="linkedin"
                    />
                </a>
                <a href="https://facebook.com/mtaji_io"  target="_blank" rel="noreferrer"><img
                    src="/assets/facebook.svg"
                    alt="facebook"
                    className="w-6 h-6"
                />
                </a>
                <a href="https://twitter.com/mtaji_io"  target="_blank" rel="noreferrer"><img
                    src="/assets/twitter.svg"
                    alt="twitter"
                    className="w-6 h-6"
                /></a>
                <a href="https://www.instagram.com/mtaji.io/"  target="_blank" rel="noreferrer">
                <img
                    src="/assets/instagram.svg"
                    alt="instagram"
                    className="w-6 h-6"
                /></a>
            </div>
        </div>
        <div className="flex-col space-y-4">
            <div className="flex gap-2">
                <img src="/assets/email.svg" alt="email" />
                <a href="mailto:support@mtaji.io"  target="_blank" rel="noreferrer"><span> support@mtaji.io </span></a>
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
            <p><Link href="/FAQs">FAQs</Link></p>
            <p><Link href="/blog">Blog</Link></p>
        </div>
        <div className="flex-col space-y-4">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>AML Policy</p>
        </div>
    </div>
    <div className="mt-8 text-center">
        <small className="text-xs">
            &copy; Mansa Finance. All Rights Reserved.
        </small>
    </div>
</div>
  );
};

export default Footer;
