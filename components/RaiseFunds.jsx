import Link from "next/link";
import styles from "../styles/RaiseFunds.module.css";

const RaiseFunds = () => {
  return (
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

        <Link href="/signup">
          <button>Get Started</button>
        </Link>
      </div>

      <img className={styles.circles} src="/assets/circles.svg" alt="circles" />
    </div>
  );
};

export default RaiseFunds;
