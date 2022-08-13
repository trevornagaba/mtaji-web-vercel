import React from "react";
import ExpertProfileCard from "../components/expertProfileCard/expertProfileCard";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/about.module.css";
import Image from "next/image";
import RaiseFunds from "../components/RaiseFunds";

function about() {
    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={true}
            hasRaiseFunds={true}
            hasFooter={true}
        >
            <section className={styles.aboutSection}>
                <div className={styles.ourStory}>
                    <p className={styles.heading}>
                        <strong>We set out to provide</strong>
                        <br />
                        <strong style={{ color: "#09062D80" }}>
                            a smarter way to invest
                        </strong>
                    </p>
                    <p className={styles.text}>
                        We started mtaji to build the capital market that Africa
                        needs. Our purpose is to fund the next generation of
                        companies that will transform Africa. Our vision is
                        clear, to be the most innovation securities exchange in
                        Africa.
                    </p>
                </div>
                <div className={styles.aboutImg}>
                    <div>
                        <Image
                            src="https://res.cloudinary.com/daat2pgem/image/upload/v1659393229/mtaji/T94A6393_zrnbc0.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                        />
                    </div>
                    <div>
                        <Image
                            src="https://res.cloudinary.com/daat2pgem/image/upload/v1659393234/mtaji/T94A6376_slede6.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center -35px"
                            priority={true}
                        />
                    </div>
                </div>
            </section>
            <section className={styles.ourStorySection}>
                <div className={styles.ourStory}>
                    <p className={styles.heading}>
                        <strong>Our Story</strong>
                    </p>
                    <p className={styles.text}>
                        Mtaji is the Swahili word for &quot;capital&quot; and
                        mtaji.io is a marketplace that brings together value
                        investors (individual and institutional) and ambitious
                        founders to create a critical neo finance channel,
                        providing patient capital for founders and potential
                        returns for investors.
                        <br />
                        <br />
                        When we took a step back, we noticed a perplexing trend.
                        Walk up to an African founder trying to scale up their
                        business and the biggest challenge they&apos;ll share
                        with you is access to capital. Conversely, listings on
                        Africa&apos;s equity capital markets (the source of this
                        much needed capital) have been in decline in the last 10
                        years. At the time of writing, East Africa&apos;s
                        largest stock exchange, the NSE has not had a listing
                        for the last five years. The Uganda Securities Exchange
                        has seen two in the last five years. Africa&apos;s
                        largest stock exchange, the JSE in South Africa recorded
                        24 delistings in the 2021 alone. Additionally, this is
                        in complete contrast to global trends. As noted in
                        PwC&apos;s Global IPO Watch 2021, Global IPO proceeds in
                        2021 were the largest ever recorded globally. What does
                        this mean? The African capital markets, in their current
                        state, are inherently not fit for purpose. We are fixing
                        this
                        {/* <br />
                        <br /> Our conclusion; the African capital markets in
                        their current state are not fit for purpose. The cost of
                        listing is extravagant in comparison to the size of the
                        organizations that desperately need it. The
                        organizations that do meet the required criteria
                        continue to source for growth capital outside the
                        African equities capital market, due to what they also
                        perceive as onerous regulations among other reasons. The
                        result; neither large, medium nor small sized businesses
                        fully leverage the opportunity provided by the African
                        capital markets. We are fixing this disconnect by
                        democratizing the equity investment space to make it
                        available to both earlier stage business and earlier
                        stage investors. Everyone can not invest from as little
                        as UGX 50,000 (approximately $13). We must remember that
                        the overall objective of the capital markets is to
                        provide a channel for capital to flow from those that
                        have funds in excess to those that are best able to make
                        use of it, regardless of size. This is our vision for
                        mtaji. Lastly, we did it for the investors. For those
                        who believe in the potential of small business to
                        transform Africa’s fortunes. For those passionate about
                        entrepreneurship and ready to “vote” for their favorite
                        startup with their hard earned shillings, naira, rand.
                        Join us on our journey. */}
                    </p>
                </div>
                <div className={styles.storyImg}>
                    <Image
                        src="https://res.cloudinary.com/daat2pgem/image/upload/v1659393232/mtaji/T94A6428_pj0nkt.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                    />
                </div>
            </section>
            <section className={styles.ourExperts}>
                <div className={styles.expertsText}>
                    <strong className={styles.heading}>
                        Meet our team of experts
                    </strong>
                    <p className={styles.text}>
                        Our team brings together experts in the fields of
                        entrepreneurship, financial services, technology,
                        accounting and management consulting; combined over 25
                        years of experience working in the world&quot;s premier
                        organisations. You are in good hands.
                    </p>
                </div>
                <div className={styles.experts}>
                    <ExpertProfileCard
                        imageLink={
                            "https://res.cloudinary.com/daat2pgem/image/upload/v1659393232/mtaji/T94A5661_wuz7qm.jpg"
                        }
                        name={"Trevor Nagaba"}
                        position={"CEO & Team lead"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert2.svg"}
                        name={"Emmanuel Agidi"}
                        position={"Founder & Head of Operations"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert3.svg"}
                        name={"Arnold Luima"}
                        position={"Founder & Head of Investments"}
                    />
                    <ExpertProfileCard
                        imageLink={
                            "https://res.cloudinary.com/daat2pgem/image/upload/v1659907972/mtaji/T94A6376_2_hdvjqr.jpg"
                        }
                        name={"Conifa Ndawula"}
                        position={"Head of Product"}
                    />
                    <ExpertProfileCard
                        imageLink={
                            "https://res.cloudinary.com/daat2pgem/image/upload/v1659393236/mtaji/T94A6387_lbisla.jpg"
                        }
                        name={"Sydney Rugambwa"}
                        position={"Head of Growth"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert6.svg"}
                        name={"Emmanuel Nabusiu"}
                        position={"Finance Manager"}
                    />
                </div>
            </section>
        </PageTemplate>
    );
}

export default about;
