import styles from "../../styles/landing/CompaniesSection.module.css";

const CompaniesSection = () => {
  return (
    <>
      <p className={styles.sectionHeader}>
        Companies currently raising capital on mtaji
      </p>
      <div className={styles.companiesSection}>
        <div id="companies" className={styles.companies}>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard isFourthCard={true} />
        </div>

        <button>Explore</button>
        <div className={styles.prevButton} onClick={() => onScroll("left")}>
          <i className="material-icons">chevron_left</i>
        </div>
        <div className={styles.nextButton} onClick={() => onScroll("right")}>
          <i className="material-icons">chevron_right</i>
        </div>
      </div>
    </>
  );
};

const CompanyCard = ({ isFourthCard = false }) => {
  return (
    <div
      className={
        isFourthCard ? `${styles.company} ${styles.fourthCard}` : styles.company
      }
    >
      <img
        className={styles.companyLogo}
        src="/assets/logo_in_card.svg"
        alt="logo_in_card"
      />

      <p className={styles.companyName}>Safe Boda</p>

      <p className={styles.companyDescription}>
        Nulla quis lorem ut libero male suada feu giat. Nulla quis lorem ut
        libero male suada feugiat. Lorem ipsum dolor sit amet, con se ct etur
        adipis cing elit. nfleare
      </p>

      <p className={styles.raisingLabel}>Raising</p>
      <p className={styles.companyTarget}>UGX 50M</p>
      <div className={styles.targetDeadline}>
        <p className={styles.endsInLabel}>Ends in:</p>
        <p className={styles.timeLeft}>21h: 30m: 09s</p>
      </div>
    </div>
  );
};

const onScroll = (direction) => {
  const companiesContainer = document.getElementById("companies");
  if (direction == "left") {
    companiesContainer.scrollLeft -= 50;
  } else {
    companiesContainer.scrollLeft += 50;
  }
};

export default CompaniesSection;
