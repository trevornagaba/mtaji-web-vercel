import WhyMtaji from "./WhyMtaji";
import styles from "../../styles/landing/BenefitsSection.module.css";

const Benefits = () => {
    return (
        <>
            <div className={styles.benefits}>
                <WhyMtaji />

                <p className={styles.sectionHeader}>
                    Put your money to use, make a return
                </p>

                <div className={styles.section}>
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>Interest on debt</p>
                        <p className={styles.description}>
                            Look out for companies issuing debt instruments{" "}
                            <br />, pay attention to their interest per annum
                            offering
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>
                            Marked to liquidity events
                        </p>
                        <p className={styles.description}>
                            Watch the value of your investment
                            <br />
                            rise as your portfolio companies <br />
                            goes through subsequent priced rounds
                            <br />a higher return.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="/assets/idea.svg" />
                        <p className={styles.title}>
                            Grab a front row seat <br /> on a startup journey
                        </p>
                        <p className={styles.description}>
                            Ride the highs and wither <br /> the lows with a
                            founding team
                            <br />
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
