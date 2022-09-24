import Link from "next/link";
import styles from "../styles/ExploreTableRow.module.css";

const ExploreTableRow = (props) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.companySummary}>
        <img src="/assets/logo_in_card.svg" alt="logo" />

        <div>
        {/* {.company)} */}
          <p className={styles.companyName}>{props.company.name}</p>
          <p className={styles.companyTag}>{props.company.industry}</p>
        </div>
      </div>

      <div className={styles.companyTarget}>
        <p className={styles.amount}>{props.company.targetAmount}</p>

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

        <Link href="/company">
          <button className={styles.viewButton}>View</button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreTableRow;
