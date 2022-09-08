import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
// import { Posts } from "../../components/Blog/post";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";
import axios from "axios";
import useSetAlert from "../hooks/useSetAlert";
import Modal from "./ModalComponent";
import { AppContext } from "./AppContext";

const SubscribeCard = () => {
    const [formData, setFormData] = useState({ email: "" });
    const {setAlert} = useSetAlert()
    const {showAlert} = useContext(AppContext)
    const handleChange = (e) => {
        // console.log(formData);
        e.preventDefault();
        const { value } = e.target;
        setFormData({ email: value });
    };
    const handleSubscribe = () => {
        formData.email ?
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/mailinglist`, {
                formData,
            })
            .then((res) => setAlert("success", "Added to Mail list", "You won't miss out on important investment updates"))
            .catch((e) => {})
        : setAlert("warning", "Empty email", "You need to enter your email addres")
    };
    return (
        <div className={styles.subscribeSec} id="subscribe">
            <strong>
                <p className={styles.heading}>Subscribe to our mailing lists</p>
            </strong>
            <div>
                Get notifications about blog posts, company events and
                announcements, products and founder materials.
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.rowContent1}>
                    <TextInput
                        name="email"
                        type="text"
                        onChange={handleChange}
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
                        onClick={handleSubscribe}
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
            {showAlert ? <Modal/> : ''}
        </div>
    );
};
export default SubscribeCard;
