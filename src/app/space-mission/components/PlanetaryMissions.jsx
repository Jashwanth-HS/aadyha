"use client";
import React from "react";
import { RenderList } from "@/components/Accordion";

export default function PlanetaryMissions({ styles, data }) {
  console.log("data: ", data);
  const { type, title, image, block } = data || {};
  return (
    <div className={styles?.PlanetaryMissionsContainer} id={type}>
      <div className={styles?.PMMoonImg}>
        {image && <img src={image} />}
        <h2 className="heading-2 desktop-hide">{title}</h2>
      </div>

      <div className={styles?.PMContentWrap}>
        <h2 className="heading-2 mobile-hide">{title}</h2>
        <div className={styles?.PMContenItems}>
          {block?.map((e, index) => {
            const { mission__title, list, image } = e || {};
            return (
              <React.Fragment key={index}>
                <div className={styles?.PMRepeater}>
                  <div>{image && <img src={image} />}</div>
                  <div className={styles?.PMRepeaterContent}>
                    <h3 className="micro-large secondary-font">
                      {mission__title}
                    </h3>
                    {/* <p className="micro-large secondary-font">
                      {PMDescription?.text}
                    </p> */}
                    {list ? (
                      <RenderList
                        list={{ type: "ul", data: list }}
                        listClassName={`${styles?.PMRepeaterContentList} secondary-font`}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
