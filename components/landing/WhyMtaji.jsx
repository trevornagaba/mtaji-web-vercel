import styles from "../../styles/landing/WhyMtaji.module.css";

const WhyMtaji = () => {
  return (

      <div className={styles.content}>
        <p className={styles.title}>Why we need mtaji</p>
        <div className={styles.underline} />

        <div className={styles.pointsList}>
          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
            80% of revenue generating businesses in Africa need additional capital to move from good to great
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Millenials and professionals in diaspora are looking for a source of passive income. 
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Micro, small and medium enterprises form the backbone of most
              African economies, leading employment in Sub-Saharan Africa.
            </p>
          </div>

        </div>
      </div>
  );
};

export default WhyMtaji;
