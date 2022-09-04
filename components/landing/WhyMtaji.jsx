import styles from "../../styles/landing/WhyMtaji.module.css";

const WhyMtaji = () => {
  return (

      <div className={styles.content}>
        <p className={styles.title}>Why you need mtaji</p>
        <div className={styles.underline} />

        <div className={styles.pointsList}>
          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
            Raise money from your local community and from the diaspora. Even your customers would love to invest!
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Create a passive income stream. Let your money work for you.
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Micro, small and medium enterprises form the backbone of most
              African economies. Back then!
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Crowdfunding has always been a fundamental part of African cultures. We leverage it for business success.
            </p>
          </div>

        </div>
      </div>
  );
};

export default WhyMtaji;
