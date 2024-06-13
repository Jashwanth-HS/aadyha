import React from "react";
import styles from "../css/Clients.module.css";
import { PrimaryButton } from "@/components/Buttons";
import Container from "@/components/Container";
export default function Clients({ clientsSection, contentBlock }) {
  const {
    title,
    client_values,
    client_link,
    team_effort,
    clients_section_image,
  } = clientsSection || {};
  return (
    <>
      <div className={styles.ClientsContainer}>
        <div className={styles?.ClientsWrapper}>
          <div className={styles?.ClientsTitle}>
            <div>
              <h3 className="micro-large secondary-font">[who we work with]</h3>
            </div>
            <div>
              <h1 className="heading-2">
                trusted by the ones who push the boundaries
              </h1>
            </div>
          </div>

          <div className={styles?.ClientsLogo}>
            <div className={styles?.ClientsLogoItems}>
              <img src={"/assets/images/orbex-logo.png"} />
            </div>
            <div className={styles?.ClientsLogoItems}>
              <img src={"/assets/images/skyroot-logo.png"} />
            </div>
            <div className={styles?.ClientsLogoItems}>
              <img src={"/assets/images/isro-logo.png"} />
            </div>
            <div className={styles?.ClientsLogoItems}>
              <img src={"/assets/images/bellatrix-logo.png"} />
            </div>
            <div className={styles?.ClientsLogoItems}>
              <img src={"/assets/images/latitude-logo.png"} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles?.LifeSupporSystemWrap}>
            <div className={styles?.LifeSupporSystemImg}>
              {clients_section_image?.map((e, index) => (
                <div key={index}>
                  <img src={e} />
                </div>
              ))}
            </div>
            <div className={styles?.LifeSupporSystemContent}>
              <div>
                <h3 className="heading-4">{title}</h3>
              </div>
              <div className={styles?.Counter}>
                {client_values?.map((e, index) => (
                  <div key={index} className={styles?.CounterItems}>
                    <div>
                      <h3 className="caption secondary-font">{e.title}</h3>
                    </div>
                    <div>
                      <p className="heading-2">{e.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              {client_link && (
                <PrimaryButton
                  label={client_link?.title}
                  href={client_link?.url}
                  style={{ marginTop: "2rem" }}
                />
              )}
            </div>
          </div>
        </div>

        {/* <Container>
          <div className={styles?.LatestNewsContainer}>
            <div className={styles?.LatestNewsTitle}>
              <h3 className="heading-2">latest from aadyah</h3>
              <PrimaryButton label={"more insights"} href={"/space-mission"} />
            </div>

            <div className={styles?.LatestNewsItems}>
              <div className={styles?.LatestNewsItemsContent}>
                <div>
                  <img src={"/assets/images/lfa-img-one.png"} />
                </div>
                <p className="caption secondary-font">In the press</p>
                <h3 className="sub-heading-3">
                  Keiretsu Forum invests in defence-tech startup Aadyah
                </h3>
              </div>
              <div className={styles?.LatestNewsItemsContent}>
                <div>
                  <img src={"/assets/images/lfa-img-two.png"} />
                </div>
                <p className="caption secondary-font">insights</p>
                <h3 className="sub-heading-3">
                  A Technology Driven Employee Owned Aerospace Startup
                </h3>
              </div>
              <div className={styles?.LatestNewsItemsContent}>
                <div>
                  <img src={"/assets/images/lfa-img-three.png"} />
                </div>
                <p className="caption secondary-font">Webinar</p>
                <h3 className="sub-heading-3">
                  Space Avionics - Design Nuggets with Sethurajan Shanmugam
                </h3>
              </div>
            </div>
          </div>
        </Container> */}
        <Container>
          <div className={styles?.team_effortsContainer}>
            {team_effort?.map((e, index) => {
              const { svg_icon, description } = e || {};
              return (
                <div className={styles?.team_effortsContent} key={index}>
                  <div
                    className={styles?.team_effortsSvg}
                    dangerouslySetInnerHTML={{ __html: svg_icon }}
                  ></div>
                  <p className={styles?.team_effortsDescription}>
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      {/* <div className={styles?.CeoMessageContainer}>
        <div className="container">
          <div className={styles?.CeoMessageWrap}>
            <div>
              <img src={contentBlock?.profile_image} />
            </div>
            <div className={styles?.CeoMessageContent}>
              <div>
                <h2 className="heading-3">{contentBlock?.message}</h2>
                <div className={styles?.profile}>
                  <h6 className="caption secondary-font">
                    {contentBlock?.name}
                  </h6>
                  <p className="caption secondary-font">
                    {contentBlock?.designation}
                  </p>
                </div>
              </div>
              // <a href="">
                     //       <div className={styles?.CeoMessageContentBottm}>
                        //        <div><img src={"/assets/images/space-avionics.png"}/></div>
                        //        <div>
                         //           <h3 className="sub-heading-3">Space Avionics - Design Nuggets</h3>
                         //           <p className="caption secondary-font">Mr. Sethurajan shared his insights and experience on Mission Development</p>
                          //      </div>
                          //  </div>
                       // </a> 
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
