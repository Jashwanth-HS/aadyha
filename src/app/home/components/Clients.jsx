import React from 'react'
import styles from "../css/Clients.module.css";
export default function Clients() {
  return (
    <>
        <div className={styles.ClientsContainer}>
            <div className={styles?.ClientsWrapper}>
                <div className={styles?.ClientsTitle}>
                    <div><h3 className="micro-large secondary-font">[who we work with]</h3></div>
                    <div><h1 className="heading-2">trusted by the ones who push the boundaries</h1></div>
                </div>

                <div className={styles?.ClientsLogo}>
                    <div className={styles?.ClientsLogoItems}><img src={"/assets/images/orbex-logo.png"}/></div>
                    <div className={styles?.ClientsLogoItems}><img src={"/assets/images/skyroot-logo.png"}/></div>
                    <div className={styles?.ClientsLogoItems}><img src={"/assets/images/isro-logo.png"}/></div>
                    <div className={styles?.ClientsLogoItems}><img src={"/assets/images/bellatrix-logo.png"}/></div>
                    <div className={styles?.ClientsLogoItems}><img src={"/assets/images/latitude-logo.png"}/></div>
                </div>
            </div>

            <div className="container">
                <div className={styles?.LifeSupporSystemWrap}>
                    <div className={styles?.LifeSupporSystemImg}>
                        <div><img src={"/assets/images/life-support-system-img-one.png"}/></div>
                        <div><img src={"/assets/images/life-support-system-img-two.png"}/></div>
                    </div>
                    <div className={styles?.LifeSupporSystemContent}>
                        <div><h3 className="heading-4">Growing Life in Space. We pave the <span>way towards bio-regenerative life-support system</span></h3></div>
                        <div className={styles?.Counter}>
                            <div className={styles?.CounterItems}>
                                <div><h3 className="caption secondary-font">Global customers</h3></div>
                                <div><p className="heading-2">17+</p></div>
                            </div>
                            <div className={styles?.CounterItems}>
                                <div><h3 className="caption secondary-font">Contracts</h3></div>
                                <div><p className="heading-2">20+</p></div>
                            </div>
                            <div className={styles?.CounterItems}>
                                <div><h3 className="caption secondary-font">Talent pool</h3></div>
                                <div><p className="heading-2">150</p></div>
                            </div>
                        </div>
                        <div><a href="/about">
                        <button className="primary-btn-light secondary-font">discover Aadyah<svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                        <path d="M0 1H19.5" stroke="black"/></svg></button></a></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles?.LatestNewsContainer}>
                    <div className={styles?.LatestNewsTitle}>
                        <h3 className="heading-2">latest from aadyah</h3>
                        <button className="primary-btn-light">more insights<svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                        <path d="M0 1H19.5" stroke="black"/></svg></button>
                    </div>

                    <div className={styles?.LatestNewsItems}>
                        <div className={styles?.LatestNewsItemsContent}>
                            <div><img src={"/assets/images/lfa-img-one.png"}/></div>
                            <p className="caption secondary-font">In the press</p>
                            <h3 className="sub-heading-3">Keiretsu Forum invests in defence-tech startup Aadyah</h3>
                        </div>
                        <div className={styles?.LatestNewsItemsContent}>
                            <div><img src={"/assets/images/lfa-img-two.png"}/></div>
                            <p className="caption secondary-font">insights</p>
                            <h3 className="sub-heading-3">A Technology Driven Employee Owned Aerospace Startup</h3>
                        </div>
                        <div className={styles?.LatestNewsItemsContent}>
                            <div><img src={"/assets/images/lfa-img-three.png"}/></div>
                            <p className="caption secondary-font">Webinar</p>
                            <h3 className="sub-heading-3">Space Avionics - Design Nuggets with Sethurajan Shanmugam</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles?.CeoMessageContainer}>
            <div className="container">
                <div className={styles?.CeoMessageWrap}>
                    <div><img src={"/assets/images/ceo.png"}/></div>
                    <div className={styles?.CeoMessageContent}>
                        <div>
                            <h2 className="heading-3">“Leading AADYAH is an honor. Together, we pioneer space systems, missions, and services, 
                            transforming aspirations into cosmic realities.”</h2>
                            <div className={styles?.profile}>
                                <h6 className="caption secondary-font">shaju stephen</h6>
                                <p className="caption secondary-font">Chairman of the Board, Managing Director </p>
                            </div>
                        </div>
                        {/* <a href="">
                            <div className={styles?.CeoMessageContentBottm}>
                                <div><img src={"/assets/images/space-avionics.png"}/></div>
                                <div>
                                    <h3 className="sub-heading-3">Space Avionics - Design Nuggets</h3>
                                    <p className="caption secondary-font">Mr. Sethurajan shared his insights and experience on Mission Development</p>
                                </div>
                            </div>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
