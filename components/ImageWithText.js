import React from "react";
import styles from "./ImageWithText.module.css";

const ImageWithText = ({ imageUrl, title, paragraph, cta }) => {
  return (
    <div className={styles["image-with-text"]}>
      <div className={styles["image-with-text__wrapper"]}>
        {imageUrl && (
          <img
            src={imageUrl}
            className={styles["image-with-text__image"]}
            alt={title}
            fill={true}
          />
        )}
        <div className={styles["text-content"]}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
          {cta && (
            <a className={styles["cta-button"]} href={cta.href}>
              {cta.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
