import styles from "../styles/HomeLogo.module.css";
import Link from "next/link";

const HomeLogo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <img src="/assets/logo.svg" alt="logo" />
        <span>mtaji</span>
      </div>
    </Link>
  );
};

export default HomeLogo;
