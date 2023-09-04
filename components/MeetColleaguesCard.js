import React from "react";
import styles from "./MeetColleaguesCard.module.css";

const MeetColleaguesCard = ({ title, videoUrl, thumbnailUrl }) => {
  return (
    <a href={videoUrl} className={styles.card} target={"_blank"}>
      <div className={styles.imageContainer}>
        <img
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
          src={thumbnailUrl}
          alt={title}
          fill={true}
        />
      </div>
    </a>
  );
};

export default MeetColleaguesCard;
