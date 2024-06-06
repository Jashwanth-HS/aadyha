import { GauidanceData } from "@/helper";
import "../css/svgAnimate.css";
import React, { useRef } from "react";
import { useEffect } from "react";
import parse from "html-react-parser";
import { useIsElementVisible } from "@/helper/Observer";

export default function Gauidance({ styles, data }) {
  const elementRef = useRef(null);

  const { block, type, header } = data || {};

  const isElementVisible = useIsElementVisible(elementRef.current);

  useEffect(() => {
    const svg = document.querySelectorAll(".gauidance svg");
    if (isElementVisible) {
      if (svg?.length > 0) {
        svg.forEach((e) => {
          e.classList.add("active");
        });
      }
    } else {
      if (svg?.length > 0)
        svg.forEach((e) => {
          e.classList.remove("active");
        });
    }
  }, [isElementVisible]);
  return (
    <div className={styles?.GncContainer} id={type} ref={elementRef}>
      <div className="container">
        <div>
          <h3 className="heading-2">{header}</h3>
        </div>
        <div className={styles?.GncWrapper}>
          {block?.map((e, index) => {
            const { icon, title, description } = e || {};
            const svgElement = parse(icon);
            return (
              <div className={styles?.GncItems} key={index}>
                <div className="gauidance">{svgElement}</div>
                <div>
                  <h3 className="sub-heading-1">{title}</h3>
                  <p className="paragraph">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
