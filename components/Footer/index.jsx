import Grid from "@mui/material/Grid";
import styles from "./Footer.module.css";
import HomeLogo from "../HomeLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <Grid
        style={{
            padding: "8vh 5vw"
        }}

    >
        <div className={styles.container}>
        <div className={styles.section}>
            <div>
            <p className={styles.title}>
                Is your company looking to <br />
                raise funds?
            </p>
            <p className={styles.description}>
                Get connected with mission driven investors and your community
                <br />
                of users, customers and friends.
            </p>
            </div>

            <a href="https://forms.gle/6B9qZWfFKASvbu289"  target="_blank" rel="noreferrer">
            <button>Get Started</button>
            </a>
        </div>

        <img className={styles.circles} src="/assets/circles.svg" alt="circles" />
        </div>
        <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.socialLinks}>
            <HomeLogo />

            <div className={styles.imageLinks}>
                <Link href="https://www.linkedin.com/company/mtaji-io" ><img src="/assets/linked_in.svg" alt="linkedin" /></Link>
                <img src="/assets/facebook.svg" alt="facebook" />
                <img src="/assets/twitter.svg" alt="twitter" />
                <img src="/assets/instagram.svg" alt="instagram" />
            </div>
            </div>

            <div className={styles.contactLinks}>
            <div className={styles.link}>
                <img src="/assets/email.svg" alt="email" />
                <span> support@mtaji.io </span>
            </div>

            <div className={styles.link}>
                <img src="/assets/phone.svg" alt="phone" />
                <span>01222845686</span>
            </div>
            </div>

            <div className={styles.otherLinks}>
            <div>
                <p><Link href="/about">About</Link></p>
                <p>FAQs</p>
                <p>Blog</p>
            </div>

            <div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p><Link href="/amlpolicy">AML Policy</Link></p>
            </div>
            </div>
        </div>

        <p className={styles.copyright}>
            &copy; Mansa Finance. All Rights Reserved.
        </p>
        </div>
    </Grid>
  );
};

export default Footer;
