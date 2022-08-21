import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "../../styles/Form.module.css";
import Button from "../Button/Button";
import ProfileImg from "../ProfileImageIcon";
import Modal from "../ModalComponent";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getToken } from "../../utils/getToken";
import axios from "axios";



const AccountForm = ({userDetails}) => {
    useEffect(()=>{
        // console.log(userDetails)
        setData(userDetails)
    },[userDetails])
    const [openModal, setOpenModal] = useState(false)
    const [data, setData]= useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
    })
    const [sending, setSending] = useState(false)
    
    const onClickProfileImage= ()=>{
        return (
            setOpenModal(!openModal)
            
        )
    }
    const handleChange = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        // console.log(e.target.value)
        setData((data)=>{
            return {
                ...data, 
                [name]: value
            }
        }
        )
    }
    
    const handleSubmit =()=>{
        setSending(true)
        const token = getToken()
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'Application/json',
            }
        }
        axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userDetails.userId}`,
        data,
        config).then((res)=>{
            console.log(res)
            setSending(false)
        }
        ).catch(e=>{
            console.log(e)
            setSending(false)
        })
    }

    
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
                    imageUrl={userDetails?.photoUrl}
                    name={userDetails?.firstName + ' '+ userDetails?.lastName}
                    imageSize='lg'
                />
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.rowContent}>
                    <TextInput
                        label="First name"
                        name="firstName"
                        type="text"
                        placeholder="sheldon"
                        value = {data?.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.rowContent}>
                    <TextInput
                        id="lastName"
                        label="Last name"
                        name="lastName"
                        type="text"
                        placeholder="cooper"
                        value = {data?.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <TextInput
                label="Username"
                name="Username"
                type="text"
                placeholder="Ecooper"
                value = {data?.firstName+data?.lastName}
                disabled={true}
            />
            <TextInput
                id="email"
                label="Email"
                name="email"
                type="text"
                placeholder="E-Mail"
                value = {data?.email}
                onChange={handleChange}
            />
            <TextInput
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                type="number"
                placeholder="phone number"
                value = {data?.phoneNumber}
                onChange={handleChange}
            />
            <TextInput
                label="Home address"
                name="address"
                type="text"
                placeholder="Home address"
                value = {data?.address}
                onChange={handleChange}
            />
            <Button primary={true} onClick={handleSubmit}>
                {
                    sending ? 'Updating': 'save changes'

                }
            </Button>
        </div>
    );
};

export default AccountForm;