import React from "react";
import Image from 'next/image';
import styles from "./MeetColleaguesCard.module.css";

const MeetColleaguesCard = ({ title, videoUrl, thumbnailUrl }) => {
  return (
    <a href={videoUrl} className={styles.card} target={"_blank"}>
      <div className={styles.imageContainer}>
        <Image style={{objectFit: "contain"}} src={thumbnailUrl} alt={title} fill={true}/>
      </div>
    </a>
  );
};

export default MeetColleaguesCard;
