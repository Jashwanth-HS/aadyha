"use client";
import React from "react";

export default function SpaceDebrisMission({ styles, data }) {
  const { type, title, sub_title, description, image } = data || {};
  return (
    <div className={styles?.SpaceDebrisMissionContainer} id={type}>
      <div className={styles?.SpaceDebrisMissionContent}>
        <h3 className="heading-2">{title}</h3>
        <h6 className="sub-heading-2">{sub_title}</h6>
        <p className="paragraph">{description}</p>
      </div>
      <div className={styles?.SDMSpaceImg}>{image && <img src={image} />}</div>
    </div>
  );
}
