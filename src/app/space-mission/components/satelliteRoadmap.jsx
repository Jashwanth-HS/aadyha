"use client";
import React, { useEffect, useRef, useState } from "react";

const NavBar = ({ setActive, active, block, styles }) => {
  return (
    <div className={styles?.ControlSystemTabWrapper}>
      {block?.map((e, index) => {
        return (
          <div
            key={index}
            className={`${styles?.FcsNavBar} ${
              active?.mission_number === e.mission_number
                ? styles?.FcsNavActive
                : ""
            } secondary-font`}
            onClick={() =>
              setActive(
                block?.find((e1) => e1.mission_number === e.mission_number)
              )
            }
          >
            <h3 className="secondary-font" style={{ marginRight: "10px" }}>
              [Mission {index + 1}]
            </h3>
            <p>{e.mission_title}</p>
          </div>
        );
      })}
    </div>
  );
};

const NavBarcontent = ({ activeData, styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const { block_description, block_title, block_svg } = activeData || {};
  const ref = useRef(null);
  useEffect(() => {
    setIsOpen(false);
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, [activeData]);

  useEffect(() => {
    ref.current.style.height = isOpen
      ? ref.current.scrollHeight + "px"
      : "100px";
  }, [isOpen]);
  if (!activeData) {
    return <div>NO data found</div>;
  }
  return (
    <div className={styles?.ControlSystemContentWrapper}>
      <div className={styles?.satelliteRoadmapItems}>
        <div className={styles?.satelliteRoadmapItemsImg}>
          {block_svg && <div dangerouslySetInnerHTML={{ __html: block_svg }} />}
        </div>
        <div className={styles?.satelliteRoadmapContent}>
          <h3 className="heading-3">{block_title}</h3>
          <p ref={ref} className={`paragraph  ${styles?.paragraphOpenClass}`}>
            {block_description}
          </p>
          {showReadMoreButton && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="secondary-font"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path d="M0 9H18" stroke="white" />
                {!isOpen && (
                  <path d="M8.9082 18L8.9082 -2.68221e-07" stroke="white" />
                )}
              </svg>
              <span>{isOpen ? "Read Less" : "Read More"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SatelliteRoadmap({ styles, data }) {
  const { header, type, block } = data || {};
  const [active, setActive] = useState(block[0]);
  return (
    <div className={styles?.SatelliteRoadmapWrapper} id={type}>
      <div className={styles?.Title}>
        <h3 className="heading-1">{header}</h3>
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
  );
}
