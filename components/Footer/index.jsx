import { useRouter } from "next/router"
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.css";
import HomeLogo from "../HomeLogo";
import Link from "next/link";
import SubscribeCard from "../Blog/subscribeCard";

const Footer = () => {

    const router = useRouter()
    // const footerForSubscribeBlog =["/blog","/privacypolicy","/termsofservice"]

  return (
    <Grid
        item
        style={{
            padding: "8vh 10%",
            width: "100vw"
        }}
        align="left"

    >
        {/* {router.pathname!=="/blog" || router.pathname!=="/blog"?
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
        : ""} */}
        <Grid
            container
            justifyContent={"left"}
        >
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                stylel={{

                }}
            >
                <div className={styles.socialLinks}>
                    <HomeLogo />
                    <div className={styles.imageLinks}>
                        <Link href="https://www.linkedin.com/company/mtaji-io" ><img src="/assets/linked_in.svg" alt="linkedin" /></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100084321720444" ><img src="/assets/facebook.svg" alt="facebook" /></Link>
                        <Link href="https://twitter.com/mtaji_io" ><img src="/assets/twitter.svg" alt="twitter" /></Link>
                        <Link href="https://www.instagram.com/mtaji_io" ><img src="/assets/instagram.svg" alt="instagram" /></Link>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                stylel={{
                    
                }}
            >
                <div className={styles.contactLinks}>
                    <div className={styles.link}>
                        <img src="/assets/email.svg" alt="email" />
                        <span> support@mtaji.io </span>
                    </div>

                    <div className={styles.link}>
                        <img src="/assets/phone.svg" alt="phone" />
                        <span>+256 759367905</span>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                stylel={{
                    
                }}
            >
                <div className={styles.otherLinks}>
                    <div>
                        <p><Link href="/about">About</Link></p>
                        <p><Link href="/faqs">FAQs</Link></p>
                        <p><Link href="/blog">Blog</Link></p>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                stylel={{
                    
                }}
            >
                <div className={styles.otherLinks}>
                    <div>
                        <p><Link href="/termsofservice">Terms of Service</Link></p>
                        <p><Link href="/privacypolicy">Privacy Policy</Link></p>
                        <p><Link href="/amlpolicy">AML Policy</Link></p>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                stylel={{
                    padding: "20vh 0"
                }}
            >
                <p className={styles.copyright}>
                    &copy; Mansa Finance. All Rights Reserved.
                </p>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default Footer;
