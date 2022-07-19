import React, { useEffect, useState } from "react";
import BlogPost from "../../components/Blog/blogPost";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/blog.module.css";
import { Posts } from "../../components/Blog/post";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Link from "next/link";

const TABS = ["All", "Broadcast", "Data structure", "Algorithm", "Enginering"];
const Blog = () => {
    const sortedAll = Posts.sort((a, b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);

        return date2 - date1;
    });
    const filterByCategory = (category) => {
        return Posts.filter((post) => {
            if (post.category.toLowerCase() == category.toLowerCase()) {
                return true;
            }
            return false;
        });
    };
    const featuredPost = Posts.find((post) => post.featured == true);

    console.log(featuredPost);
    const [selectedTab, setSelectedTab] = useState(TABS[0]);
    let [postToRender, setPostToRender] = useState([]);

    const onClickTab = (tab) => {
        console.log(postToRender);
        setSelectedTab(tab);
        return tab == TABS[0]
            ? setPostToRender(sortedAll)
            : setPostToRender(filterByCategory(tab));
    };

    useEffect(() => {
        setPostToRender(sortedAll);
        // console.log(postToRender)
    }, []);
    function stripHtml(html) {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    return (
        <PageTemplate hasNavbar={true} hasWrapper={true} isGreyBackgound={true}>
            <div className="w-full col-span-full flex flex-row justify-between mt-10 ">
                <p>Featured</p>
                <Link href="#subscribe">
                    <p className="text-[#01bbc8]" style={{ cursor: "pointer" }}>
                        Subscribe to Mtaji Blog
                    </p>
                </Link>
            </div>

            <div className={styles.container}>
                {featuredPost && (
                    <BlogPost
                        authorProfileImageUrl={
                            featuredPost.authorProfileImageUrl
                        }
                        id={featuredPost.id}
                        title={featuredPost.title}
                        body={stripHtml(featuredPost.body)}
                        date={featuredPost.date}
                        category={featuredPost.category}
                        blogImage={featuredPost.imgUrl}
                        featured
                    />
                )}
                <div className={styles.categoryTab}>
                    {TABS.map((tab) => {
                        return (
                            <div
                                key={tab}
                                onClick={() => onClickTab(tab)}
                                className={
                                    selectedTab == tab
                                        ? styles.selectedTab
                                        : styles.tab
                                }
                            >
                                <p>{tab}</p>
                            </div>
                        );
                    })}
                </div>
                {postToRender.map((post) => {
                    return (
                        <BlogPost
                            author={post.author}
                            authorProfileImageUrl={post.authorProfileImageUrl}
                            authorTitle={post.authorTitle}
                            id={post.id}
                            title={post.title}
                            body={stripHtml (post.body)}
                            date={post.date}
                            category={post.category}
                            blogImage={post.imgUrl}
                        />
                    );
                })}
                <div className={styles.paginqation}></div>
                <div className={styles.subscribeSec} id="subscribe">
                    <strong>
                        <p className={styles.heading}>
                            Subscribe to the mtaji Blog
                        </p>
                    </strong>
                    <div>
                        Get notifications about blog posts, company events and
                        announcements, products and founder materials.
                    </div>
                    <div className={styles.rowContainer}>
                        <div className={styles.rowContent1}>
                            <TextInput
                                name="FirstName"
                                type="text"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className={styles.rowContent}>
                            <Button
                                primary
                                style={{
                                    height: "46px",
                                    backgroundColor: "#01bbc8",
                                }}
                                onClick={() => {}}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <img
                        className={styles.circles}
                        src="/assets/circles.svg"
                        alt="circles"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default Blog;
