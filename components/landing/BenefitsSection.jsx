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
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>Diversify your portfolio</p>
                        <p className={styles.description}>
                        Add Africa’s next business giant <br />
                        to your portfolio
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>Be an early investor</p>
                        <p className={styles.description}>
                        While investment in early stage<br />
                        businesses presents higher uncertainty, <br />
                        it also provides an opportunity for <br />
                        a higher return.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>Grab a front row seat <br /> on a startup journey</p>
                        <p className={styles.description}>
                        Ride the highs and wither <br /> the lows with a founding team<br />
                        of your choice

                        </p>
                    </div>
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
