import { controlSystemNavBar } from "@/helper";
import React, { useState } from "react";

const NavBar = ({ setActive, block, active, styles }) => {
  return (
    <div className={styles?.ControlSystemTabWrapper}>
      {block?.map((e, index) => {
        return (
          <div
            key={index}
            className={`${styles?.FcsNavBar}  ${
              active?.title === e.title ? styles?.FcsNavActive : ""
            }`}
            // onClick={() => setActive(controlSystemNavBar.data?.find(e1 => e1.id === e.id))}
          >
            {e.title}
          </div>
        );
      })}
    </div>
  );
};
const NavBarcontent = ({ activeData, styles }) => {
  //   if (!activeData?.data) {
  //     return <div>NO data found</div>;
  //   }
  return (
    <div className={styles?.ControlSystemContentWrapper}>
      {activeData?.data?.map((e, index) => {
        const { image, title } = e || {};
        return (
          <div className={styles?.ControlSystemContent} key={index}>
            {image && <img src={image} alt={title} />}
            <p className="caption secondary-font">{title}</p>
          </div>
        );
      })}{" "}
    </div>
  );
};
export default function ControlSystem({ styles, data }) {
  const { title, description, type, block } = data || {};
  const [active, setActive] = useState(); //controlSystemNavBar?.data[0]
  return (
    <div className="container" id={type}>
      <div className={styles?.ControlSystemWrapper}>
        <div className={styles?.ControlSystemTitle}>
          <h3 className="heading-2">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>
        <div className={styles?.ControlSystemTab}>
          <NavBar
            setActive={setActive}
            active={active}
            block={block}
            styles={styles}
          />
          <NavBarcontent activeData={active} styles={styles} />
        </div>
      </div>
    </div>
  );
}
