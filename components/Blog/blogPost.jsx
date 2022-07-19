import React from "react";
import ProfileImg from "../ProfileImageIcon";
import styles from "../../styles/blog.module.css";
import Link from "next/link";

const BlogPost = ({
    id,
    date,
    category,
    title,
    body,
    author,
    authorProfileImageUrl,
    authorTitle,
    blogImage,
    featured,
}) => {
    const shortText = () => {
        return body.length > 400 ? `${body.substring(0, 397)}...` : body;
    };
    return (
        <div className={featured? styles. postCompFeatured : styles.postComp}>
            <div className={styles.dateCategory}>
                <p>{date}</p>
                <p className="text-[#01bbc8]" style={{ cursor: "pointer" }}>
                    {category}
                </p>
            </div>
            <div className={featured ? styles.postFeatured: styles.postContent}>
                <div className={styles.textSec}>
                    <p className={styles.heading}>
                        <strong>{title}</strong>
                    </p>
                    <p className={styles.text}>{body && shortText()}</p>
                    <Link
                        href={{
                            pathname: "/blog/[slug]",
                            query: { slug: id },
                        }}
                    >
                        <p
                            className="text-[#01bbc8]"
                            style={{ cursor: "pointer" }}
                        >
                            Read more
                        </p>
                    </Link>
                </div>
                <div>
                    <ProfileImg
                        imageUrl={authorProfileImageUrl}
                        name={author}
                        title={authorTitle}
                    />
                    {!featured && (
                        <div className={styles.blogImg}>
                            <img src={blogImage} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
