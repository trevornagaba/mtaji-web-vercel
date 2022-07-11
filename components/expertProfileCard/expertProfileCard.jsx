import React from 'react';
import styles from "../../styles/expertProfileCard.module.css"

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
            <img src={imageLink} alt="profile image" />
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