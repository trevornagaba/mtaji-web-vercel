import React from 'react';
import styles from "../../styles/expertProfileCard.module.css"
import Image from 'next/image'

const ExpertProfileCard = ({ 
  imageLink,
  name,
  position,
  linkedinUrl
  }
) => {
  return (
    <>
    <a href={linkedinUrl}> <div className={styles.container}>
          <div className={styles.img}>
            <Image src={imageLink} alt="profile image" layout='fill' objectFit="cover" priority={true}/>
          </div>
          <div className={styles.details}>
            <strong>{name}</strong>
            <small>{position}</small>
          </div>
            
        </div> </a>
        
    </>
  )
}

export default ExpertProfileCard