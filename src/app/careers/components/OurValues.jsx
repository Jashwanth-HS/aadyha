"use client";
import React from "react";
import { ourValues } from "@/helper";

export default function OurValues({ styles, data }) {
  const { type, title, description, values_tabs } = data || {};
  return (
    <div className={styles?.OurValuesWrapper} id={type}>
      <div className={styles?.OurValuesTitle}>
        <h2 className="heading-1">{title}</h2>
        <p className="paragraph">{description}</p>
      </div>

      <div className={styles?.OurValuesItems}>
        {values_tabs?.map((e, index) => {
          const { icon, title } = e || {};
          return (
            <React.Fragment key={index}>
              <div className={styles?.OVRepeater}>
                <div dangerouslySetInnerHTML={{ __html: icon }} />
                <h3 className="micro-large secondary-font">{title}</h3>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
