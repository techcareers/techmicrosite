import React from "react";
import styles from "./ImageBackground.module.css";

const ImageBackground = ({ posterUrl, title }) => {
  return (
    <div className={styles["image-background"]} style={{backgroundImage: `url(${posterUrl})`}}>
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
};

export default ImageBackground;
