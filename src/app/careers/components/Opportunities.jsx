import { PrimaryButton } from "@/components/Buttons";
import { opportunities } from "@/helper";
import React from "react";

export default function Opportunities({ styles, data }) {
  const { type, title, Description, Button_Link } = data || {};
  console.log("Button_Link: ", Button_Link);
  return (
    <div className={styles?.OpportunitiesWrapper} id={type}>
      <h2 className="heading-1">{title}</h2>
      <p className="paragraph">{Description}</p>
      <a href={Button_Link?.url} target="_blank">
        <PrimaryButton isDark label={Button_Link?.title} />
      </a>
    </div>
  );
}
