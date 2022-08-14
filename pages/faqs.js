import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import AccordionComponent from "../components/AccordionComponent";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/faq.module.css";
import axios from "axios";
import SubscribeCard from "../components/subscribeToMailList";

const titleStyle = {
    fontSize: "20px",
    fontWeight: "400",
    color: "#1A1A1B",
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
};
const storyStyle = {
    padding: "20px 40px",
    fontSize: "16px",
    lineHeight: "2rem",
    color: "#09062D80",
};

const FAQs = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStories();
    }, []);

    const getStories = async () => {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/faqs`)
            .then((result) => {
                setStories(result.data);
            })
            .catch((error) => {
                setStories([]);
            });
    };

    const getSections = () => {
        const sections = [];
        stories?.map((story) => {
            if (!sections.includes(story.subSection)) {
                return sections.push(story.subSection);
            }
            return null;
        });
        return sections;
    };
    const sections = getSections();
    return (
        <>
            <div className={styles.banner}>
                <p className="text-5xl text-white font-extrabold">
                    Frequently Asked Questions
                </p>
            </div>
            <PageTemplate
                hasNavbar={true}
                isGreyBackgound={true}
                hasWrapper={true}
                hasFooter={true}
            >
                <div className={styles.container}>
                    <div className={styles.faqContent}>
                        {sections?.map((section) => {
                            return (
                                <>
                                    <p
                                        style={{
                                            fontSize: "24px",
                                            fontWeight: "700",
                                            color: "#1c2854",
                                        }}
                                    >
                                        {section}
                                    </p>
                                    <ul className={styles.faqList}>
                                        {stories?.map((story, index) => {
                                            if (story.subSection == section) {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="accordion-list__item"
                                                    >
                                                        <AccordionComponent
                                                            {...story}
                                                            titleStyle={
                                                                titleStyle
                                                            }
                                                            storyStyle={
                                                                storyStyle
                                                            }
                                                        />
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </>
                            );
                        })}

                        <div className="my-10">
                            <div className="flex flex-row">
                                Didn&apos;t find what you were looking for?
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
                    <SubscribeCard />
                </div>

                {/* <div style={{ marginTop: "5vh " }}>
                    <SubscribeCard />
                </div> */}
            </PageTemplate>
        </>
    );
};

export default FAQs;
