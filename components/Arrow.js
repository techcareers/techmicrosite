import React from "react";

const Arrow = ({ Up, Down }) => {
  if (Up) {
    return (
      <img
        alt="arrowup"
        src={
          "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/icons/arrow-down.png"
        }
      />
    );
  }
  if (Down) {
    return (
      <img
        alt="arrowdown"
        src={
          "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/icons/arrow-up.svg"
        }
      />
    );
  }

  // If neither Up nor Down props are provided, return null or some default content
  return null;
};

export default Arrow;
