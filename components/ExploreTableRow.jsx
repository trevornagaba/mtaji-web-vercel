import Link from "next/link";
import styles from "../styles/ExploreTableRow.module.css";

const ExploreTableRow = () => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.companySummary}>
        <img src="/assets/logo_in_card.svg" alt="logo" />

        <div>
          <p className={styles.companyName}>SafeBoda</p>
          <p className={styles.companyTag}>Logistics Startup</p>
        </div>
      </div>

      <div className={styles.companyTarget}>
        <p className={styles.amount}>UGX 50M</p>

        <div className={styles.targetIndicator}>
          <div className={styles.targetBar}>
            <p className={styles.targetLabel}>82%</p>
          </div>
        </div>
      </div>

      <div className={styles.remainingDays}>
        <div className={styles.daysContainer}>
          <div>
            <img src="/assets/clock.svg" alt="clock" />
            <p>7</p>
          </div>
          <p className={styles.label}>days</p>
        </div>

        <Link href="/company-info">
          <button className={styles.viewButton}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreTableRow;
