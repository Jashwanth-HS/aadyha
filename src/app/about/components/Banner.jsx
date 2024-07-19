import React from "react";

export default function Banner({ styles, data }) {
  const { card_image, title, description } = data || {};
  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles?.AboutBannerTitle}>
          <h3 className="heading-1">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>
        <div className={styles?.AboutEllipse}>
          <img
            className={styles.OrbitImage}
            src={"/assets/images/about-ellipse.png"}
          />
        </div>
      </div>
      <div className={styles?.gallery}>
        {card_image?.map((e, index) => {
          return (
            <div key={index}>
              <img
                className={styles.OrbitImage}
                src={e}
                alt={"card image" + index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
