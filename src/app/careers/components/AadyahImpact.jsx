import { aadyahImpact } from "@/helper";
import React from "react";

export default function AadyahImpact({ styles, data }) {
  const { type, title, Description, Cards } = data || {};
  return (
    <div className={styles?.AadyahImpactWrapper} id={type}>
      <div className={styles?.AadyahImpactTitle}>
        <h2 className="heading-1">{title}</h2>
        <p className="paragraph">{Description}</p>
      </div>

      <div className={styles?.AadyahImpactItems}>
        {Cards?.map((e, index) => {
          const { Card_Title, Card_Link, card_description, Card_Image } =
            e || {};
          return (
            <React.Fragment key={index}>
              <a
                href={Card_Link?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles?.AadyahImpactRepeater}>
                  <div className={styles?.AadyahImpactImgs}>
                    {Card_Image && <img src={Card_Image} alt={Card_Title} />}
                  </div>
                  <h3 className="micro-large secondary-font">{Card_Title}</h3>
                  <p className="sub-heading-3">{card_description}</p>
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
