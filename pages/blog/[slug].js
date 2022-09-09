import React from "react";
import parse from "html-react-parser";
// import { Posts } from "../../components/Blog/post";
import PageTemplate from "../../components/pageTemplate";
import ProfileImg from "../../components/ProfileImageIcon";
import styles from "../../styles/blog.module.css";
import axios from "axios";
import md from "markdown-it"

export const getServerSideProps = async (context) => {
    const id = context.query.jdq_sf;
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
                            <h1
                                className={styles.headingBlog}
                            >
                                {post.title}
                            </h1>

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
                                imageUrl={post.authorThumbFile}
                                title={post.authorTitle}
                            />
                        </div>
                            {/* <img src={post.imgUrl} alt="post image"/> */}
                            {/* {parse(post.body)} */}
                            {/* <div className="prose lg:prose-xl max-w-none mx-0" dangerouslySetInnerHTML={{ __html: md().render(post.body) }}/> */}
                        <div className={styles.body}>
                            <div className="prose lg:prose-xl max-w-none mx-0 w-full">
                                {parse(md().render(post.body))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default PostDetails;
