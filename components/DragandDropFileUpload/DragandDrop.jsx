import axios from "axios";
import React, { memo, useEffect, useRef} from "react";

const DragandDrop = ({onFileDrop, onFileRemove, file, name }) => {
    const wrapperRef = useRef(null);
    
    const onDragEnter = () => wrapperRef.current.classList.add("dragover");
    
    const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
    
    const onDrop = () => wrapperRef.current.classList.remove("dragover");
    useEffect(()=>{
        console.log(file)
    },[])
    console.log(file)
    return (
        <div
            className="upload-box"
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            {file && file?.name ? (
                <>
                    <span className="remove-button" onClick={onFileRemove(name)}>
                        x
                    </span>
                    {file.name}
                </>
            ) : (
                <>
                    <p>Drag and drop file</p>
                    <p>OR</p>
                    <p className="flex mr-2">
                        <img
                            src="/assets/upload.svg"
                            className="w-4 mr-2 text-slate-100"
                        />
                        Click to upload image
                    </p>
                    <input
                        type="file"
                        name={name}
                        value=""
                        className="upload-input"
                        accept=".pdf,.jpg,.png,.jpeg,.doc.docx"
                        onChange={(e) => onFileDrop(e)}
                    />
                    <p>
                        <small>Maximum size: 5MB</small>
                    </p>
                </>
            )}
            <style jsx>
                {`
                    .upload-box {
                        width: 352px;
                        height: 168px;
                        border: 2px solid #e7e7e7;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                    }
                    .upload-box > p:nth-child(2),
                    .upload-box > p:nth-child(3) {
                        color: #89cff0;
                    }
                    .upload-input {
                        position: absolute;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .upload-box:hover,
                    .upload-box.dragover {
                        background-color: #e7e7e7;
                        opacity: 0.9;
                    }
                    .remove-button {
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        width: 25px;
                        height: 25px;
                        border-radius: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #89cff0;
                        cursor: pointer;
                        padding-top: -10px;
                        color: #89cff0;
                    }
                    .remove-button:hover {
                        background-color: #89cff0;
                        color: #ffffff;
                    }
                `}
            </style>
        </div>
    );
};

export default memo(DragandDrop);
