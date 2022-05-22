import WhyMtaji from "./WhyMtaji";
import styles from "../../styles/landing/BenefitsSection.module.css";

const Benefits = () => {
  return (
    <>
      <div className={styles.benefits}>
        <WhyMtaji />

        <p className={styles.sectionHeader}>
          Mtaji is a marketplace for investors and founders in Africa
        </p>

        <div className={styles.section}>
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
        </div>
      </div>
    </>
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

export default Benefits;
