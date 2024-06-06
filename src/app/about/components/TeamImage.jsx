import React from "react";

export default function TeamImage({ styles, data }) {
  const { team_image, team_image_mobile } = data || {};
  return (
    <div className={styles?.TeamMembersImg}>
      <picture>
        <source media="(min-width: 768px)" srcSet={team_image} />
        <source media="(max-width: 767px)" srcSet={team_image_mobile} />
        <img src={team_image} alt="Fallback Image" />
      </picture>
    </div>
  );
}
