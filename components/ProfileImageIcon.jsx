import React from "react";
import styles from "../styles/account.module.css";

const ProfileImg = ({ hasEdit, onClick, imageUrl, imageSize, name, title }) => {
    return (
        <div className="flex flex-row items-center">
            {imageSize == "lg" ? (
                <div className={styles.profileImgContainer} onClick={onClick}>
                    <img src={imageUrl} alt="profileimage" />
                    {!!hasEdit && <img src="/assets/editicon.svg" alt="edit" />}
                </div>
            ) : imageSize == "xlg" ? (
                <div
                    className="w-32 h-32 relative pointer rounded-full"
                    onClick={onClick}
                >
                    <img src={imageUrl} alt="profileimage" />
                    {!!hasEdit && (
                        <img
                            src="/assets/editicon.svg"
                            alt="edit"
                            className="absolute top-5 left-5 w-4"
                        />
                    )}
                </div>
            ) : (
                <div
                    className="w-10 h-10 relative pointer rounded-full"
                    onClick={onClick}
                >
                    <img src={imageUrl} alt="profileimage" />
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
