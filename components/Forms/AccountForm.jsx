import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "../../styles/Form.module.css";
import Button from "../Button/Button";
import ProfileImg from "../ProfileImageIcon";
import Modal from "../ModalComponent";

const AccountForm = ({ onClickProfileImage }) => {
    return (
        <div>
            <div className={styles.profile}>
                <ProfileImg
                    hasEdit={true}
                    onClick={onClickProfileImage}
                    imageUrl="/assets/avatar.png"
                    name="Sheldon Cooper"
                    imageSize='lg'
                />
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.rowContent}>
                    <TextInput
                        label="First name"
                        name="FirstName"
                        type="text"
                        placeholder="sheldon"
                    />
                </div>
                <div className={styles.rowContent}>
                    <TextInput
                        label="Last name"
                        name="LastName"
                        type="text"
                        placeholder="cooper"
                    />
                </div>
            </div>
            <TextInput
                label="Username"
                name="Username"
                type="text"
                placeholder="Ecooper"
            />
            <TextInput
                label="Email"
                name="email"
                type="text"
                placeholder="E-Mail"
            />
            <TextInput
                label="Phone Number"
                name="phoneNumber"
                type="number"
                placeholder="phone number"
            />
            <TextInput
                label="Home address"
                name="firstName"
                type="text"
                placeholder="Home address"
            />
            <Button primary={true}>save changes</Button>
        </div>
    );
};

export default AccountForm;
