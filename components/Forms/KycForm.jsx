import React from "react";
import Button from "../Button/Button";

const KycForm = () => {
    return (
        <div className="ml-5">
            <p className="text-lg font-medium">Identity Verification</p>
            <div className="w-full">
                <div className="flex flex-row mt-7">
                    <img src="/assets/uncheck.svg"/>
                    <p className="ml-5">Upload the front of your government issued ID</p>
                </div>
                <div className="upload-row">
                    <div className="upload-box">
                        <p>Drag and drop file</p>
                        <p>OR</p>
                        <p className="flex mr-2">
                            <img src="/assets/upload.svg" className="w-5 mr-2"/>Click to upload image</p>
                        <p><small>Maximum size: 5MB</small></p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-row">
                    <img src="/assets/uncheck.svg"/>
                    <p className="ml-5">Upload the back of your government issued ID</p>
                </div>
                <div className="upload-row">
                    <div className="upload-box">
                        <p>Drag and drop file</p>
                        <p>OR</p>
                        <p className="flex mr-2">
                            <img src="/assets/upload.svg" className="w-5 mr-2"/>Click to upload image</p>
                        <p><small>Maximum size: 5MB</small></p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
                <Button primary>Submit</Button>
            </div>
            <style jsx>{`
                .upload-row{
                    margin:4.5px;
                    padding-bottom: 30px;
                    border-left: 1px solid #E7E7E7;
                    display:flex;
                    justify-content: center;
                }
                .upload-box{
                    width: 352px;
                    height: 168px;
                    border: 2px solid #E7E7E7;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center
                }
                .upload-box>p:nth-child(2), .upload-box>p:nth-child(3){
                    color: #89CFF0;
                }
            `}</style>
        </div>
    );
};

export default KycForm;
