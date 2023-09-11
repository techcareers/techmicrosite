import React from "react";
import styles from "./FeaturedJobsCard.module.css";

const FeaturedJobsCard = ({ title, location, jobFamily, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h5 className={styles.location}>
        <div className="locationIconWhite" alt="Location Icon">
          <svg
            className="locationIconWhite"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0C3.06 0 0.669998 2.39 0.669998 5.33C0.669998 6.31 0.939998 7.26 1.44 8.09L6 16L10.56 8.09C11.06 7.26 11.33 6.31 11.33 5.33C11.33 2.39 8.94 0 6 0ZM6 7.33C4.74 7.33 3.72 6.31 3.72 5.04C3.72 3.77 4.74 2.76 6 2.76C7.26 2.76 8.29 3.78 8.29 5.04C8.29 6.3 7.27 7.33 6 7.33Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="locationIconBlack" alt="Location Icon">
          <svg
            className="locationIconBlack"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0C3.06 0 0.669998 2.39 0.669998 5.33C0.669998 6.31 0.939998 7.26 1.44 8.09L6 16L10.56 8.09C11.06 7.26 11.33 6.31 11.33 5.33C11.33 2.39 8.94 0 6 0ZM6 7.33C4.74 7.33 3.72 6.31 3.72 5.04C3.72 3.77 4.74 2.76 6 2.76C7.26 2.76 8.29 3.78 8.29 5.04C8.29 6.3 7.27 7.33 6 7.33Z"
              fill="#2c2c2c"
            />
          </svg>
        </div>
        {location}
      </h5>
      <h6
        style={{
          fontSize: "12px",
          width: "fit-content",
          fontFamily: "HM Group Ampersand",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "13px",
          letterSpacing: "0.4px",
        }}
        className={styles.jobFamily}
      >
        {jobFamily}
      </h6>
    </a>
  );
};

export default FeaturedJobsCard;
