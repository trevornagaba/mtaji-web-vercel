import React from "react";
import parse from "html-react-parser";
import { Posts } from "../../components/Blog/post";
import PageTemplate from "../../components/pageTemplate";
import ProfileImg from "../../components/ProfileImageIcon";
import styles from "../../styles/blog.module.css";
import axios from "axios";

export const getServerSideProps = async (context) => {
    const id = context.query.pid;
    // const post = Posts.filter((post) => {
    //     if (post.id.toString() == id.toString()) {
    //         return true;
    //     }
    //     return false;
    // });
    const post = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs/${id}`)
    return {
        props: { post:post.data },
    };
};
const PostDetails = ({ post }) => {
    //convert post into object
    // post = Object.assign({}, ...post);
    console.log(post);
    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={true}
            isGreyBackgound={true}
            hasFooter={true}
        >
            <div className={styles.container}>
                <div className="w-full my-20">
                    <div className={styles.headingSec}>
                        <div></div>
                        <div>
                            <p
                                className={styles.heading}
                                style={{ fontSize: "36px" }}
                            >
                                {post.title}
                            </p>

                            <div
                                className={styles.dateCategory}
                                style={{ marginTop: "-25px" }}
                            >
                                <p>{post.date}</p>
                                <p>{post.category}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.detailsRow}>
                        <div>
                            <ProfileImg
                                name={post.author}
                                imageUrl={post.authorProfileImageUrl}
                                title={post.authorTitle}
                            />
                        </div>
                        <div className="prose">
                            {/* <img src={post.imgUrl} alt="post image"/> */}
                            {/* <div className="product-des" dangerouslySetInnerHTML={{ __html: post.body }}/> */}
                            {/* {parse(post.body)} */}
                            {post.body}
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default PostDetails;
