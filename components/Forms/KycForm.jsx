import axios from "axios";
import React, { memo, useContext, useState } from "react";
import { getToken } from "../../utils/getToken";
import { AppContext } from "../AppContext";
import Button from "../Button/Button";
import DragandDrop from "../DragandDropFileUpload/DragandDrop";

const KycForm = ({ isKycVerified, userId }) => {
    const { kycForm } = useContext(AppContext);
    const [uploading, setUploading] = useState(false);
    const [updating, setUpdating] = useState(false);

    const uploadImg = async () => {
        if (!kycForm.front || !kycForm.back) {
            alert("upload both front and back");
        } else {
            let formData = new FormData();
            formData.append("file", kycForm.front);
            formData.append("file", kycForm.back);
            formData.append("upload_preset", "uhvy5vvk");

            setUploading(true);
            await axios
                .post(
                    "https://api.cloudinary.com/v1_1/daat2pgem/image/upload",
                    formData
                )
                .then(async (res) => {
                    console.log(res);
                    if (res.status == 200) {
                        console.log("upload success");

                        const token = getToken();
                        let config = {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "Application/json",
                            },
                        };
                        setUpdating(true)
                        await axios
                            .patch(
                                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`,
                                { kycUrl: res.url },
                                config
                            )
                            .then((res) => {
                                console.log(res);
                                console.log('updated user doc')
                                setUpdating(false);
                            })
                            .catch((e) => {
                                console.log(e);
                                setUpdating(false);
                            });
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
                    {updating? 'updating': uploading ? "Uploading" : "Submit"}
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
        </div>
    );
};

export default KycForm;
