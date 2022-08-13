import React, { useEffect, useState } from "react";

import styles from "../../styles/blog.module.css";
// import { Posts } from "../../components/Blog/post";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const SubscribeCard =()=>{
    return <div className={styles.subscribeSec} id="subscribe">
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
};
export default SubscribeCard;

