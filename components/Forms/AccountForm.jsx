import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "../../styles/Form.module.css";
import Button from "../Button/Button";
import ProfileImg from "../ProfileImageIcon";
import Modal from "../ModalComponent";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'



const AccountForm = () => {
    const [openModal, setOpenModal] = useState(false)
    const onClickProfileImage= ()=>{
        return (
            setOpenModal(!openModal) &&
            console.log(openModal)
        )
    }
    
    useEffect(()=>{

    },[openModal])

    return (
        <div>
            <Modal clicked={openModal} title={"Upload Profile image"}>
                <div className="flex flex-row justify-between mx-5 h-40 pt-5">
                    <ProfileImg
                    imageUrl="/assets/avatar2.svg"
                    imageSize='xlg'/>
                    <div className="flex flex-col">
                        <Button primary className='mb-4'>Change Image</Button>
                        <Button secondary>Change Image</Button>
                    </div>
                </div>
            </Modal>
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


  
