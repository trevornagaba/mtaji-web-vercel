import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import DragandDrop from "../DragandDropFileUpload/DragandDrop";

const KycForm = () => {
    const [file, setFile] = useState('');
    const onFileDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newFile = e.target.files[0];
        console.log(newFile);
        // setFile(newFile);
        setTimeout(() => setFile(newFile), 0);
    };
    // useEffect(()=>{
    //     console.log(file);
    // })
    console.log('render')
    const uploadImg = async () => {
        let formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", "uhvy5vvk");

        await axios
            .post(
                "https://api.cloudinary.com/v1_1/daat2pgem/image/upload",
                formData
            )
            .then((res) => {
                console.log(res);
            });
    };

    const fileRemove = (name) => {
        // setFile((files) => {
        //     return { ...files, [name]: '' };
        // });
        setFile('')
    };
    // useEffect(()=>{},[file])
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
                    <DragandDrop
                        onFileDrop={onFileDrop}
                        onFileRemove={fileRemove}
                        file={file}
                        name="front"
                    />
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
                    {/* <DragandDrop
                        onFileDrop={onFileDrop}
                        onFileRemove={fileRemove}
                        file={file}
                        name="back"
                    /> */}
                </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
                <Button primary onClick={() => setShouldUpload(true)}>
                    Submit
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
            `}</style>
        </div>
    );
};

export default KycForm;
