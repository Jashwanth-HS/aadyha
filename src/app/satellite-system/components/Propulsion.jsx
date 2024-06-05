import React, { useState } from "react";
import { PropulsionData } from "@/helper";
import AccordionWrap from "@/components/Accordion";

const NavBar = ({ setActive, active, data, styles }) => {
  return (
    <div className={styles?.ControlSystemTabWrapper}>
      {data?.map((e, index) => (
        <div
          key={index}
          className={`${styles?.FcsNavBar} ${
            active?.title === e.title ? styles?.FcsNavActive : ""
          } secondary-font`}
          onClick={() => setActive(data?.find((e1) => e1.title === e.title))}
        >
          <p>[{index + 1}]</p>
          {e.title}
        </div>
      ))}
    </div>
  );
};

const NavContent = ({ data, styles }) => {
  const {
    title: contentTitle,
    description: contentDescription,
    key_feature_content: accordianData,
    key_feature_title,
  } = data || {};
  return (
    <div className={styles?.ECUContentWrapper}>
      <div className={styles?.ECUContentItems}>
        <h3 className="heading-3">{contentTitle}</h3>
        <p className="paragraph">{contentDescription}</p>
      </div>
      <div style={{ flex: 1 }}>
        {accordianData && (
          <AccordionWrap
            AccordianTitle={key_feature_title}
            values={accordianData}
          />
        )}
      </div>
    </div>
  );
};
export default function Propulsion({ styles, data }) {
  const [active, setActive] = useState(data?.blocks[0].block_content[0]);
  console.log("active: ", active);
  const { type, title, description, image } = data || {};
  return (
    <div>
      <div className={styles?.PropulsionWrapper} id={type}>
        <div className={styles?.Title}>
          <h3 className="heading-2">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>
        <div>{image && <img src={image} />}</div>
      </div>
      <NavBar
        active={active}
        setActive={setActive}
        data={data?.blocks[0].block_content}
        styles={styles}
      />
      {active && <NavContent data={active} styles={styles} />}
    </div>
  );
}
