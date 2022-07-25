import React from "react";
import Button from "../Button/Button";
import DragandDrop from "../DragandDropFileUpload/DragandDrop";

const KycForm = () => {
    return (
        <div className="ml-5">
            <p className="text-lg font-medium">Identity Verification</p>
            <div className="w-full">
                <div className="flex flex-row mt-7">
                    <img src="/assets/uncheck.svg" />
                    <p className="ml-5">
                        Upload the front of your government issued ID
                    </p>
                </div>
                <div className="upload-row">
                    <DragandDrop/>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-row">
                    <img src="/assets/uncheck.svg" />
                    <p className="ml-5">
                        Upload the back of your government issued ID
                    </p>
                </div>
                <div className="upload-row">
                    <DragandDrop/>
                </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
                <Button primary>Submit</Button>
            </div>
            <style jsx>{`
                .upload-row {
                    margin: 4.5px;
                    padding-bottom: 30px;
                    border-left: 1px solid #e7e7e7;
                    display: flex;
                    justify-content: center;
                }
                
            `}</style>
        </div>
    );
};

export default KycForm;
