import styles from "../styles/Footer.module.css";
import HomeLogo from "./HomeLogo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactLinks}>
          <HomeLogo />

          <div className={styles.link}>
            <img src="/assets/email.svg" alt="email" />
            <span> support@mtaji.io </span>
          </div>

          <div className={styles.link}>
            <img src="/assets/phone.svg" alt="phone" />
            <span>01222845686</span>
          </div>

          <div className={styles.imageLinks}>
            <img src="/assets/linked_in.svg" alt="linkedin" />
            <img src="/assets/facebook.svg" alt="facebook" />
            <img src="/assets/twitter.svg" alt="twitter" />
            <img src="/assets/instagram.svg" alt="instagram" />
          </div>
        </div>

        <div className={styles.otherLinks}>
          <p className={styles.title}>Other Links</p>

          <div className={styles.otherLinksContainer}>
            <div>
              <p>About</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>

            <div>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>AML Policy</p>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; Mansa Finance. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
