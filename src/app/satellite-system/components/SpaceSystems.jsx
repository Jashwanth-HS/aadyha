"use client";
import React from "react";
import AccordionWrap from "@/components/Accordion";

export default function SpaceSystems({ data, styles }) {
  const {
    type,
    title,
    image,
    description,
    key_container: accordianData,
    key_title,
  } = data || {};
  return (
    <div id={type} className={styles?.SpaceSystemsItems}>
      <div>
        <h3 className="heading-2">{title}</h3>
      </div>
      <div className={styles?.SpaceSystemsItemsContent}>
        <div className={styles?.SpaceSystemsImgs}>
          {image && <img src={image} alt={title} />}
        </div>
        <div className={styles?.SpaceSystemsItemsRight}>
          <p className={styles?.SpaceSystemsItemsRightDesc}>{description}</p>
          {accordianData && (
            <AccordionWrap
              AccordianTitle={key_title}
              values={accordianData}
              ContentClassName={styles?.AccordionTextWhite}
              HeaderclassName={styles?.AccordionTextWhite}
              IconClass={styles?.AccordionIconClass}
              listClassName={styles?.AccordionListClass}
            />
          )}
        </div>
      </div>
    </div>
  );
}
