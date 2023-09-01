import React from "react";
import styles from "./VideoBackground.module.css";
import Image from "next/image";

const VideoBackground = ({ videoUrl, posterUrl, title, cta }) => {
  return (
    <div className={styles["video-background"]}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl}
        className={styles["video-background__video"]}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {title && <h2 className={styles.title}>{title}</h2>}
      {cta && (
        <a className={styles["cta-button"]} href={cta.href}>
          <p className={styles["cta-text"]}>{cta.text }    <span style={{marginLeft: "4px"}}></span>                       
          <Image className= {styles.openInNewIcon} src = "/icons/svgWhiteOpenInNewIcon.svg" alt="Right" marginLeft= "12px" width= {16} height={16} />
</p>
        </a>
      )}
    </div>
  );
};

export default VideoBackground;
