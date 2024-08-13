"use client";
import React from "react";
export default function CareersBanner({ data, team_images, styles }) {
  const { title, subtitle, description } = data || {};
  const { team_image, team_image_mobile } = team_images || {};
  return (
    <>
      <div className={styles?.Banner}>
        <h6 className="micro-large secondary-font">{title}</h6>
        <h1 className="heading-1">{subtitle}</h1>
        <p className="paragraph">{description}</p>

        <div className={styles?.CareerBannerImg}>
          <picture>
            <source media="(min-width: 768px)" srcSet={team_image} />
            <source media="(max-width: 767px)" srcSet={team_image_mobile} />
            <img src={team_image} alt="Fallback Image" />
          </picture>
        </div>
      </div>
    </>
  );
}
