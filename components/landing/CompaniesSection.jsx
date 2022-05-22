import styles from "../../styles/landing/CompaniesSection.module.css";

const CompaniesSection = () => {
  return (
    <>
      <p className={styles.sectionHeader}>
        Companies currently raising capital on mtaji
      </p>
      <div className={styles.companiesSection}>
        <div className={styles.companies}>
          <div className={styles.company}>
            <img
              className={styles.companyImage}
              src="/assets/bike.jpg"
              alt="bike"
            />
            <img
              className={styles.companyLogo}
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className={styles.companyName}>Safe Boda</p>

            <div className={styles.companyDetails}>
              <div className={styles.companyTarget}>
                <p className={styles.detailTitle}>Target</p>
                <p>UGX 50M</p>
              </div>
              <div className={styles.companyDeadline}>
                <p className={styles.detailTitle}>To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className={styles.companySummary}>
              Lorem ipsum dolor, a short description of what the company is all
              about...
            </p>
          </div>

          <div className={styles.company}>
            <img
              className={styles.companyImage}
              src="/assets/bike.jpg"
              alt="bike"
            />
            <img
              className={styles.companyLogo}
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className={styles.companyName}>Safe Boda</p>

            <div className={styles.companyDetails}>
              <div className={styles.companyTarget}>
                <p className={styles.detailTitle}>Target</p>
                <p>UGX 50M</p>
              </div>
              <div className={styles.companyDeadline}>
                <p className={styles.detailTitle}>To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className={styles.companySummary}>
              Lorem ipsum dolor, a short description of what the company is all
              about...
            </p>
          </div>

          <div className={styles.company}>
            <img
              className={styles.companyImage}
              src="/assets/bike.jpg"
              alt="bike"
            />
            <img
              className={styles.companyLogo}
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className={styles.companyName}>Safe Boda</p>

            <div className={styles.companyDetails}>
              <div className={styles.companyTarget}>
                <p className={styles.detailTitle}>Target</p>
                <p>UGX 50M</p>
              </div>
              <div className={styles.companyDeadline}>
                <p className={styles.detailTitle}>To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className={styles.companySummary}>
              Lorem ipsum dolor, a short description of what the company is all
              about...
            </p>
          </div>
        </div>

        <button>Explore</button>
      </div>
    </>
  );
};

export default CompaniesSection;
