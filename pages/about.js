import React from "react";
import ExpertProfileCard from "../components/expertProfileCard/expertProfileCard";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/about.module.css";

function about() {
    return (
        <PageTemplate hasNavbar={true} hasRaiseFunds={true} hasWrapper={true}>
            <section className={styles.aboutSection}>
                <div className={styles.ourStory}>
                    <p className={styles.heading}>
                        <strong>We set out to provide</strong>
                        <br/>
                        <strong style={{color:"#09062D80"}}>a smarter way to invest</strong>
                    </p>
                    <p className={styles.text}>
                        Nulla quis lorem ut libero male suada feu giat. Nulla
                        quis lorem ut libero male suada feugiat. Lorem ipsum
                        dolor sit amet, con se ct etur adipis cing elit.
                        nfleareNulla quis lorem ut libero male suada feu giat.
                        Nulla quis lorem ut libero male suada feugiat. Lorem
                        ipsum dolor sit amet, con se ct etur adipis cing elit.
                        nfleare
                    </p>
                </div>
                <div className={styles.aboutImg}>
                    <div>
                        <img src="/assets/about1.svg" alt=""></img>
                    </div>
                    <div>
                        <img src="/assets/about2.svg" alt=""></img>
                    </div>
                </div>
            </section>
            <section className={styles.ourStorySection}>
                <div className={styles.ourStory}>
                    <p className={styles.heading}>
                        <strong>Our Story</strong>
                    </p>
                    <p className={styles.text}>
                        Nulla quis lorem ut libero male suada feu giat. Nulla
                        quis lorem ut libero male suada feugiat. Lorem ipsum
                        dolor sit amet, con se ct etur adipis cing elit.
                        nfleareNulla quis lorem ut libero male suada feu giat.
                        Nulla quis lorem ut libero male suada feugiat. Lorem
                        ipsum dolor sit amet, con se ct etur adipis cing elit.
                        nfleare Nulla quis lorem ut libero male suada feu giat.
                        Nulla quis lorem ut libero male suada feugiat. Lorem
                        ipsum dolor sit amet, con se ct etur adipis cing elit.
                        nfleareNulla quis lorem ut libero male suada feu giat.
                        Nulla quis lorem ut libero male suada feugiat. Lorem
                        ipsum dolor sit amet, con se ct etur adipis cing elit.
                        nfleare
                    </p>
                </div>
                <div className={styles.storyImg}>
                    <img src="/assets/ourStory.svg" alt=""></img>
                </div>
            </section>
            <section className={styles.ourExperts}>
                <div className={styles.expertsText}>
                    <strong className={styles.heading}>
                        Meet our team of experts
                    </strong>
                    <p className={styles.text}>
                        Nulla quis lorem ut libero male suada feu giat. Nulla
                        quis lorem ut libero male suada feugiat. Lorem ipsum
                        dolor sit amet, con se ct etur adipis cing elit.
                    </p>
                </div>
                <div className={styles.experts}>
                    <ExpertProfileCard
                        imageLink={"/assets/expert1.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert2.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert3.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert4.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert5.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                    <ExpertProfileCard
                        imageLink={"/assets/expert6.svg"}
                        name={"Michael Scott"}
                        position={"Founder"}
                    />
                </div>
            </section>
        </PageTemplate>
    );
}

export default about;
