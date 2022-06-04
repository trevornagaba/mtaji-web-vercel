import Link from "next/link";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import styles from "../styles/HomeNavBar.module.css";
import HomeLogo from "./HomeLogo";
import axios from "axios";

const HomeNavBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    cookieCutter.set("myCookieName", "", { expires: new Date(0) });
    try {
      const response = axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth`,  
        { withCredentials: true }
      );    
    router.push("/login");
  } catch (error) {
    console.log(error)
  };}

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
        <span onClick={handleLogout}>Logout</span>
        <img src="/assets/account.svg" alt="account" />
      </div>
    </div>
  );
};

export default HomeNavBar;
