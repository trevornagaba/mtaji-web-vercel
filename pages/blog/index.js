import React, { useEffect, useState } from "react";
import BlogPost from "../../components/Blog/blogPost";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/blog.module.css";
// import { Posts } from "../../components/Blog/post";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Link from "next/link";
import axios from "axios";


export const getServerSideProps = async () => {
    //fetch post from B.E
    const fetchPosts = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs`
    );
    return {
        props:{posts: fetchPosts.data}
    }
};
const Blog = ({ posts }) => {
    const [tabs, setTabs] = useState([])
    const getTabs = () => {
        const categories=["All"]
        posts?.map((post) => {
            if (!categories.includes(post.section)) {
                return setTabs(categories.push(post.section));
            }
            return null;
        });
        return setTabs(categories);
    };
    

    //Sort Post based on date: most recently to previous post
    const sortedAll = posts.sort((a, b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        return date2 - date1;
    });
    //filter post based on categories
    const filterByCategory = (category) => {
        return posts.filter((post) => {
            if (post.section.toLowerCase() == category.toLowerCase()) {
                return true;
            }
            return false;
        });
    };
    //finding featured post from fetch posts
    const featuredPost = posts.find((post) => post.featured == true);

    //selected tab state helps to know and the currently selected tab
    const [selectedTab, setSelectedTab] = useState('All');

    //post to render is used to store posts  that relate to a category when a tab is clicked
    let [postToRender, setPostToRender] = useState([]);

    const onClickTab = (tab) => {
        setSelectedTab(tab);
        return tab == tabs[0]
            ? setPostToRender(sortedAll)
            : setPostToRender(filterByCategory(tab));
    };

    useEffect(() => {
        getTabs()
        setPostToRender(sortedAll);
    }, [posts]);
    
    // function stripHtml(html) {
    //     if (typeof window !== "undefined") {
    //         // your code with access to window or document object here
    //         let tmp = document.createElement("DIV");
    //         tmp.innerHTML = html;
    //         return tmp.textContent || tmp.innerText || "";
    //         }

    // }

    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={true}
            isGreyBackgound={true}
            hasFooter={true}
        >
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
                        authorProfileImageUrl={featuredPost.authorThumbFile}
                        id={featuredPost._id}
                        title={featuredPost.title}
                        body={featuredPost.highlight}
                        date={featuredPost.date}
                        category={featuredPost.section}
                        blogImage={featuredPost.imgUrl}
                        featured
                    />
                )}
                <div className={styles.categoryTab}>
                    {tabs.map((tab) => {
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
                                {tab}
                            </div>
                        );
                    })}
                </div>
                {postToRender?.map((post) => {
                    return (
                        <BlogPost
                            key={post._id}
                            author={post.author}
                            authorProfileImageUrl={post.authorThumbFile}
                            authorTitle={post.authorTitle}
                            id={post._id}
                            title={post.title}
                            body={post.highlight}
                            date={post.date}
                            category={post.section}
                            blogImage={post.imageUrl}
                        />
                    );
                })}
                {/* <div className={styles.paginqation}></div> */}
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
