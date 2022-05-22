import styles from "../../styles/WhyMtaji.module.css";

const WhyMtaji = () => {
  return (
    <div className={styles.section}>
      <div className={styles.backgroundCover} />

      <div className={styles.content}>
        <p className={styles.title}>Why you need mtaji</p>
        <div className={styles.underline} />

        <div className={styles.pointsList}>
          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              90% of revenue generating businesses in Africa
              <br /> need additional capital to move from good to great
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Millenials and professionals in diaspora are looking
              <br /> for a source of passive income
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Millenials and professionals in diaspora are looking
              <br /> for a source of passive income
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMtaji;
