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
                            a more impactful way to invest
                        </strong>
                    </p>
                    <p className={styles.text}>
                        We started mtaji to build the capital market that Africa
                        needs; one that is built for, rather than designed to
                        exclude, the micro small and medium businesses that are
                        the backbone of Africa&apos;s economy. Our purpose is to fund
                        the next generation of companies that will transform
                        Africa. Crowdfunding has always been a fundamental part
                        of African culture. We leverage it for business success!
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
                        One thing that the founders of mtaji have in common is
                        we have all invested in an African business before. If
                        you are reading this today, I bet you have too! <br />
                        <br />
                        First it was your sister&apos;s boutique, you sent some
                        money back home for her to get first stock. Then it was
                        your best friend&apos;s startup; they&apos;ve gone on to
                        raise ten times that from investors all over the world.
                        Last week it was in your brother&apos;s catering
                        business, he had won his first big gig. This is how we
                        have always lived. <br />
                        <br />
                        With mtaji.io, we are taking this way of life
                        mainstream. We provide the tools to allow businesses to
                        raise money from their communities and for investors to
                        back their favorite businesses. <br />
                        <br />
                        We created mtaji.io for the dreamers and for the
                        believers. First for the founders that dream to build
                        the next Chipper cash, Rocket Health, Safeboda,
                        Flutterwave. Then for the investors who believe in the
                        potential of small business to transform Africa&apos;s
                        fortunes. For those passionate about entrepreneurship
                        and ready to &apos;vote&apos; for their favorite startup with
                        their hard earned shillings, naira, rand, dollar, pound.
                        Join us on our journey.
                    </p>
                </div>
                <div className={styles.storyImg}>
                    <Image
                        src="/assets/group_pic.svg"
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
                        years of experience working in the world&quot;s leading
                        organisations. You are in good hands.
                    </p>
                </div>
                <div className={styles.experts}>
                    <ExpertProfileCard
                        imageLink={"/assets/emmanuel_agidi.svg"}
                        name={"Emmanuel Agidi"}
                        position={"Founder & Head of Operations"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/emmanuel-agidi/"
                        }
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/trevor.svg"}
                        name={"Trevor Nagaba"}
                        position={"Founder & CEO"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/trevor-nagaba/"
                        }
                    />

                    <ExpertProfileCard
                        imageLink={"/assets/arnold.svg"}
                        name={"Arnold Luima"}
                        position={"Founder & Head of Investments"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/arnold-luima-acca-a0747452/"
                        }
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/conifa.svg"}
                        name={"Conifa Ndawula"}
                        position={"Head of Product"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/conifa-ndawula-b58682147/"
                        }
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/emma_wamibu.svg"}
                        name={"Emmanuel Nabusiu"}
                        position={"Head of Finance"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/emmanuel-nabusiu-wamibu-464b73103/"
                        }
                    />
                    <ExpertProfileCard
                        imageLink={
                            "https://res.cloudinary.com/daat2pgem/image/upload/v1659393236/mtaji/T94A6387_lbisla.jpg"
                        }
                        name={"Sydney Rugambwa"}
                        position={"Head of Growth"}
                        linkedinUrl={
                            "https://www.linkedin.com/in/sydney-rugambwa-25a61410a/"
                        }
                    />
                </div>
            </section>
        </PageTemplate>
    );
}

export default about;
