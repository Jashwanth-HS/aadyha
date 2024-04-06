"use client";
import { useIsElementVisible } from "@/helper/Observer";
import styles from "../css/SpaceSystem.module.css";
import React, { useEffect, useRef, useState } from "react";
const LaunchVehicleSystemArray = [
  {
    src: "/assets/images/thrust-vector-control-system.svg",
    title: "Thrust vector control system (TVC)",
    subTitle: "[TVC by Flex Nozzle Control TVC by Engine Gimballing]",
  },
  {
    src: "/assets/images/guidance-navigation-control.svg",
    title: "Guidance navigation and control",
    subTitle: "[Design and development of Trajectory simulation & optimization,6DoF simulation, and control navigation guidance algorithms]",
  },
  {
    src: "/assets/images/avionics.svg",
    title: "Avionics",
    subTitle: "[offers cutting-edge design to manufacture solutions of avionics system, including hardware and software system for launch vehicle]",
  },
  {
    src: "/assets/images/flow-control-system.svg",
    title: "Flow control system",
    subTitle: "[custom build valves with high performance, pressure handling and stringent leak-tightness]",
  },
];
const SatelliteSystemArray = [
  {
    src: "/assets/images/propulsion-subsystems.svg",
    title: "Propulsion subsystems",
    subTitle: "[delivering the best-in-class control, efficiency, and reliability that your spacecraft demands.]",
  },
  {
    src: "/assets/images/ss-electric-power-system.svg",
    title: "Electric power system (eps)",
    subTitle: "[Reliable and adaptable power solutions with radiation tolerance, power tracking and multi voltage management tailored for you mission]",
  },
  {
    src: "/assets/images/ss-on-board-computer.svg",
    title: "On-board computer",
    subTitle: "[tailor-made solutions to integrate with your mssion]",
  },
  {
    src: "/assets/images/ss-motion-control-system.svg",
    title: "Motion control system",
    subTitle: "[Advanced system which ensures accurate pointing & orientation, and precision-control mechanism]",
  },
];
const SpaceMissionArray = [
  {
    src: "/assets/images/sm-sdm.svg",
    title: "SPACE DEBRIS MISSION",
    subTitle: "[TRACE, is a self-powered and self-communicating beacon,which enable real-time location and velocity data to a ground statin, triggered from Earth.]",
  },
  {
    src: "/assets/images/sm-satellite.svg",
    title: "SATELLITE",
  },
  {
    src: "/assets/images/sm-spm.svg",
    title: "SPACE AND PLANETARY MISSIONS",
    subTitle: "[Lunar Lander, Lunar Rover]",
  },
];

const SpaceSystemArray = [
  {
    sectionTitle: "launch vehicle SYSTEM",
    sectionSubTitle: "[End to end solutions]",
    blocks: LaunchVehicleSystemArray,
    imagePath: "/assets/images/hp-lvs-img.png",
    renderSvg: "Left1",
    title: "LAUNCH VEHICLE SYSTEM",
    subTitle: "From Concept to Design: Your partner in bespoke Space Solutions",
  },
  {
    sectionTitle: "Space mission",
    sectionSubTitle: "[End to end solutions]",
    blocks: SatelliteSystemArray,
    imagePath: "/assets/images/hp-flow-control-system.png",
    renderSvg: "Right1",
    isRight: true,
    title: "satellite system",
    subTitle:
      "AADYAH’s expertise in bespoke Satellite systems can elevate your mission to new heights. ",
  },
  {
    sectionTitle: "Satellite System",
    sectionSubTitle: "[End to end solutions]",
    blocks: SpaceMissionArray,
    imagePath: "/assets/images/hp-space-mission.png",
    renderSvg: "Left2",
    isbottom: true,
    title: "sPACE  MISSION",
    subTitle: "Ascending Beyond Limits",
  },
];
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.LineDot}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="86"
          viewBox="0 0 2 86"
          fill="none"
        >
          <path d="M1 0V86" stroke="white" strokeDasharray="2 2" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
        </svg>
      </div>
      <div className={styles.LineDotContent}>
        <h3 className="micro-large">{title}</h3>
        <p className="caption">{subTitle}</p>
      </div>
    </div>
  );
};

const SpaceSystem = ({ data }) => {
  const {
    title,
    sectionTitle,
    subTitle,
    sectionSubTitle,
    blocks,
    renderSvg,
    imagePath,
    isRight,
    isbottom,
  } = data || {};
  const elementRef = useRef(null);
  const isElementVisible = useIsElementVisible(elementRef.current);
  useEffect(() => {
    const svgPaths = elementRef.current.querySelectorAll("path"); // Select all paths within the SVG

    if (isElementVisible) {
      svgPaths.forEach((path) => {
        const animateElement = path.querySelector("animate"); // Get the animate element within each path
        if (animateElement) {
          animateElement.beginElement(); // Start the animation
        }
      });
    } else {
      svgPaths.forEach((path) => {
        const animateElement = path.querySelector("animate"); // Get the animate element within each path
        if (animateElement) {
          animateElement.endElement(); // End the animation
        }
      });
    }
  }, [isElementVisible]);
  return (
    <>
      <div className={styles.LaunchVehicleSystemContainer} ref={elementRef}>
        <SectionTitle
          title={sectionTitle || "launch vehicle SYSTEM"}
          subTitle={sectionSubTitle || "[End to end solutions]"}
        />
        <div
          className={`${styles?.BlockDataContainer} ${
            isRight ? styles?.BlockDataContainerRight : ""
          }`}
        >
          <div className={styles.LaunchVehicleSystemWrap}>
            <div className={styles.LvsLeftItem}>
              <div className={styles?.LvsLeftItemTitle}>
                <h3 className="heading-1">{title}</h3>
                <p className="sub-heading-2">{subTitle}</p>
              </div>
              <div className={styles.SpaceSystemContentLeftList}>
                {blocks?.map((e, index) => {
                  return (
                    <div key={index} className={styles?.SpaceSystemListitems}>
                      <div className={styles?.SpaceSystemListImg}>
                        <img src={e?.src} alt="" />
                      </div>
                      <div className={styles?.SpaceSystemListContent}>
                        <div className="micro-large">{e?.title}</div>
                        {/* <div className="caption">{e?.subTitle}</div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="primary-btn">
                explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="1"
                  viewBox="0 0 20 1"
                  fill="none"
                >
                  <path d="M0 0.5H19.5" stroke="white" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${styles.LvsRightItem} ${
              isbottom ? styles.LvsRightItemBottom : ""
            }`}
          >
            <div className={styles?.svgRender}>
              {renderSvg === "Left1" && (
                <svg
                  style={{ transform: "scaleY(-1)" }}
                  width="944"
                  height="1541"
                  viewBox="0 0 944 1541"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1016.5 1295.43L303.872 944.09C266.829 925.697 262.63 891.496 262.741 877.744C262.852 863.993 266.691 829.832 303.971 811.522L1016.51 460.317M1016.49 1487.68L227.674 1098.8C142.902 1057 90.2758 972.275 90.2264 877.843C90.2766 783.239 142.79 698.662 227.662 656.944L1016.53 268.064"
                    stroke="#6A7688"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                  <path
                    d="M1069.96 1322.83L357.334 971.492C320.291 953.099 316.092 918.898 316.203 905.147C316.314 891.396 320.152 857.234 357.432 838.925L1069.97 487.72M1069.95 1515.09L281.136 1126.21C196.363 1084.4 143.737 999.677 143.688 905.246C143.738 810.642 196.252 726.064 281.124 684.346L1069.99 295.466"
                    stroke="#6A7688"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                </svg>
              )}
              {renderSvg === "Left2" && (
                <svg
                  style={{ transform: "scaleY(-1)" }}
                  width="944"
                  height="1541"
                  viewBox="0 0 944 1541"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1016.5 1295.43L303.872 944.09C266.829 925.697 262.63 891.496 262.741 877.744C262.852 863.993 266.691 829.832 303.971 811.522L1016.51 460.317M1016.49 1487.68L227.674 1098.8C142.902 1057 90.2758 972.275 90.2264 877.843C90.2766 783.239 142.79 698.662 227.662 656.944L1016.53 268.064"
                    stroke="#6A7688"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                  <path
                    d="M1069.96 1322.83L357.334 971.492C320.291 953.099 316.092 918.898 316.203 905.147C316.314 891.396 320.152 857.234 357.432 838.925L1069.97 487.72M1069.95 1515.09L281.136 1126.21C196.363 1084.4 143.737 999.677 143.688 905.246C143.738 810.642 196.252 726.064 281.124 684.346L1069.99 295.466"
                    stroke="#6A7688"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                </svg>
              )}
              {renderSvg === "Right1" && (
                <svg
                  width="837"
                  height="1541"
                  viewBox="0 0 837 1541"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-179.945 245.328L532.685 596.67C569.728 615.063 573.927 649.264 573.816 663.015C573.706 676.766 569.867 710.928 532.587 729.238L-179.955 1080.44M-179.931 53.0767L608.884 441.956C693.656 483.762 746.282 568.485 746.331 662.916C746.281 757.52 693.767 842.098 608.895 883.816L-179.97 1272.7"
                    stroke="#6A7688"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                  <path
                    d="M-233.406 217.925L479.224 569.267C516.267 587.661 520.465 621.862 520.355 635.613C520.244 649.364 516.405 683.525 479.125 701.835L-233.416 1053.04M-233.392 25.6743L555.422 414.554C640.194 456.359 692.82 541.083 692.87 635.514C692.819 730.118 640.306 814.696 555.434 856.414L-233.431 1245.29"
                    stroke="#6A7688"
                  >
                    <animate
                      // data-action="startAnimation"
                      attributeName="stroke-dasharray"
                      attributeType="XML"
                      values="0,2500;2500,0"
                      dur="5s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </path>
                </svg>
              )}
            </div>
            <img
              className={styles.LvsImage}
              src={imagePath || "/assets/images/lvs.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Discovering = ({ title }) => {
  const elementRef = useRef(null);
  const isElementVisible = useIsElementVisible(elementRef.current);
  const topLeftPartRef = useRef(null);
  const topRightPartRef = useRef(null);
  const bottomPartRef = useRef(null);

  useEffect(() => {
    let setTimeOutId;
    if (isElementVisible) {
      topLeftPartRef.current.style.left = "22vw";
      topLeftPartRef.current.style.top = "0";
      topRightPartRef.current.style.right = "22vw";
      topRightPartRef.current.style.top = "0";
      bottomPartRef.current.style.bottom = "1.34vw";
      setTimeOutId = setTimeout(() => {
        bottomPartRef.current.style.top = "24vw";
      }, 3000);
    } else {
      topLeftPartRef.current.style.left = "-40vh";
      topLeftPartRef.current.style.top = "-40vh";
      topRightPartRef.current.style.right = "-40vh";
      topRightPartRef.current.style.top = "-40vh";
      bottomPartRef.current.style.bottom = "-50vh";
      bottomPartRef.current.style.top = "auto";
    }
    return () => {
      clearTimeout(setTimeOutId);
    };
  }, [isElementVisible]);

  return (
    <div className={`${styles?.SpaceSystemDiscoverWrap} container`}>
      <div className={styles?.SpaceSystemDiscover}>
        <div className={styles?.SpaceSystemDiscoverTitle}>
          <div className="heading-2">{title}</div>
          <div>
            <button className="primary-btn">
              discover Aadyah
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="1"
                viewBox="0 0 20 1"
                fill="none"
              >
                <path d="M0 0.5H19.5" stroke="white" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles?.SpaceSystemDiscoverImg} ref={elementRef}>
          <svg
            ref={topLeftPartRef}
            className={styles?.topLeftPart}
            xmlns="http://www.w3.org/2000/svg"
            width="516"
            height="504"
            viewBox="0 0 516 504"
            fill="none"
          >
            <path
              d="M431.578 373.644C442.03 389.231 435.812 403.466 432.748 408.872C429.685 414.278 420.315 426.712 401.664 425.541L43.4286 402.025L0 477.258L396.528 503.297C439.145 506.09 478.879 484.826 500.233 447.886C521.586 410.855 520.145 365.895 496.359 330.395L275.525 -9.15527e-05L232.097 75.2339L431.578 373.644Z"
              fill="white"
            />
          </svg>
          <svg
            ref={topRightPartRef}
            className={styles?.topRightPart}
            xmlns="http://www.w3.org/2000/svg"
            width="516"
            height="504"
            viewBox="0 0 516 504"
            fill="none"
          >
            <path
              d="M84.4242 373.644C73.9726 389.231 80.1884 403.466 83.2518 408.872C86.3151 414.278 95.6851 426.712 114.336 425.541L472.572 402.025L516 477.258L119.472 503.297C76.8549 506.09 37.1209 484.826 15.7673 447.886C-5.5863 410.855 -4.14533 365.895 19.641 330.395L240.475 -9.15527e-05L283.904 75.2339L84.4242 373.644Z"
              fill="white"
            />
          </svg>
          <svg
            ref={bottomPartRef}
            className={styles?.bottomPart}
            xmlns="http://www.w3.org/2000/svg"
            width="552"
            height="420"
            viewBox="0 0 552 420"
            fill="none"
          >
            <path
              d="M305.959 97.4139C297.67 80.5653 282.265 78.7638 276.048 78.7638C269.831 78.7638 254.423 80.5653 246.134 97.4139L87.468 419.43H0.613037L176.307 62.9964C195.138 24.7041 233.431 0.917664 276.138 0.917664C318.845 0.917664 357.136 24.7041 375.967 62.9964L551.661 419.43H464.806L306.14 97.4139H305.959Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function SpaceSystemWrap() {
  return (
    <div className={styles.SpaceSystemContainer}>
      {SpaceSystemArray?.map((e, index) => {
        return (
          <React.Fragment key={index}>
            <SpaceSystem data={e} />
          </React.Fragment>
        );
      })}
      <Discovering title={"Discovering tomorrow's universe today"} />
    </div>
  );
}
