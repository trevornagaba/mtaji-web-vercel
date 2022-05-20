import Link from "next/link";
import styles from "../styles/LandingNavBar.module.css";

const LandingNavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="/assets/logo.svg" alt="logo" />
        <span>mtaji</span>
      </div>

      <div className={styles.links}>
        <Link href="/explore">
          <span>Explore</span>
        </Link>

        <Link href="/investment">
          <span>Investment 101</span>
        </Link>

        <Link href="/faqs">
          <span>FAQs</span>
        </Link>
      </div>

      <div className={styles.auth}>
        <Link href="/login">
          <span>Sign In</span>
        </Link>

        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingNavBar;
