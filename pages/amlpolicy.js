import PageTemplate from "../components/pageTemplate";
import styles from "../styles/aml.module.css";

const AML = () => {
    return (
        <PageTemplate
            hasNavbar={true}
            hasRaiseFunds={true}
            hasWrapper={true}
            hasFooter={true}
        >
            <div className={styles.amlDiv}>
                <h1 className={styles.heading}>AML/CFT Policy</h1>
                <section>
                    <h3 className={styles.subHeading}>
                        1. Definition of Money Laundering{" "}
                    </h3>
                    <p className={styles.text}>
                        Money laundering is the process of concealing or
                        disguising the existence, source, movement, destination,
                        or illegal application of illicitly derived property or
                        funds to make them appear legitimate. It has also been
                        viewed as an act designed in whole or in part to conceal
                        or disguise the nature, location, source, ownership, or
                        control of money to avoid the statutory requirement of
                        reporting such transactions.
                    </p>
                    <p className={styles.text}>
                        Money Laundering typically involves three (3)
                        independent stages:
                        <br /> ❖Placement of funds;
                        <br /> ❖ Layering of transactions to disguise the
                        source, ownership, and location of the funds; and
                        <br /> ❖ Integration of the funds into society in the
                        form of holdings that appear legitimate.
                    </p>
                    <p className={styles.text}>
                        Anti-Money Laundering Laws (AML) is a collection of
                        policies, laws, and rules intended to prevent or
                        criminalize the practice of making money through illegal
                        means. In other words, AML refers to the entire
                        procedure, methods, laws, and programs implemented to
                        address, restrain, and deter money laundering
                        activities.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>2. Commitment </h3>
                    <p className={styles.text}>
                        The Board and Executive Management of Mansa Finance
                        Limited (hereinafter referred to as “Mansa Finance” “We”
                        “Us”) have committed to establishing and implementing
                        all pertinent Anti-Money Laundering and Combatting the
                        Financing of Terrorism (AML/CFT) Programs, as well as to
                        ensuring compliance with all governmental regulations
                        and upholding the Financial Action Task Force (FATF)
                        recommendations in relation to the prevention of all
                        AML/CFT activities.
                    </p>
                    <p className={styles.text}>
                        Mansa Finance is dedicated to ensuring the monitoring
                        and implementation of its AML/CFT policies, procedures,
                        and controls and makes improvements where necessary
                        based on changes to Mtaji&apos;s assessment of the risk
                        of money laundering and terrorist financing or as
                        advised by a supervisory agency or regulators.
                    </p>
                    <p className={styles.text}>
                        The following AML/CFT compliance program has been
                        established by Mansa Finance to aid the fight against
                        money laundering.
                    </p>
                    <div className={styles.amlSubDiv}>
                        <h4 className={styles.text_bold}>
                            {" "}
                            a. Customer Due Diligence and Know Your Customer{" "}
                        </h4>
                        <p className={styles.text}>
                            Mansa Finance ensures that a business relationship
                            is only entered into or maintained with a customer
                            when it is satisfied that the information gathered
                            demonstrates sufficient knowledge about the customer
                            (i.e., the customer has disclosed his or her true
                            identity and a legitimate purpose for entering or
                            maintaining the business relationship with Mtaji).
                        </p>
                        <p className={styles.text}>
                            We, therefore, take reasonable steps to verify this
                            information of the customer in order to be satisfied
                            it is correct. Mansa Finance obtains information on
                            the nature and purpose of the proposed business
                            relationship between Mtaji and the customer, as well
                            as sufficient information to determine whether the
                            customer should be subject to enhanced customer due
                            diligence. We have also developed a risk-based
                            policies and processes to implement adequate
                            controls, which will make it easier to comply with
                            AML rules and reduce the risks connected with
                            non-face-to-face customers.
                        </p>
                        <p className={styles.text}>
                            In addition, we have implemented a strict KYC
                            process that ensures that only investors that are
                            accredited can partake in the opportunities in our
                            platform.
                        </p>
                    </div>
                    <div className={styles.amlSubDiv}>
                        <h4 className={styles.text_bold}>
                            {" "}
                            b. Designated Compliance Team{" "}
                        </h4>
                        <p className={styles.text}>
                            At Mansa Finance, the AML/CFT program is overseen by
                            a specialized compliance team, which is also in
                            charge of identifying risks and putting in place the
                            required controls. In order to identify unusual or
                            suspicious activity, they coordinate and monitor
                            daily adherence to applicable laws, rules,
                            regulations, industry best practices, and money
                            laundering laws and regulations. They also prepare
                            and deliver all required returns including
                            suspicious transactions are flagged and rendered to
                            the regulatory bodies in accordance with the proper
                            standards.
                        </p>
                    </div>
                    <div className={styles.amlSubDiv}>
                        <h4 className={styles.text_bold}>
                            {" "}
                            c. Risk Management{" "}
                        </h4>
                        <p className={styles.text}>
                            Using a risk-based approach to the assessment and
                            management of money laundering and terrorist
                            financing concerns, Mtaji have a risk committee that
                            reports to management on all risk and compliance
                            issues on a regular basis.
                        </p>
                    </div>
                    <div className={styles.amlSubDiv}>
                        <h4 className={styles.text_bold}>
                            {" "}
                            d. Internal Control{" "}
                        </h4>
                        <p className={styles.text}>
                            Internal controls refer to the mechanism, rules, and
                            procedures, designed to control risks in order to
                            comply with the relevant AML/CFT regulations. Our
                            internal controls address risks and compliance
                            requirements unique to Mtaji business
                        </p>
                    </div>
                    <div className={styles.amlSubDiv}>
                        <h4 className={styles.text_bold}>
                            {" "}
                            e. Records Retention{" "}
                        </h4>
                        <p className={styles.text}>
                            The Company maintains all information of our
                            customers must be maintained for a certain period
                        </p>
                    </div>
                </section>
                <section>
                    <h3 className={styles.subHeading}>3. Conclusion </h3>
                    <p className={styles.text}>
                        Mansa Finance is committed to ensuring that the company
                        prevents any form of money laundering in its company.
                    </p>
                </section>
            </div>
        </PageTemplate>
    );
};

export default AML;
