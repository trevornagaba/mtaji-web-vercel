import Link from "next/link";
import styles from "../../styles/landing/TaglineSection.module.css";

const TaglineSection = () => {
  return (
    <div className={styles.tagline}>
      <div className={styles.taglineBackground} />

      <div className={styles.proposition}>
        <h1>
          Invest in Africa&apos;s <br />
          next big company
        </h1>
        <p>
          Be a part owner of a thriving business with as little as UGX 50,000
        </p>
        <div className={styles.btn}>
          <Link href="/signup">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
