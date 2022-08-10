import React from 'react';
import styles from "../../styles/expertProfileCard.module.css"
import Image from 'next/image'

const ExpertProfileCard = ({ 
  imageLink,
  name,
  position
  }
) => {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src={imageLink} alt="profile image" layout='fill' objectFit="cover" priority={true}/>
          </div>
          <div className={styles.details}>
            <strong>{name}</strong>
            <small>{position}</small>
          </div>
            
        </div>
    </>
  )
}

export default ExpertProfileCard