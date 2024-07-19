import React from "react";
import AccordionWrap from "@/components/Accordion";

export default function Avionics({ styles, data }) {
  const { type, title, description, image, key_container, key_title } =
    data || {};
  return (
    <div className="container" id={type}>
      <div className={styles?.AvionicsContainer}>
        <div className={styles?.AvionicsHeader}>
          <h3 className="heading-2">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>

        <div className={styles?.AvionicsItemWrapper}>
          <div className={styles?.AvionicsGallery}>
            {image && <img src={image} alt="Avionics" />}
          </div>
          <AccordionWrap AccordianTitle={key_title} values={key_container} />
        </div>
      </div>
    </div>
  );
}
