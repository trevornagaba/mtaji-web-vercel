import Link from "next/link";
import styles from "../styles/HomeNavBar.module.css";

const HomeNavBar = () => {
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

        <span>Portfolio</span>
        <span>Marketplace</span>
      </div>

      <div className={styles.account}>
        <span>FAQs</span>
        <img src="/assets/account.svg" alt="account" />
      </div>
    </div>
  );
};

export default HomeNavBar;
