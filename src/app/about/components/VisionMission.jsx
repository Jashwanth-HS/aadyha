import React from "react";

export default function VisionMission({ styles, data }) {
  const ourVision = data.find((e) => e.type == "our_vision");
  const ourMission = data.find((e) => e.type == "our_mission");
  const { tag: missionTag, title: missionTitle } = ourMission || {};
  const { tag: visionTag, title: visionTitle } = ourVision || {};
  return (
    <>
      <div className={styles?.OurVissionContainer}>
        <div className="container">
          <div className={styles.OurVissionWrapper}>
            <div className={styles?.LineDot}>
              <div>
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
              </div>
              <p className="micro-large secondary-font">{visionTag}</p>
            </div>

            <div>
              <h3 className="heading-2">{visionTitle}</h3>
            </div>
          </div>
        </div>

        <div className={styles?.OurVissionTextImg}>
          <img src={"/assets/images/our-vision-text.png"} />
        </div>
      </div>

      <div className={styles?.OurMissionContainer}>
        <div className={styles?.OurMissionBg}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={"/assets/images/our-mission-bg.png"}
            />
            <source
              media="(max-width: 767px)"
              srcSet={"/assets/images/our-mission-mobile-bg.png"}
            />
            <img src="/assets/images/our-mission-bg.png" alt="Fallback Image" />
          </picture>
        </div>
        <div className={styles?.OurMissionContent}>
          <p className="micro-large secondary-font">{missionTag}</p>
          <h3 className="heading-3">{missionTitle}</h3>
        </div>
      </div>
    </>
  );
}
