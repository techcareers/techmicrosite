import React from "react";
import styles from "./LocationCard.module.css";
import Image from "next/image";

const LocationCard = ({ title, imageUrl, linkUrl }) => {
  return (
    // <a href={linkUrl} className={styles.card}>
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} className={styles.image}  width={96} height={96}/>
      <div className={styles.title}>{title}</div>
    {/* </a> */}</div>
  );
};

export default LocationCard;
