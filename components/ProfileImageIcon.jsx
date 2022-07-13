import React from 'react'
import styles from '../styles/account.module.css'

const ProfileImg = ({
    hasEdit,
    onClick
}) =>{
    return (
        <div className={styles.profileImgContainer} onClick={onClick}>
            <img src="/assets/avatar.png" alt=""/>
            {!!hasEdit && (<img src="/assets/editicon.svg" alt="edit"/>)}
        </div>
    )
}
export default ProfileImg