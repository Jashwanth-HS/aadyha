import { GauidanceData } from "@/helper";
import svgAnimation from "../css/svgAnimate.module.css";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useIsElementVisible } from "@/helper/Observer";
import RenderSvg from "./RenderAnimatedSvg";

export default function Gauidance({ styles }) {
  const elementRef = useRef(null);

  const { data, slug, title } = GauidanceData || {};
  const isElementVisible = useIsElementVisible(elementRef.current);

  useEffect(() => {
    const svg = document.querySelectorAll("." + svgAnimation.svg);
    if (isElementVisible) {
      if (svg?.length > 0) {
        svg.forEach((e) => {
          e.classList.add(svgAnimation.active);
        });
      }
    } else {
      if (svg?.length > 0)
        svg.forEach((e) => {
          e.classList.remove(svgAnimation.active);
        });
    }
  }, [isElementVisible]);
  return (
    <div className={styles?.GncContainer} id={slug} ref={elementRef}>
      <div className="container">
        <div>
          <h3 className="heading-2">{title}</h3>
        </div>
        <div className={styles?.GncWrapper}>
          {data?.map((e, index) => {
            const { image, title, description } = e || {};
            return (
              <div className={styles?.GncItems} key={index}>
                <div>
                  <RenderSvg name={image} svgAnimation={svgAnimation} />
                </div>
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
