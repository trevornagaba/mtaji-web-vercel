import React, { useEffect, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import TextInput from "../TextInput/TextInput";
import styles from "../../styles/Form.module.css";
import Button from "../Button/Button";
import ProfileImg from "../ProfileImageIcon";
import Modal from "../ModalComponent";
import { getToken } from "../../utils/getToken";
import axios from "axios";
import useSetAlert  from "../../hooks/useSetAlert";
import { AppContext } from "../AppContext";

const AccountForm = () => {
    const {setAlert} = useSetAlert()
    const {
        checkAuth,
        showModal,
        setShowModal,
        showAlert,
        userDetails,
        setUserDetails
    } = useContext(AppContext);

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        profileUrl: "",
    });
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [src, setSrc] = useState(false);

    useEffect(() => {
        // 
        setData(userDetails);
    }, [userDetails]);
    

    const onClickProfileImage = () => {
        return setShowModal(true);
    };
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // .target.value)
        setData((data) => {
            return {
                ...data,
                [name]: value,
            };
        });
    };

    
    const onImageChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newFile = e.target.files[0];
        setImage(newFile);
        setSrc(URL.createObjectURL(e.target.files[0]))
    };
    const token = getToken();
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
        },
    };
    const handleImageUpload = async (e) => {
        // 
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "uhvy5vvk");
        setUploading(true)
        await axios
            .post(
                "https://api.cloudinary.com/v1_1/daat2pgem/image/upload",
                formData
            )
            .then(async (res) => {
                //  res.data.url);
                
                if (res.status == 200) {
                    // console.log("upload success");
                    setUploading(false)
                    setSending(true)

                    await axios
                        .patch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userDetails.userId}`,
                            { photoUrl: res.data.url },
                            config
                        )
                        .then((res) => {
                            // 
                            // console.log("updated user doc");
                            setSending(false);
                            setOpenModal(false)
                            setAlert("success","update successful","Profile Image updated successfully")
                            
                        })
                        .catch((e) => {
                            // 
                            setSending(false);
                            setSrc('')
                            setImage('')
                            setAlert("Warning","upload error","An error occurred")
                        });
                }
                setUploading(false);
            })
            .catch((e) => {
                // 
                setUploading(false);
                setAlert("Warning","upload error","An error occurred")
            });
    };
    const handleDeleteImage = async() => {
        await axios
            .patch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userDetails.userId}`,
                { profileUrl: "" },
                config
            )
            .then((res) => {
                // 
                // console.log("profile image deleted");
                setSending(false);
            })
            .catch((e) => {
                // 
                setSending(false);
            });
    };

    const handleSubmit = async () => {
        let userId = await jwt_decode(localStorage.getItem("token")).userId
        setSending(true);
        const token = getToken();
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "Application/json",
            },
        };
        await axios
            .patch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`,
                data,
                config
            )
            .then((res) => {
                setSending(false);
                setData(res.userDetails);
                checkAuth();
                setAlert("success", "Update successful", "User update Successful")
            })
            .catch((e) => {
                // 
                setSending(false);
                setAlert("warning", "Update error","An error occurred")
            });
    };

    return (
        <div>
            {showModal?<Modal clicked={showModal} title={"Upload Profile Image"}>
                <div className="flex flex-row justify-between mx-5 h-40 pt-5">
                    <ProfileImg
                        imageUrl={
                            src? src : userDetails?.photoUrl ? userDetails?.photoUrl : "/assets/avatar2.svg"
                        }
                        imageSize="xlg"
                        hasEdit
                        onChange={onImageChange}
                    />
                    <div className="flex flex-col">
                        {!image?<Button
                            
                            className="mb-4"
                            onClick={handleImageUpload}
                            disabled={true}
                        >
                           {sending? 'updating': uploading ? 'uploading':  'Upload Image'}
                        </Button>
                        :<Button
                            primary
                            className="mb-4"
                            onClick={handleImageUpload}
                            disabled={image ? false : true}
                        >
                           {sending? 'updating': uploading ? 'uploading':  'Upload Image'}
                        </Button>}
                        <Button secondary onClick={handleDeleteImage}>
                            Delete Image
                        </Button>
                    </div>
                </div>
            </Modal>: showAlert ? <Modal openModal={openModal}/> : ''}
            <div className={styles.profile}>
                <ProfileImg
                    hasEdit={true}
                    onClick={onClickProfileImage}
                    imageUrl={userDetails?.photoUrl || "/assets/avatar1.jpeg"}
                    name={userDetails?.firstName + " " + userDetails?.lastName}
                    imageSize="lg"
                />
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.rowContent}>
                    <TextInput
                        label="First name"
                        name="firstName"
                        type="text"
                        placeholder="sheldon"
                        value={data?.firstName}
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
                        value={data?.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <TextInput
                label="Username"
                name="Username"
                type="text"
                placeholder="Ecooper"
                value={data?.firstName + data?.lastName}
                disabled={true}
            />
            <TextInput
                id="email"
                label="Email"
                name="email"
                type="text"
                placeholder="E-Mail"
                value={data?.email}
                onChange={handleChange}
            />
            <TextInput
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                type="number"
                placeholder="phone number"
                value={data?.phoneNumber}
                onChange={handleChange}
            />
            <TextInput
                label="Home address"
                name="address"
                type="text"
                placeholder="Home address"
                value={data?.address}
                onChange={handleChange}
            />
            <Button primary={true} onClick={handleSubmit}>
                {sending ? "Updating" : "save changes"}
            </Button>
        </div>
    );
};

export default AccountForm;
