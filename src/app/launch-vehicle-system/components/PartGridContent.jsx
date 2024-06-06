import { partGridContent } from "@/helper";

import React from "react";

export default function PartGridContent({ styles, data }) {
  const { type, tvc_sections } = data || {};
  return tvc_sections?.map((data, index) => {
    const { title, description, block, tag, image } = data || {};
    return (
      <div key={index} id={type}>
        <div
          className={`${styles?.TvcWrap} ${
            index % 2 === 0 ? styles?.TvcWrapRight : ""
          }`}
        >
          <div className={`${styles?.TvcWrapLeftImg} mobile-hide`}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={image}
            />
          </div>
          <div className={styles?.TvcContent}>
            <div>
              <h6 className="caption secondary-font">{tag}</h6>
              <h3 className="heading-3">{title}</h3>
              <p className="paragraph">{description}</p>
              <div className={`${styles?.TvcWrapLeftImg} desktop-hide`}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={image}
                />
              </div>
            </div>
            <div className={styles?.TvcContentBlocks}>
              {block?.map((e, index1) => {
                const { title, icon } = e || {};
                return (
                  <div className={styles?.TvcContentBlocksItem} key={index1}>
                    <div dangerouslySetInnerHTML={{ __html: icon }}></div>
                    <div>
                      <p>[{index1 + 1}]</p>
                      <h3 className="micro-large secondary-font">{title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
}
