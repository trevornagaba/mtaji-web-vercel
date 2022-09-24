import PageTemplate from "../components/pageTemplate";
import styles from "../styles/termsofservice.module.css";
import SubscribeCard from "../components/subscribeToMailList";
import Image from "next/image";
import Head from "next/head";

const TERMSOFSERVICE = () => {
    return (
        <>
            <Head>
                <title>Mtaji | Terms of service </title>
                <meta
                    name="description"
                    content="Terms of service for Equity Crowdfunding in Africa"
                />
            </Head>

            <PageTemplate hasNavbar={true} hasWrapper={true} hasFooter={true}>
                <div className={styles.tosDiv}>
                    <section>
                        <h1 className={styles.heading}>Terms of Service</h1>
                        <p className={styles.text}>
                            PLEASE READ THE TERMS OF THIS POLICY CAREFULLY
                            BEFORE USING OUR SITE OR MOBILE APPLICATION
                        </p>
                        <p className={styles.text}>
                            You hereby agree to these Policy in order to access
                            and/or use some parts of the Mansa Finance Limited
                            (hereinafter referred to as “Mansa Finance”
                            &quot;Us&quot; &quot;Our&quot; &quot;We&quot;)
                            website (the &quot;Site&quot;).
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            1. What are these terms?{" "}
                        </h3>
                        <p className={styles.text}>
                            The terms under which you may access Mansa Finance
                            Limited (&quot;Mansa Finance&quot; &quot;Us&quot;
                            “Our” &quot;We&quot;) website (“Site”) or Mobile
                            Application (&quot;App&quot;) are outlined in this
                            Policy (the “Policy&quot;). Our mission is to
                            connect fundraisers (&quot;the Fundraisers&quot;)
                            who are working on innovative new businesses or
                            Projects (&quot;Startups&quot;) with people who may
                            be able to provide financing to those Startups (the
                            &quot;Investors&quot;). The Policy also outlines the
                            content requirements that apply whenever you link to
                            our Site, upload content to it, communicate with
                            other users on it, or use it in any other way. The
                            services, features, content, or Applications that
                            may be offered from time to time by Mansa Finance in
                            connection with this Site and/or Mansa
                            Finance&apos;s business are collectively referred to
                            as the &quot;Services.&quot;
                        </p>
                        <p className={styles.text}>
                            This Policy, which complements all of our other
                            rules, is impliedly accepted and agreed to by you by
                            your use of our Site and if you do not agree to
                            these terms, please do not use our Site or App.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>2. Eligibility </h3>
                        <p className={styles.text}>
                            You may only use the Site and the Services if you
                            are at least 13 years of age. If you are under the
                            age of 18 or under the age of majority in the
                            jurisdiction in which you are located, you may only
                            use the Site and the Services under the supervision
                            of a parent or legal guardian. You may not use the
                            Site if you are under 13 years of age. Mansa Finance
                            reserves the right to require you to provide Mansa
                            Finance with proof of your age and, if applicable,
                            approval of your use of the Site and the Services by
                            your parent/legal guardian. Mansa Finance may
                            terminate your access to and use of the Site and the
                            Services without warning if it determines that you
                            do not meet the foregoing eligibility requirements.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            3. Registered Users
                        </h3>
                        <p className={styles.text}>
                            In order to access or use certain Services, you must
                            become a &quot;Registered User&quot; by creating an
                            account (an &quot;Account&quot;) and choosing a
                            password that you will use to access your Account.
                            By registering, you represent and warrant to the
                            Company that all registration and other information
                            you submit to or through the Site is truthful,
                            accurate, current, and complete, and you agree to
                            immediately provide corrected information if any of
                            the submitted information shall no longer be
                            truthful, accurate, current and complete. You
                            further represent and warrant that your use of the
                            Site and the Services does not violate any
                            applicable laws, rules, or regulations. Without
                            limiting any of Mansa Finance&apos;s other available
                            legal remedies, if you provide any registration or
                            other information that is untrue, inaccurate, or
                            incomplete, or Mansa Finance has reasonable grounds
                            to suspect that such is the case, Mansa Finance may
                            immediately, and without notice to you, suspend or
                            terminate your Account and refuse any and all use by
                            you of the Site and the Services. Your registration
                            on the Site and your use of the Site and the
                            Services is void where prohibited.{" "}
                        </p>
                        <p className={styles.text}>
                            You are solely responsible for maintaining the
                            confidentiality of your password and for any and all
                            unauthorised use of your Account and password.
                            Although Mansa Finance will not be liable for any of
                            your damages caused by any unauthorised use of your
                            Account, you may be liable for Mansa Finance&apos;s
                            or others&apos; losses as a result of such
                            unauthorised use. Please notify Mansa Finance
                            immediately at support@mtaji.io if you suspect any
                            unauthorised use of your Account or unauthorised
                            access to your password. You have no right to
                            transfer your Account to another person or entity,
                            and Mansa Finance has the right to withdraw or
                            recover your Account if Mansa Finance determines, in
                            its sole discretion, that such action is suitable in
                            the circumstances. As a Registered User, you agree
                            that Mansa Finance may send you invoices, documents,
                            notices, and other communications about the Site,
                            the Services, and/or your use of them electronically
                            (through email or postings or links on the Site), as
                            well as commercial ads, marketing materials, and so
                            on. You agree that Mansa Finance may send you the
                            aforementioned messages via your Account or any
                            email address(es) you submit to Mansa Finance as
                            part of your Account registration or otherwise.
                        </p>
                        <p className={styles.text}>
                            Mansa Finance reserves the right, but has no
                            responsibility or duty, to monitor behaviour on the
                            Site at any time and without notice to determine
                            compliance with this Policy or to comply with any
                            law, regulation, or approved government request. You
                            expressly consent to such monitoring. If Mansa
                            Finance does monitor the Site or the Services, Mansa
                            Finance makes no promise or warranty that Mansa
                            Finance will take any action in connection with any
                            of the monitored activity, and Mansa Finance assumes
                            no liability in this regard.
                        </p>
                        <p className={styles.text}>
                            You acknowledge that there are risks associated with
                            dealing with other users acting under false
                            pretenses, and you bear all risks of responsibility
                            or harm in connection with transactions of these
                            services that are the subject of transactions
                            conducted through the Site. Such risks include, but
                            are not limited to, misrepresentation of information
                            about a user or a Startup, breach of warranty,
                            breach of contract, and infringement of third-party
                            rights, as well as any resulting claims. You
                            acknowledge that Mansa Finance is not liable or
                            responsible for any damages, liabilities, costs,
                            harms, inconveniences, business disruptions, or
                            expenditures of any type incurred as a result of or
                            in connection with any transactions with others
                            conducted through the Site.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            4. Content on our Site or App
                        </h3>
                        <p className={styles.text}>
                            We make reasonable attempts to update the
                            information on our Site and App. However, we are not
                            obligated to update our content, and we give no
                            assurances that the information on our Site or App
                            is accurate, comprehensive, or current. Our Site
                            contains content that is for general information
                            only and is not intended to be advice to you.
                        </p>
                        <p className={styles.text}>
                            We strive to make our Site and App as good as we
                            can, but we cannot guarantee that any of the content
                            on either our Site or App will be error- or
                            omission-free. Furthermore, we make no promises on
                            the security or absence of viruses or bugs on this
                            Site or App. We recommend you use your own virus
                            prevention program when using wither our Site or
                            App.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            5. Accessing our Site and downloading our App
                        </h3>
                        <p className={styles.text}>
                            It costs nothing to access our Site or download our
                            App. We cannot promise that this “free of charge
                            service” will be available at all times. Without
                            prior notice, we have the right to suspend, limit,
                            remove, or change any aspect of our Site or App.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            6. Intellectual Property Rights
                        </h3>
                        <p className={styles.text}>
                            All intellectual property rights in our Site, App,
                            and published content are ours. These rights are all
                            reserved.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            7. Dispute Resolution
                        </h3>
                        <p className={styles.text}>
                            Any disagreements between you and Mansa Finance have
                            will be settled through a binding arbitration except
                            for situations where a small claims court may be
                            appropriate, and your claims may not be brought as a
                            class action. YOU AGREE TO WAIVE YOUR RIGHT TO SEEK
                            Court Judgment to enforce or defend your rights
                            under this contract.
                        </p>
                        <p className={styles.text}>
                            Notwithstanding the above, nothing will be deemed to
                            waive, preclude, or otherwise limit the right of
                            either party to: <br /> a. bring an individual
                            action in small claims court;
                            <br /> b. pursue enforcement action through the
                            applicable federal, state, or local agency if that
                            action is available;
                            <br /> c. seek injunctive relief in a court of law;{" "}
                            <br /> d. to file suit in a court of law to address
                            an intellectual property infringement claim; or{" "}
                            <br />
                            e. Pursue any available remedies under federal or
                            state securities law.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            8. Limitation of our Liability
                        </h3>
                        <p className={styles.text}>
                            To the fullest extent permitted by law, we disclaim
                            any and all express or implied terms, conditions,
                            warranties, representations, or other terms that may
                            apply to our Site, our App, or any content on
                            either. even if it was foreseen, we will not be
                            liable to you for any loss or damage resulting from
                            or connected with: <br />
                            a. Your use of, or inability to use our Site or App;{" "}
                            <br /> b. Your use of, or reliance on, any content
                            displayed on our Site or App; <br /> c. Your use of
                            any links to other Sites contained in our Site or
                            App; or <br /> d. Any virus, distributed
                            denial-of-service attack, or other technologically
                            harmful material due to your use (in any way) of our
                            Site or App; or <br /> e. Any loss or profit, loss
                            of business, business interruption, or loss of
                            business opportunity.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            9. Misuse of our Site
                        </h3>
                        <p className={styles.text}>
                            By consenting to use our Site and/or App, you hereby
                            agree not to intentionally introduce any malicious
                            software, such as viruses, worms, Trojan horses,
                            logic bombs, or other potentially harmful elements,
                            into our Site or App. No attempt must be made to
                            gain unauthorised access to our Site or App, the
                            server on which it is hosted, or any other server,
                            computer, or database that is linked to our Site or
                            Application. Denial-of-service or distributed
                            denial-of-service attacks against our Site or App
                            are not permitted. Any such. If you violate the term
                            above, you will be reported to the appropriate law
                            enforcement agencies.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            10. Prohibited Uses
                        </h3>
                        <p className={styles.text}>
                            As a condition of your access to the Site and use of
                            the Services, you are prohibited from (i) posting,
                            uploading, exhibiting, communicating, or
                            distributing content that violates any applicable
                            laws, rules, or regulations or which Mansa Finance,
                            in its sole and absolute discretion, deems to be
                            inappropriate and (ii) engaging in conduct which
                            violates any applicable laws, rules or regulations
                            or which Mansa Finance, in its sole and absolute
                            discretion, deems to be inappropriate. Examples of
                            such prohibited content and prohibited conduct
                            include, without limitation, the following:
                            <li>
                                Posting, uploading or transmitting any content
                                that violates any privacy right, publicity
                                right, patent, trademark, trade secret,
                                copyright or other proprietary right, or
                                contract right or other right of any party;
                            </li>
                            <li>
                                Posting, uploading or transmitting any content
                                or engaging in any conduct that is offensive,
                                harmful, threatening, abusive, harassing,
                                defamatory, libelous, or obscene or that is
                                unlawful in any manner or that degrades,
                                intimidates, promotes or incites racism,
                                bigotry, hatred or physical harm of any kind
                                against any group or individual, including,
                                without limitation, on the basis of religion,
                                gender, sexual orientation, race, ethnicity,
                                age, or disability;
                            </li>
                            <li>
                                Posting, uploading or transmitting any content
                                that is pornographic or that exploits people
                                (adults or children) in a sexual or violent
                                manner; or contains nudity, excessive violence,
                                or offensive subject matter or that contains a
                                link to any of the foregoing types of content or
                                to an adult Site or in any way using the Site or
                                the Services in connection with any adult
                                entertainment or pornography business;
                            </li>
                            <li>
                                Impersonating any person or entity, or
                                submitting any materials to the Site or through
                                the Services that are false, inaccurate,
                                deceptive, misleading, unlawful, or are
                                otherwise in violation of this Policy including,
                                without limitation, utilizing misleading email
                                addresses, or forged headers or otherwise
                                manipulated identifiers in order to disguise the
                                origin of any content transmitted to the Site or
                                through the Services;
                            </li>
                            <li>
                                Prohibited in engaging in any commercial
                                activity on the Site or including any links to
                                commercial services or Sites or uploading,
                                posting or otherwise transmitting any content
                                that contains advertising or any solicitation
                                regarding products, goods or services;
                            </li>
                            <li>
                                Interfering with any user&apos;s right to
                                privacy; soliciting or collecting user names,
                                passwords, emails, personal identifying
                                information or other information from any user;
                                engaging in conduct that poses or creates a
                                privacy or security risk to any person; or
                                posting private information about a third party;
                            </li>
                            <li>
                                Engaging in conduct that involves the posting,
                                uploading or transmission of unsolicited or
                                unauthorized advertising or promotional
                                materials;
                            </li>
                            <li>
                                Engaging in any action or inaction that could
                                disable, overload, impair the infrastructure of
                                the Site or impair the proper functioning of the
                                Site or the App, including, without limitation,
                                uploading, posting or otherwise transmitting any
                                software or materials which contain a virus or
                                other harmful or disruptive component;
                                circumventing, altering or interfering with any
                                computer software, or security-related features
                                of the Site or the Services; or deciphering,
                                decompiling, disassembling or reverse
                                engineering any of the software comprising or in
                                any way utilized in connection with the Site or
                                the Services;
                            </li>
                            <li>
                                Accessing or attempting to access the Site or
                                the Services using automated means (such as
                                harvesting bots, robots, spiders, or scrapers)
                                or gaining, or attempting to gain, unauthorized
                                access to any servers, computer systems or
                                databases utilized in connection with the Site
                                or the Services;
                            </li>
                            <li>
                                Using the communication systems provided by the
                                Site for any solicitation or other commercial
                                purposes, except as explicitly permitted by the
                                User Agreements or otherwise authorized by Mansa
                                Finance, or Mansa Finance and the specific user,
                                as Applicable;
                            </li>
                            <li>
                                Uploading, posting or transmitting any content
                                that advocates or provides instruction on
                                illegal activity or communicating on or through
                                the Site regarding illegal activities with the
                                intent to commit them;
                            </li>
                            <li>
                                Making any untrue statement of a material fact
                                or omitting to state a material fact necessary
                                in order to make the statements made, in the
                                light of the circumstances under which they were
                                made, not misleading, in connection with the
                                purchase or sale of any security; and
                            </li>
                            <li>
                                Engaging in any conduct that in Mansa
                                Finance&apos;s sole discretion restricts or
                                inhibits any other user from enjoying the use of
                                the Site or any of the Services.
                            </li>
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            11. Breach of this policy
                        </h3>
                        <p className={styles.text}>
                            You are only allowed to use our Site if you comply
                            with this acceptable usage policy, and if you do
                            not, we may take any or all of the following actions
                            as punishment: <br />
                            1. Permanent, temporary, or immediate termination of
                            your ability to use our Site; <br />
                            2. The immediate, short-term, or long-term removal
                            of any funds you may have uploaded to our Site;{" "}
                            <br />
                            3. Issue you a warning; 4. Proceed to take legal
                            proceedings against you for the reimbursement of all
                            costs (including, but not limited to, reasonable
                            administrative and legal costs) resulting from the
                            breach; or <br />
                            5. Disclosure of information to law enforcement
                            officials that we deem essential or that is mandated
                            by law. <br /> <br /> We are not limited to the
                            following mentioned above. Where we believe that
                            there has been a violation of this Policy, we may
                            take any action we feel appropriate.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            12. Your Interactions with Other Users
                        </h3>
                        <p className={styles.text}>
                            Mansa Finance employs a variety of approaches to
                            validate the accuracy of information submitted by
                            users. However, due to the limitations of Internet
                            verification, Mansa Finance cannot validate the
                            identity of users. We encourage you to analyse the
                            users with whom you are dealing using the different
                            tools and content accessible on the Site and
                            elsewhere
                        </p>
                        <p className={styles.text}>
                            Mansa Finance employs a variety of approaches to
                            validate the accuracy of user-provided data.
                            However, due to the limitations of Internet
                            verification, Mansa Finance is unable to certify the
                            identity of users. We encourage you to analyse the
                            individuals with whom you are dealing using the
                            various tools and content accessible on the Site as
                            well as elsewhere.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            13. Pricing and Fees
                        </h3>
                        <p className={styles.text}>
                            Mansa Finance has the right to charge fees for using
                            the Site or certain Services and reserves the right
                            to vary the fees it charges. You will have the
                            option to see and accept the fees that you will be
                            charged before you pay them. No costs are
                            refundable. You agree that, in addition to all other
                            sums payable under this Policy, you are responsible
                            for paying all sales, use, value-added, or other
                            taxes - federal, state, or otherwise - assessed or
                            imposed as a result of your use of the Site and the
                            Services, regardless of their designation.
                        </p>
                        <p className={styles.text}>
                            Mansa Finance will charge your payment method at the
                            moment of purchase. You allow Mansa Finance to
                            charge all amounts specified on the Site for the
                            Services you choose.
                        </p>
                        <p className={styles.text}>
                            If you pay any fees using a credit card, Mansa
                            Finance may request pre-authorization of your credit
                            card account prior to your transaction to ensure
                            that the credit card is valid and has sufficient
                            money or credit to cover the transaction.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            14. Third Party Proprietary Property
                        </h3>
                        <p className={styles.text}>
                            The Services may include third-party Mansa Finance
                            licensors&apos; proprietary property/content (such
                            as logos, copyrights, trademarks, and so on)
                            (&quot;Third Party Proprietary Property&quot;). Your
                            use of Third-Party Proprietary Property is strictly
                            prohibited unless expressly permitted by the Terms
                            and Service.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            15. Submitted Ideas/Feedback
                        </h3>
                        <p className={styles.text}>
                            All comments, suggestions, ideas, notes, drawings,
                            concepts or other information disclosed or offered
                            by you through the Site and the App or in response
                            to solicitations made through the Site or the
                            Services (collectively, &quot;Feedback&quot;) is
                            entirely voluntary and shall be deemed to be
                            non-confidential and shall forever remain the sole
                            property of Mansa Finance. You understand and
                            acknowledge that Mansa Finance has both internal and
                            external resources which may have developed, or may
                            in the future develop, ideas, content, programming,
                            etc. identical to or similar to your Feedback and
                            you agree that Mansa Finance will not incur any
                            obligation or liability to you or otherwise as a
                            result of (i) any such similarities or (ii) Mansa
                            Finance&apos;s review of any of the Feedback. Mansa
                            Finance shall exclusively own, throughout the
                            universe in perpetuity, and you hereby irrevocably
                            assign, all rights of every kind and nature (whether
                            currently existing or hereafter developed) in and to
                            the Feedback and Mansa Finance shall be entitled to
                            unrestricted use of the Feedback for any and all
                            purposes whatsoever, commercial or otherwise,
                            without any payment or other obligation to you or
                            any other person involved with the creation and/or
                            submission to Mansa Finance of the Feedback. You
                            hereby waive any and all of your rights of droit
                            moral and similar rights with respect to the
                            Feedback.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>16. Termination</h3>
                        <p className={styles.text}>
                            You can cancel your account at any moment by
                            emailing support@mtaji.io. If you cancel your
                            account, you are still obligated to pay any
                            outstanding fees accrued prior to cancellation due
                            to your use of the Services. If you break any of the
                            terms of this Policy, Mansa Finance&apos;s
                            authorisation to use the Services will be instantly
                            revoked. Furthermore, Mansa Finance reserves the
                            right, in its sole discretion, to cancel your user
                            account for the Site or Services, as well as suspend
                            or terminate your access to the Site or Services,
                            for any reason or no reason, with or without notice.
                            Mansa Finance also maintains the right, at any time,
                            to alter or cancel the Service (including by
                            limiting or eliminating specific parts of the
                            Service), temporarily or permanently without notice
                            to you.
                        </p>
                        <p className={styles.text}>
                            We will bear no responsibility for any changes to
                            the Service or any suspension or termination of your
                            access to or use of the Service.
                        </p>
                        <p className={styles.text}>
                            You are solely responsible for your interactions
                            with Site and Service users, as well as any other
                            parties you communicate with on or via the Site,
                            Services, and/or Linked Sites. Mansa Finance
                            reserves the right, but has no duty, to become
                            involved in these disputes in any way.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>17. Indemnity.</h3>
                        <p className={styles.text}>
                            You agree to defend Mansa Finance, its subsidiaries,
                            affiliates, licensors and assignees and their
                            respective officers, directors, managers,
                            stockholders, members, agents, partners and
                            employees (the &quot;Mansa Finance
                            Indemnitees&quot;), from and against any and all
                            claims, actions, suits, demands or other proceedings
                            brought by or on behalf of any third party, and to
                            indemnify and hold the Mansa Finance Indemnitees
                            harmless against any losses, liabilities and other
                            damages (including, but not limited to, reasonable
                            attorneys&apos; fees), in any case arising out of or
                            related to (i) your access to and/or use of the Site
                            and the Services, including, without limitation,
                            your use of the Site and the Services in connection
                            with any transaction in securities; (ii) a violation
                            or breach by you, or any user of your account, of
                            any provision of this Policy including, without
                            limitation, a breach of any of the representations,
                            warranties or agreements set forth in the Policy;
                            and/or (iii) any content that you post on or through
                            the Site or the Services. This defense and
                            indemnification obligation will survive following
                            the termination of your use of the Site and the
                            Services.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            18. No Guarantee of Diverse Mtaji Investment Options
                            for Redemption
                        </h3>
                        <p className={styles.text}>
                            Mansa Finance has no control over which and how many
                            Startups will seek to sponsor offerings through the
                            Site at any time and cannot guarantee that a diverse
                            number, or any number, of Mansa Finance Investments,
                            will be available for investment on the Site at any
                            time.
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            19. Your Responsibilities as an Investor
                        </h3>
                        <p className={styles.text}>
                            You are a self-directed investor who is individually
                            responsible for determining the suitability of your
                            investment decisions. Mansa Finance is not
                            responsible for the investment decisions made by you
                            or on your behalf. Mansa Finance is not responsible
                            for the strategies, actions or inactions taken with
                            respect to your Mansa Finance Investments. Mansa
                            Finance is not responsible for the gains or losses
                            you incur. The employees, agents and representatives
                            of Mansa Finance are not authorized to give you
                            investment advice, and any instructions you receive
                            from Mansa Finance with respect to Mansa Finance
                            Investments will be limited to technical or
                            administrative guidance.
                        </p>
                        <p className={styles.text}>
                            You assume individual responsibility for determining
                            the suitability of all investment decisions and
                            strategies you make or implement. You must base your
                            investment decisions upon all information reasonably
                            available to you and your own assessment of risks
                            and rewards. You are solely responsible for knowing
                            the rights and terms for all investments you make in
                            Mansa Finance Investments
                        </p>
                    </section>
                    <section>
                        <h3 className={styles.subHeading}>
                            20. Contacting Mansa Finance; Reporting of
                            Violations
                        </h3>
                        <p className={styles.text}>
                            You may contact Mansa Finance at support@mtaji.io.
                            Please report any misuse of the Site or the Services
                            or any violation of the Policy by sending an email
                            to Mansa Finance at support@mtaji.io.
                        </p>
                    </section>
                    <div style={{ marginTop: "5vh " }}>
                        <SubscribeCard />
                    </div>
                </div>
            </PageTemplate>
        </>
    );
};

export default TERMSOFSERVICE;
