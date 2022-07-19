import Link from "next/link";
import React from "react";
import AccordionComponent from "../components/AccordionComponent";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/faq.module.css";

const stories = [
    {
        title: "Why invest in startups?",
        story: "Technology startups are changing nearly every aspect of life, creating explosive social and financial value. Most people have to wait for a company to go public before they can invest and be a part of a company's growth. By the time a startup goes public or gets acquired, relatively most of the 'alpha' has been accrued by early private investors and investment banks. OurCrowd's equity crowdfunding platform allows investors exclusive opportunities to invest in promising private startup companies alongside top-tier VCs at the same terms, starting at $10,000.",
    },
    {
        title: "What is equity crowdfunding?",
        story: "Crowdfunding uses the collective power and wisdom of the crowd to pool resources together in support of a specific project. Equity-based crowdfunding enables individual investors to leverage crowd wisdom and pool capital for investment into private businesses or projects in exchange for equity ownership. As opposed to popular crowdfunding websites like Kickstarter and Indiegogo, OurCrowd and its investors take equity stakes in our portfolio companies. In addition to equity, OurCrowd assumes board seats, assigns mentors, and stays actively involved in the business development of all of our companies.",
    },
    {
        title: "How do I get started?",
        story: "Next Story Here",
    },
    {
        title: "Can I speak with someone from Investor Relations?",
        story: "Next Story Here",
    },
];
const titleStyle = {
    fontSize: "20px",
    fontWeight: "400",
    color: "#1A1A1B",
    display: "flex",
    flexDirection: "row",
};
const storyStyle = {
    padding: "20px 40px",
    fontSize: "16px",
    lineHeight: "2rem",
    color: "#09062D80",
};

const FAQs = () => {
    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={false}
            isGreyBackgound={true}
        >
            <div className={styles.container}>
                <div className={styles.banner}>
                    <p className="text-5xl text-white font-extrabold">Frequently Asked Questions</p>
                </div>
                <div className={styles.faqContent}>
                    <p
                        style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#1c2854",
                        }}
                    >
                        Get Started
                    </p>
                    <ul className={styles.faqList}>
                    {stories.map((story, index) => {
                            return (
                                <li key={index} className="accordion-list__item">
                                    <AccordionComponent
                                        {...story}
                                        titleStyle={titleStyle}
                                        storyStyle={storyStyle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <p
                        style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "#1c2854",
                        }}
                    >
                        Investing with Mtaji
                    </p>
                    <ul className={styles.faqList}>
                    {stories.map((story, index) => {
                            return (
                                <li key={index} className="accordion-list__item">
                                    <AccordionComponent
                                        {...story}
                                        titleStyle={titleStyle}
                                        storyStyle={storyStyle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <p
                        style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "#1c2854",
                        }}
                    >
                        Investing with Mtaji
                    </p>
                    <ul className={styles.faqList}>
                    {stories.map((story, index) => {
                            return (
                                <li key={index} className="accordion-list__item">
                                    <AccordionComponent
                                        {...story}
                                        titleStyle={titleStyle}
                                        storyStyle={storyStyle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <p
                        style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "#1c2854",
                        }}
                    >
                        Investing with Mtaji
                    </p>
                    <ul className={styles.faqList}>
                    {stories.map((story, index) => {
                            return (
                                <li key={index} className="accordion-list__item">
                                    <AccordionComponent
                                        {...story}
                                        titleStyle={titleStyle}
                                        storyStyle={storyStyle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <p
                        style={{
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "#1c2854",
                        }}
                    >
                        Investing with Mtaji
                    </p>
                    <ul className={styles.faqList}>
                        {stories.map((story, index) => {
                            return (
                                <li key={index} className="accordion-list__item">
                                    <AccordionComponent
                                        {...story}
                                        titleStyle={titleStyle}
                                        storyStyle={storyStyle}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <div className="my-10">
                        <div className="flex flex-row">
                            Didn't find what you were looking for?
                            <Link href="/contact">
                                <p
                                    className="text-[#01bbc8]"
                                    style={{ cursor: "pointer" }}
                                >
                                    Ask us here
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </PageTemplate>
    );
};

export default FAQs;
