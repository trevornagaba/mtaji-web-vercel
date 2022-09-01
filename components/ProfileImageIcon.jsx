import React from "react";
import styles from "../styles/account.module.css";

const ProfileImg = ({ hasEdit, onClick, imageUrl, imageSize, name, title, onChange}) => {
    return (
        <div className="flex flex-row items-center">
            {imageSize == "lg" ? (
                <div className={styles.profileImgContainer} onClick={onClick}>
                    <img src={imageUrl} alt="profileimage" className="rounded-full h-[60px] w-full object-cover"/>
                    {!!hasEdit && <img src="/assets/editicon.svg" alt="edit" />}
                </div>
            ) : imageSize == "xlg" ? (
                <div
                    className="w-32 h-32 relative pointer rounded-full"
                    onClick={onClick}
                >
                    <input
                        type="file"
                        name={name}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".jpg,.png,.jpeg"
                        onChange={onChange}
                    />
                    <img src={imageUrl} alt="profileimage" className="rounded-full w-full h-32 object-cover"/>
                    {!!hasEdit && (
                        <img
                            src="/assets/editicon.svg"
                            alt="edit"
                            className="absolute top-[95px] left-[95px] w-7"
                            onClick={onClick}
                        />
                    )}
                </div>
            ) : (
                <div
                    className="w-10 h-10 relative pointer rounded-full overflow-idden"
                    onClick={onClick}
                >
                    <img src={imageUrl} alt="profileimage" className="rounded-full object-cover w-10"/>
                    {!!hasEdit && (
                        <img
                            src="/assets/editicon.svg"
                            alt="edit"
                            className="absolute top-5 left-5 w-4"
                        />
                    )}
                </div>
            )}
            <div className=" flex flex-col ml-2.5">
                {name && (
                    <p className="font-semibold text-sm m-0 p-0">{name}</p>
                )}
                {<p className="text-sm m-0 p-0">{title}</p>}
            </div>
        </div>
    );
};
export default ProfileImg;
