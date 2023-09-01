import React from "react";
import styles from "./DepartmentCard.module.css";

const DepartmentCard = ({ imageUrl, linkUrl, title }) => {
  return (
    <a href={linkUrl} className={styles.card}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </a>
  );
};

export default DepartmentCard;
