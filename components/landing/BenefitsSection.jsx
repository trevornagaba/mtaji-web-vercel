import styles from "../../styles/landing/BenefitsSection.module.css";

const BenefitsSection = () => {
  return (
    <div className={styles.section}>
      <BenefitCard />
      <BenefitCard />
      <BenefitCard />
    </div>
  );
};

const BenefitCard = () => {
  return (
    <div className={styles.card}>
      <img src="/assets/idea.svg" />
      <p className={styles.title}>Unlock opportunities</p>
      <p className={styles.description}>
        Explore list of thriving African <br />
        companies looking for capital
      </p>
    </div>
  );
};

export default BenefitsSection;
