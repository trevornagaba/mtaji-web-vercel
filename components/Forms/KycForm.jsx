import axios from "axios";
import React, { memo, useContext, useState } from "react";
import useSetAlert from "../../hooks/useSetAlert";
import { getToken } from "../../utils/getToken";
import { AppContext } from "../AppContext";
import Button from "../Button/Button";
import DragandDrop from "../DragandDropFileUpload/DragandDrop";
import Modal from "../ModalComponent";

const KycForm = ({ isKycVerified, userId }) => {
    const { setAlert } = useSetAlert();
    const { kycForm, showAlert } = useContext(AppContext);
    const [uploading, setUploading] = useState(false);
    const [updating, setUpdating] = useState(false);

    const uploadImg = async () => {
        if (!kycForm.front || !kycForm.back) {
            setAlert(
                "warning",
                "Documents Incomplete",
                "You need to upload front and back image of your document"
            );
        } else {
            let formData = new FormData();
            formData.append("file", kycForm.front);
            formData.append("upload_preset", "uhvy5vvk");
            
            setUploading(true);
            await axios
                .post(
                    "https://api.cloudinary.com/v1_1/daat2pgem/image/upload",
                    formData
                )
                .then(async (res) => {
                    console.log("upload front success");
                    formData.append("file", kycForm.back);
                    formData.append("upload_preset", "uhvy5vvk");
                    if (res.status == 200) {
                        await axios
                            .post(
                                "https://api.cloudinary.com/v1_1/daat2pgem/image/upload",
                                formData
                            )
                            .then(async (resp) => {
                                console.log("upload back success");
                                console.log(res);
                                console.log(resp);
                                if (res.status == 200) {
                                    const token = getToken();
                                    let config = {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                            "Content-Type": "Application/json",
                                        },
                                    };
                                    setUpdating(true);
                                    await axios
                                        .patch(
                                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`,
                                            {kycUrl:[res.data.url, resp.data.url ]},
                                            config
                                        )
                                        .then((res) => {
                                            console.log(res);
                                            console.log("updated user doc");
                                            setUpdating(false);
                                            setAlert("success", "Documents Submitted","Kyc documents submitted");
                                        })
                                        .catch((e) => {
                                            console.log(e);
                                            setUpdating(false);
                                            setAlert("warning", "Upload error","An error occurred");
                                        });

                                }
                            })
                            .catch((e) => console.log("error uploading back"));
                        

                    }
                    setUploading(false);
                })
                .catch((e) => {
                    console.log(e);
                    setUploading(false);
                });
        }
    };

    return (
        <div className="ml-5">
            <p className="text-lg font-medium">Identity Verification</p>
            <div className="w-full">
                <div className="flex flex-row mt-7">
                    <img
                        src={
                            kycForm?.front?.name
                                ? "/assets/checked.svg"
                                : "/assets/uncheck.svg"
                        }
                    />
                    <p className="ml-5">
                        Upload the front of your government issued ID
                    </p>
                </div>
                <div
                    className={
                        kycForm?.front?.name
                            ? "upload-row coloredBorder "
                            : "upload-row"
                    }
                >
                    <DragandDrop name="front" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-row">
                    <img
                        src={
                            kycForm?.back?.name
                                ? "/assets/checked.svg"
                                : "/assets/uncheck.svg"
                        }
                    />
                    <p className="ml-5">
                        Upload the back of your government issued ID
                    </p>
                </div>
                <div
                    className={
                        kycForm?.back?.name
                            ? "upload-row coloredBorder "
                            : "upload-row"
                    }
                >
                    <DragandDrop name="back" />
                </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
                <Button primary onClick={uploadImg}>
                    {updating ? "updating" : uploading ? "Uploading" : "Submit"}
                </Button>
            </div>
            <style jsx>{`
                .upload-row {
                    margin: 4.5px;
                    padding-bottom: 30px;
                    border-left: 1px solid #e7e7e7;
                    display: flex;
                    justify-content: center;
                }
                .coloredBorder {
                    border-left: 1px solid #01bbc8;
                }
            `}</style>
            {showAlert ? <Modal /> : ""}
        </div>
    );
};

export default KycForm;
