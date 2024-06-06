import React from "react";

export default function WorkWithUs({ styles, data }) {
  const { type, subtitle, title, description, Card } = data || {};
  return (
    <div className={styles?.WorkWithUsWrapper} id={type}>
      <div className={styles?.WorkWithUsTitle}>
        <h6 className="micro-large secondary-font">{subtitle}</h6>
        <h2 className="heading-1">{title}</h2>
        <p className="paragraph">{description}</p>
      </div>

      <div className={styles?.WorkwithusItems}>
        {Card?.map((e, index) => {
          const { Card_Image } = e || {};
          return (
            <React.Fragment key={index}>
              <div className={styles?.WWURepeater}>
                <div className={styles?.WWURepeaterImgs}>
                  {Card_Image && <img src={Card_Image} />}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
