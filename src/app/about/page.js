"use client";
import React from "react";
import styles from "../about/css/about.module.css";

export default function About() {
  return (
    <>
      <div className={styles?.AboutBg}>
        <div className="container">
          <div className={styles.banner}>
            <div className={styles?.AboutBannerTitle}>
              <h3 className="heading-1">
                Pioneering the Future of space Technology
              </h3>
              <p className="paragraph">
                Welcome to AADYAH, a pioneering force in space technology
                innovation and exploration.{" "}
              </p>
            </div>
            <div className={styles?.AboutEllipse}>
              <img
                className={styles.OrbitImage}
                src={"/assets/images/about-ellipse.png"}
              />
            </div>
          </div>

          <div className={styles?.gallery}>
            <div>
              <img
                className={styles.OrbitImage}
                src={"/assets/images/aero-tech-img-one.png"}
              />
            </div>
            <div>
              <img
                className={styles.OrbitImage}
                src={"/assets/images/aero-tech-img-two.png"}
              />
            </div>
            <div>
              <img
                className={styles.OrbitImage}
                src={"/assets/images/aero-tech-img-three.png"}
              />
            </div>
            <div>
              <img
                className={styles.OrbitImage}
                src={"/assets/images/aero-tech-img-four.png"}
              />
            </div>
          </div>
        </div>

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
                      <path d="M1 0V86" stroke="white" stroke-dasharray="2 2" />
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
                <p className="micro-large secondary-font">Our vision</p>
              </div>

              <div>
                <h3 className="heading-2">
                  Building Sustainable Space Assets
                </h3>
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
              <img
                src="/assets/images/our-mission-bg.png"
                alt="Fallback Image"
              />
            </picture>
          </div>
          <div className={styles?.OurMissionContent}>
            <p className="micro-large secondary-font">Our Mission</p>
            <h3 className="heading-3">
            Accelerate design, build, launch and commercialisation of space systems 
            </h3>
          </div>
        </div>

        <div className="container">
          <div className={styles?.WcaContainer}>
            <div className={styles?.WcaContainerTitile}>
              <h3 className="heading-2">Why choose aadyah?</h3>
            </div>

            <div className={styles?.WcaItems}>
              <div>
                <img src={"/assets/images/innovation.svg"} />
                <h3 className="sub-heading-1">Innovation</h3>
                <p className="paragraph">
                  Our brilliant team pushes boundaries, creating innovative
                  solutions that reshape space exploration.
                </p>
              </div>
              <div>
                <img src={"/assets/images/expertise.svg"} />
                <h3 className="sub-heading-1">Expertise</h3>
                <p className="paragraph">
                  Experienced engineers, scientists, and visionaries lead our
                  projects, ensuring a foundation of knowledge and expertise.
                </p>
              </div>
              <div>
                <img src={"/assets/images/collaboration.svg"} />
                <h3 className="sub-heading-1">Collaboration</h3>
                <p className="paragraph">
                  We foster global collaboration, cultivating shared innovation
                  and discovery for groundbreaking ideas to emerge
                </p>
              </div>
              <div>
                <img src={"/assets/images/ethics-sustainability.svg"} />
                <h3 className="sub-heading-1">Ethics & Sustainability</h3>
                <p className="paragraph">
                  We prioritize ethical operations, emphasizing sustainability
                  in all our activities for responsible and conscientious
                  practices
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles?.TeamMembersImg}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={"/assets/images/team-members.png"}
            />
            <source
              media="(max-width: 767px)"
              srcSet={"/assets/images/team-members-mobile.png"}
            />
            <img src="/assets/images/team-members.png" alt="Fallback Image" />
          </picture>
        </div>

        <div className="container">
          <div className={styles?.JoinUsContainer}>
            <h6 className="micro-large secondary-font">
              Join us on the Journey
            </h6>
            <h3 className="heading-2">Come build with us</h3>
            <p className="paragraph">
              We invite you to join us on this extraordinary journey of
              exploration and discovery. Together, we can shape the future of
              space technology and leave an indelible mark on the universe.{" "}
            </p>
            <a href="/careers">
              <button className="primary-btn">
                View careers{" "}
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
            </a>
          </div>
        </div>
      </div>

      <div className={styles?.LeadershipTeamContainer}>
        <div className="container">
          <div className={styles?.LeadershipTeamTitle}>
            <h6 className="micro-large secondary-font">OUR LEADERSHIP TEAM </h6>
            <h3 className="heading-2">Meet our visionaries</h3>
          </div>

          <div className={styles?.LeadershipTeamWrap}>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/shaju-stephen.png"} />
              </div>
              <h3>Shaju Stephen</h3>
              <p>Chairman & Managing Director</p>
              <a target="_blank" href="https://www.linkedin.com/in/shaju-stephen-9211223/?originalSubdomain=in"><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/v-sunderarajan.png"} />
              </div>
              <h3>V Sunderarajan</h3>
              <p>CEO</p>
              <a target="_blank" href="https://www.linkedin.com/in/sunderarajan-varadan-37609716/"><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/pradeep-kumar.png"} />
              </div>
              <h3>Pradeep Kumar</h3>
              <p>CTO</p>
              <a target="_blank" href="https://www.linkedin.com/in/pradeep-kumar-68686357/"><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/sabu-joseph.png"} />
              </div>
              <h3>Sabu Joseph</h3>
              <p>Director, People and Culture</p>
              <a target="_blank" href="https://www.linkedin.com/in/sabu-joseph-0a03a58/"><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/amarnath-reddy.png"} />
              </div>
              <h3>Amarnath reddy</h3>
              <p>GM-Systems engineering</p>
              <a target="_blank" href=""><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
            <div className={styles?.LeadershipTeamItem}>
              <div className={styles?.LeadershipTeamProfile}>
                <img src={"/assets/images/varun-kurup.png"} />
              </div>
              <h3>Varun Kurup</h3>
              <p>Director, Finance</p>
              <a target="_blank" href="https://www.linkedin.com/in/varunkurup/?originalSubdomain=in"><img src={"/assets/images/linkedin.svg"} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
