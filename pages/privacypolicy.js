import SubscribeCard from "../components/Blog/subscribeCard";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/privacy.module.css";

const PRIVACY = () => {
    return (
        <PageTemplate hasNavbar={true} hasWrapper={true} hasFooter={true}>
            <div className={styles.privacyDiv}>
                <section>
                    <h1 className={styles.heading}>Privacy Policy</h1>
                    <p className={styles.text}>
                        This website privacy policy (&quot;Privacy Policy&quot;)
                        describes how Mansa Finance Limited (hereinafter
                        referred to as “Mansa Finance Limited” &quot;we,&quot;
                        &quot;us,&quot; or &quot;our&quot;) collect, use, and
                        share information about users of our websites, and
                        associated services (collectively, our
                        &quot;Website&quot;\). By using our Website, you
                        acknowledge and consent to our practices described
                        below. Your use of our Website is also subject to our
                        Terms of Use.
                    </p>
                </section>
                <section>
                    <h2 className={styles.subHeading}>
                        <strong>INFORMATION WE COLLECT </strong>
                    </h2>
                    <h3 className={styles.subHeading}>
                        Information you provide us{" "}
                    </h3>
                    <p className={styles.text}>
                        We receive information about you if you choose to
                        provide it to us, such as when you register for and
                        create a profile on our Website. This information may
                        include but not limited to your name, address, phone
                        number, email address, photo, National Identification
                        Number, Bank Verification Number, date of birth, income,
                        status as an accredited investor, your biography, and
                        your website. If you choose to invest in a business
                        through our Website, we will collect payment information
                        from you, such as financial account information or
                        payment card information, and we may collect information
                        to verify your income, such as a bank statement. Please
                        note that we do not store your payment card information,
                        but we do store other financial information. If you
                        choose to add an investment entity to your profile, we
                        will also collect information about the entity.
                    </p>
                    <p className={styles.text}>
                        If you would like to raise funding for your business
                        with our Website, we collect information about you and
                        your business, your fundraising terms, and payment
                        information.
                    </p>
                    <p className={styles.text}>
                        We also collect information when you post questions or
                        comments on our Website, send or receive direct messages
                        from other users, or when you contact us, including via
                        email, phone, or social media.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        When you visit our Website{" "}
                    </h3>
                    <p className={styles.text}>
                        We automatically collect certain information when you
                        use our Website, including: (i) information about your
                        interaction with our Website, including the actions you
                        take, the pages or other content you view or otherwise
                        interact with, and the dates and times of your visits;
                        and (ii) device information, such as your IP address,
                        operating system information, and web browser and/or
                        device type and language.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Information from other sources
                    </h3>
                    <p className={styles.text}>
                        In order to provide the services on our Website,
                        including verifying your identity and other information
                        you provide us, we collect information about our users
                        from third parties and combine it with other information
                        we receive from or about our users.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Third party services</h3>
                    <p className={styles.text}>
                        If you decide to register through or otherwise grant
                        access to a third party social networking or
                        authentication service that we may make available
                        (&quot;
                        <u>Integrated Service</u>&quot;), such as Facebook,
                        LinkedIn, or Twitter, we will collect certain personal
                        information that you have provided to the Integrated
                        Service (such as your name, email address, photo, and
                        other information you make available via the Integrated
                        Service) and an authentication token from the Integrated
                        Service. The personal information collected from the
                        Integrated Service may be used to register you on our
                        Website and to provide some of the features of our
                        Website. You may revoke our access to your account on
                        the Integrated Service at any time by updating the
                        appropriate settings in the account preferences of the
                        respective Integrated Service. You understand that
                        certain features of our Website may not be available to
                        you if you choose to remove our access to your account
                        with the Integrated Service.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Cookies and other technologies
                    </h3>
                    <p className={styles.text}>
                        When you visit our Website, we and our service providers
                        collect certain information through the use of
                        &quot;cookies&quot; and other technologies to better
                        understand how our users navigate through our Website,
                        learn what content is being viewed, and administer and
                        improve our Website. Cookies are small text files that
                        web servers place on an internet user’s computer that
                        are designed to store basic information and to recognize
                        your browser. We may use both session cookies and
                        persistent cookies. A session cookie disappears after
                        you close your browser. A persistent cookie remains
                        after you close your browser and may be used by your
                        browser on subsequent visits to our Website. We use
                        Google Analytics cookies for data analytics purposes,
                        and you can find more information on how Google uses
                        data from these cookies at
                        www.google.com/policies/privacy/partners/. Please
                        consult your web browser to learn the proper way to
                        modify its cookie settings. Please note that if you
                        delete, or choose not to accept, cookies from our
                        Website, you may not be able to utilize the features of
                        our Website to their fullest potential
                    </p>
                    <p className={styles.text}>
                        Some of our service providers use cookies and similar
                        technologies to show you our ads on other websites
                        across the Internet. These ads may be directed to you
                        based on your past visits to our website and your use of
                        our Website in order to provide you with the most
                        relevant content. You can opt out of our service
                        provider’s use of cookies for directed marketing
                        purposes by visiting the Network Advertising
                        Initiative’s opt-out page. Please note that after
                        opting-out, you will continue to see ads from these
                        service providers, but they will not be based on your
                        past activities.
                    </p>
                </section>
                <section>
                    <h2 className={styles.subHeading}>
                        <strong>HOW WE USE INFORMATION WE COLLECT</strong>
                    </h2>
                    <p className={styles.text}>
                        We may use the information that we collect for the
                        following purposes:
                        <li>
                            To provide, improve, and personalize our Website;
                        </li>
                        <li>
                            To monitor and analyze usage trends and preferences;
                        </li>
                        <li>To processes payments and investments</li>
                        <li>
                            To communicate with you, including for
                            administrative, informational, promotional, and
                            marketing purposes, and to respond to your requests
                            or inquiries;
                        </li>
                        <li>
                            To enforce this Privacy Policy or other terms to
                            which you have agreed, and to protect the rights,
                            property, or safety of us, our Website, our users,
                            or any other person.
                        </li>
                    </p>
                </section>
                <section>
                    <h2 className={styles.subHeading}>
                        <strong>HOW WE SHARE INFORMATION WE COLLECT</strong>
                    </h2>
                    <h3 className={styles.subHeading}>
                        Businesses You Invest In.
                    </h3>
                    <p className={styles.text}>
                        Please note that your profile page is viewable by other
                        users and the public. For information on privacy
                        settings available to you, please see the &quot;Choices
                        You Have With Your Information&quot; section below. Any
                        comments or information you submit or share on public
                        areas of the Website, such as questions for founders,
                        your bio, or a description of your business, can be
                        read, collected, or used by other users and the public.
                        We are not responsible for the information you choose to
                        submit or share on the public areas of our Website, such
                        as investment pages or your public profile. We also
                        share your information with other users when you send or
                        receive direct messages from other users
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Other Users and the Public
                    </h3>
                    <p className={styles.text}>
                        Please note that your profile page is viewable by other
                        users and the public. For information on privacy
                        settings available to you, please see the &quot;Choices
                        You Have With Your Information&quot; section below. Any
                        comments or information you submit or share on public
                        areas of the Website, such as questions for founders,
                        your bio, or a description of your business, can be
                        read, collected, or used by other users and the public.
                        We are not responsible for the information you choose to
                        submit or share on the public areas of our Website, such
                        as investment pages or your public profile. We also
                        share your information with other users when you send or
                        receive direct messages from other users.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Affiliates, Banks, and Partners.{" "}
                    </h3>
                    <p className={styles.text}>
                        In order to provide the services on our Website, we may
                        share your information with our affiliates and third
                        parties, such as banks, investment banking firms,
                        accountants, and similar entities.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Service providers.</h3>
                    <p className={styles.text}>
                        We use service providers to provide certain services to
                        us, such as analytics services, fraud detection, payment
                        processing, and marketing services. We only provide our
                        service providers with the information necessary for
                        them to perform these services. Our analytics providers
                        may collect information about your online activities
                        over time and across different online services when you
                        use our Website.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Change of control</h3>
                    <p className={styles.text}>
                        In the event that Mansa Finance Limited is merged or
                        sold, or in the event of a transfer or sale of some or
                        all of our assets, we may disclose or transfer
                        information we collect in connection with the
                        negotiation and/or conclusion of such a transaction.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Other disclosures.</h3>
                    <p className={styles.text}>
                        We may disclose information about you to third parties
                        if (a) we believe that disclosure is reasonably
                        necessary to comply with any applicable law, regulation,
                        legal process, or governmental request, (b) to enforce
                        our agreements, policies, or terms of service, (c) to
                        protect the security or integrity of our Website, (d) to
                        protect the property, rights, and safety of us, our
                        users, or the public, (e) to respond in an emergency
                        which we believe in good faith requires us to disclose
                        information to assist in preventing the death or serious
                        bodily injury of any person, or (f) to investigate and
                        defend ourselves against any third-party claims or
                        allegations.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Choices You Have with Your Information
                    </h3>
                    <p className={styles.text}>
                        You can update the information you provided us by
                        accessing your account settings. Through your account
                        settings, you can also hide some portions of your
                        profile from other users or the general public on the
                        Internet as well as hide your profile from search
                        engines that collect information from our websites..
                    </p>
                    <p className={styles.text}>
                        You can also opt out of promotional email communications
                        at any time by clicking on the unsubscribe link in an
                        email your received from us. You can also update your
                        communication preferences through your account settings
                        on our Website..
                    </p>
                    <p className={styles.text}>
                        Our users also have the “right to erasure”, meaning you
                        may ask us to delete or remove your personal data. To
                        make such a request, you may email us at
                        support@mtaji.io
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Links to Other Websites
                    </h3>
                    <p className={styles.text}>
                        In the event that Our Website contains links to websites
                        maintained by third parties, please be aware that these
                        third-party websites are governed by their own privacy
                        policies and are not covered by our Privacy Policy. We
                        are not responsible for the content or policies
                        maintained by these websites. Please familiarize
                        yourself with the privacy policy of any third-party
                        websites you visit
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Security of Your Information
                    </h3>
                    <p className={styles.text}>
                        The security of your information is important to us. We
                        have implemented reasonable security measures to help
                        protect the information in our care. However, no data
                        transmission over the Internet or method of storage is
                        100% secure. As a result, while we strive to protect
                        your information, we cannot and do not guarantee or
                        warrant the security of information collected or
                        otherwise obtained by us in connection with our Website.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Children’s Privacy</h3>
                    <p className={styles.text}>
                        Our Website is not intended for children under the age
                        of 13, and we do not knowingly collect personal
                        information from children under the age of 13. If we
                        learn that we have collected the personal information
                        from a child under the age of 13, we will take steps to
                        delete the information. If you are aware that a child
                        under 13 has provided us with personal information,
                        please contact us at support@mtaji.io
                    </p>
                    <p className={styles.text}>
                        We will bear no responsibility for any changes to the
                        Service or any suspension or termination of your access
                        to or use of the Service.
                    </p>
                    <p className={styles.text}>
                        You are solely responsible for your interactions with
                        Site and Service users, as well as any other parties you
                        communicate with on or via the Site, Services, and/or
                        Linked Sites. Mansa Finance reserves the right, but has
                        no duty, to become involved in these disputes in any
                        way.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>
                        Changes to Our Privacy Policy
                    </h3>
                    <p className={styles.text}>
                        Please revisit this page periodically to stay aware of
                        any changes to our Privacy Policy, which we may update
                        from time to time. If we modify our Privacy Policy, we
                        will make it available on our Website and indicate the
                        effective date. In the event that the modifications
                        materially alter your rights or obligations hereunder,
                        we will make reasonable efforts to notify you of the
                        change. For example, we may send a message to your email
                        address, if we have one on file, or generate a pop-up or
                        similar notification when you access our Website for the
                        first time after such material changes are made. Your
                        continued use of our Website after the revised Privacy
                        Policy has become effective indicates that you have
                        read, understood, and agreed to the current version of
                        our Privacy Policy.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subHeading}>Contacting Us</h3>
                    <p className={styles.text}>
                        If you have any questions, comments, or concerns about
                        our Privacy Policy, please email us at support@mtaji.io
                    </p>
                </section>
                <SubscribeCard />
            </div>
        </PageTemplate>
    );
};

export default PRIVACY;
