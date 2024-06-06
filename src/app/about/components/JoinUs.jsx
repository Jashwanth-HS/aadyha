import { PrimaryButton } from "@/components/Buttons";
import React from "react";

export default function JoinUs({ styles, data }) {
  const { button_link, description, tag, title } = data || {};
  return (
    <div className="container">
      <div className={styles?.JoinUsContainer}>
        <h6 className="micro-large secondary-font">{tag}</h6>
        <h3 className="heading-2">{title}</h3>
        <p className="paragraph">{description}</p>
        <a href={button_link?.url}>
          <PrimaryButton isDark label={button_link?.title} />
        </a>
      </div>
    </div>
  );
}
