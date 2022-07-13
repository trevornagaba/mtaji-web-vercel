import styles from "../../styles/landing/WhyMtaji.module.css";

const WhyMtaji = () => {
  return (
    <div className={styles.section}>
      <div className={styles.backgroundCover} />

      <div className={styles.content}>
        <p className={styles.title}>Why we need mtaji</p>
        <div className={styles.underline} />

        <div className={styles.pointsList}>
          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
            Africa’s finance gap for small and medium enterprises
              <br /> (SMEs) stands at $331bn.
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
            51% of Sub Saharan Africa&apos;s 44 million formal MSMEs require 
              <br /> more finance than they can access to grow their businesses.
            </p>
          </div>

          <div className={styles.point}>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
            Micro, small and medium enterprises form the backbone of most
              <br />African economies, leading employment in Sub-Saharan Africa.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyMtaji;
