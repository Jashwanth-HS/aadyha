"use client";
import { satelliteRoadmap } from "@/helper";
import { Box } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";

const NavBar = ({ setActive, active, styles }) => {
  return (
    <div className={styles?.ControlSystemTabWrapper}>
      {satelliteRoadmap?.data?.map((e, index) => {
        return (
          <div
            key={index}
            className={`${styles?.FcsNavBar} ${
              active?.id === e.id ? styles?.FcsNavActive : ""
            } secondary-font`}
            onClick={() =>
              setActive(satelliteRoadmap?.data?.find((e1) => e1.id === e.id))
            }
          >
            <h3 className="secondary-font" style={{ marginRight: "10px" }}>
              [Mission {index + 1}]
            </h3>
            <p>{e.title}</p>
          </div>
        );
      })}
    </div>
  );
};

const NavBarcontent = ({ activeData, styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const { data: contentData } = activeData || {};
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
  const { image, title, description, button } = contentData || {};
  if (!activeData?.data) {
    return <div>NO data found</div>;
  }
  return (
    <div className={styles?.ControlSystemContentWrapper}>
      <div className={styles?.satelliteRoadmapItems}>
        <div className={styles?.satelliteRoadmapItemsImg}>
          {image && <img src={image} />}
        </div>
        <div className={styles?.satelliteRoadmapContent}>
          <h3 className="heading-3">{title}</h3>
          <p ref={ref} className={`paragraph  ${styles?.paragraphOpenClass}`}>
            {description}
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

export default function SatelliteRoadmap({ styles }) {
  const { title, slug } = satelliteRoadmap || {};
  const [active, setActive] = useState(satelliteRoadmap?.data[0]);
  return (
    <div className={styles?.SatelliteRoadmapWrapper} id={slug}>
      <div className={styles?.Title}>
        <h3 className="heading-1">{title}</h3>
      </div>
      <div className={styles?.ControlSystemTab}>
        <NavBar setActive={setActive} active={active} styles={styles} />
        <NavBarcontent activeData={active} styles={styles} />
      </div>
    </div>
  );
}
