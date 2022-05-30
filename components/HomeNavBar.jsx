import Link from "next/link";
import styles from "../styles/HomeNavBar.module.css";
import HomeLogo from "./HomeLogo";

const HomeNavBar = () => {
  return (
    <div className={styles.navBar}>
      <HomeLogo />

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
