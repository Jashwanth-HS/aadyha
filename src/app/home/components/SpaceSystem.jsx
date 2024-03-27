'use client'
import styles from "../css/SpaceSystem.module.css";
import React from 'react'
const LaunchVehicleSystemArray = [ 
    {
        src: "/assets/images/thrust-vector.svg",
        title: "Thrust vector control system (TVC)",
        subTitle: "[Lorem Ipsum is]",
    },
    {
        src: "/assets/images/guidance-navigation.svg",
        title: "Guidance navigation and control",
        subTitle: "[Lorem Ipsum is]",
    },
    {
        src: "/assets/images/avionics.svg",
        title: "Avionics",
        subTitle: "[Lorem Ipsum is]",
    },
    {
        src: "/assets/images/control-system.svg",
        title: "Flow control system",
        subTitle: "[Lorem Ipsum is]",
    },
]
const SatelliteSystemArray = [ 
    {
        src: "/assets/images/thrust-vector.svg",
        title: "Propulsion subsystems",
        subTitle: "[Lorem Ipsum iss ksdfids]",
    },
    {
        src: "/assets/images/guidance-navigation.svg",
        title: "Electric power system (eps)",
        subTitle: "[Lorem Ipsum is sdhi]",
    },
    {
        src: "/assets/images/avionics.svg",
        title: "On-board computer",
        subTitle: "[Lorem Ipsum is sdfhi]",
    },
    {
        src: "/assets/images/control-system.svg",
        title: "Motion control system",
        subTitle: "[Lorem Ipsum is sjdfi]",
    },
]
const SpaceMissionArray = [ 
    {
        src: "/assets/images/thrust-vector.svg",
        title: "SPACE DEBRIS MISSION",
        subTitle: "[Lorem Ipsum iss ksdfids]",
    },
    {
        src: "/assets/images/guidance-navigation.svg",
        title: "SATELLITE",
        subTitle: "[Lorem Ipsum is sdhi]",
    },
    {
        src: "/assets/images/avionics.svg",
        title: "SPACE AND PLANETARY MISSIONS",
        subTitle: "[Lorem Ipsum is sdfhi]",
    },
]

const SectionTitle = ({title,subTitle}) => 
{
    return (
        <div className={styles.LineDot}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="86" viewBox="0 0 2 86" fill="none">
                <path d="M1 0V86" stroke="white" stroke-dasharray="2 2"/>
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                </svg>
            </div>
            <div className={styles.LineDotContent}>
                <h3 className="micro-large secondary-font">{title}</h3>
                <p className="caption secondary-font">{subTitle}</p>
            </div>
        </div>
    );
};

const SpaceSystem = ({title,sectionTitle,subTitle,sectionSubTitle,blocks,renderSvg,imagePath, isRight,isbottom}) => 
{
    return (
        <div className="container">
            <div className={styles.LaunchVehicleSystemContainer}>
                <SectionTitle  title={sectionTitle || 'launch vehicle SYSTEM'} subTitle={sectionSubTitle || '[End to end solutions]'}/>
                <div className={`${styles?.BlockDataContainer} ${isRight ? styles?.BlockDataContainerRight : '' }`}>
                
                <div className={styles.LaunchVehicleSystemWrap}>
                    <div className={styles.LvsLeftItem}>
                        <div>
                            <h3 className="heading-1">{title}</h3>
                            <p className="sub-heading-2">{subTitle}</p>
                        </div>
                        <div className={styles.SpaceSystemContentLeftList}>
                            {blocks?.map((e,index)=> {
                                return <>
                                    <div key={index} className={styles?.SpaceSystemListitems}>
                                       <div className={styles?.SpaceSystemListImg}>
                                         <img src={e?.src} alt=""/>
                                        </div>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%"}} >
                                            <div key={e} className="micro-large secondary-font">{e?.title}</div>
                                            <div key={e} className="caption secondary-font">{e?.subTitle}</div>
                                        </div>
                                    </div>
                                </> 
                            })}
                        </div>
                        <button className="primary-btn secondary-font">explore more<svg xmlns="http://www.w3.org/2000/svg" width="20" height="1" viewBox="0 0 20 1" fill="none">
                        <path d="M0 0.5H19.5" stroke="white"/>
                        </svg></button>
                    </div>
                    </div>

                    <div className={`${styles.LvsRightItem} ${isbottom ? styles.LvsRightItemBottom :''}`}>
                        <div dangerouslySetInnerHTML={{__html:renderSvg}}></div>
                        <img className={styles.LvsImage}
                            src={imagePath || '/assets/images/lvs.png'}
                            />
                    </div>
                    </div>
                </div>
        </div>
    );
};


const Discovering = ({title}) => {
    return (<>
        <div className={`${styles?.SpaceSystemDiscoverWrap} container`}>
            <div className={styles?.SpaceSystemDiscover}>
                <div className={styles?.SpaceSystemDiscoverTitle}>
                    <div className="heading-2">{title}</div>
                    <div>
                        <button className="primary-btn">discover Aadyah<svg xmlns="http://www.w3.org/2000/svg" width="20" height="1" viewBox="0 0 20 1" fill="none">
                        <path d="M0 0.5H19.5" stroke="white"/>
                        </svg></button>
                    </div>
                </div>

                <div className={styles?.SpaceSystemDiscoverImg}>
                    <svg width="1102" height="955" viewBox="0 0 1102 955" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.1">
                    <path d="M670.424 373.644C659.973 389.231 666.188 403.466 669.252 408.872C672.315 414.278 681.685 426.712 700.336 425.541L1058.57 402.025L1102 477.258L705.472 503.297C662.855 506.09 623.121 484.826 601.767 447.886C580.414 410.855 581.855 365.895 605.641 330.395L826.475 -9.15527e-05L869.904 75.2339L670.424 373.644Z" fill="white"/>
                    <path d="M580.959 632.414C572.67 615.565 557.265 613.764 551.048 613.764C544.831 613.764 529.423 615.565 521.134 632.414L362.468 954.43H275.613L451.307 597.996C470.138 559.704 508.431 535.918 551.138 535.918C593.845 535.918 632.136 559.704 650.967 597.996L826.661 954.43H739.806L581.14 632.414H580.959Z" fill="white"/>
                    <path d="M431.578 373.644C442.03 389.231 435.812 403.466 432.748 408.872C429.685 414.278 420.315 426.712 401.664 425.541L43.4286 402.025L0 477.258L396.528 503.297C439.145 506.09 478.879 484.826 500.233 447.886C521.586 410.855 520.145 365.895 496.359 330.395L275.525 -9.15527e-05L232.097 75.2339L431.578 373.644Z" fill="white"/>
                    </g>
                    </svg>
                </div>
            </div>
        </div>  
    </>);
}

export default function Satilite() {
    const svg1 = ` <svg width="944" height="1541" viewBox="0 0 944 1541" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1016.5 1295.43L303.872 944.09C266.829 925.697 262.63 891.496 262.741 877.744C262.852 863.993 266.691 829.832 303.971 811.522L1016.51 460.317M1016.49 1487.68L227.674 1098.8C142.902 1057 90.2758 972.275 90.2264 877.843C90.2766 783.239 142.79 698.662 227.662 656.944L1016.53 268.064" stroke="#6A7688"/>
    <path d="M1069.96 1322.83L357.334 971.492C320.291 953.099 316.092 918.898 316.203 905.147C316.314 891.396 320.152 857.234 357.432 838.925L1069.97 487.72M1069.95 1515.09L281.136 1126.21C196.363 1084.4 143.737 999.677 143.688 905.246C143.738 810.642 196.252 726.064 281.124 684.346L1069.99 295.466" stroke="#6A7688"/>
    </svg>`;
    const svg2 = ` <svg width="837" height="1541" viewBox="0 0 837 1541" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-179.945 245.328L532.685 596.67C569.728 615.063 573.927 649.264 573.816 663.015C573.706 676.766 569.867 710.928 532.587 729.238L-179.955 1080.44M-179.931 53.0767L608.884 441.956C693.656 483.762 746.282 568.485 746.331 662.916C746.281 757.52 693.767 842.098 608.895 883.816L-179.97 1272.7" stroke="#6A7688"/>
    <path d="M-233.406 217.925L479.224 569.267C516.267 587.661 520.465 621.862 520.355 635.613C520.244 649.364 516.405 683.525 479.125 701.835L-233.416 1053.04M-233.392 25.6743L555.422 414.554C640.194 456.359 692.82 541.083 692.87 635.514C692.819 730.118 640.306 814.696 555.434 856.414L-233.431 1245.29" stroke="#6A7688"/>
    </svg>`;
    const svg3 = `
    <svg width="1146" height="1599" viewBox="0 0 1146 1599" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M272.627 1016.71L623.969 304.077C642.362 267.035 676.564 262.836 690.315 262.946C704.066 263.057 738.227 266.896 756.537 304.176L1107.74 1016.72M80.3762 1016.69L469.256 227.879C511.061 143.107 595.784 90.4811 690.216 90.4317C784.82 90.4819 869.397 142.995 911.115 227.867L1300 1016.73" stroke="#6A7688"/>
    <path d="M245.225 1070.17L596.567 357.539C614.961 320.497 649.162 316.298 662.913 316.408C676.664 316.519 710.825 320.358 729.135 357.638L1080.34 1070.18M52.9743 1070.16L441.854 281.341C483.659 196.569 568.382 143.943 662.814 143.894C757.418 143.944 841.996 196.457 883.713 281.329L1272.59 1070.19" stroke="#6A7688"/>
    </svg>`;
  return (
    <div className={styles.SpaceSystemContainer}>
        <SpaceSystem 
        sectionTitle={'launch vehicle SYSTEM'} 
        sectionSubTitle={'[End to end solutions]'}
        blocks={LaunchVehicleSystemArray}
        imagePath={'/assets/images/lvs.png'} 
        renderSvg={svg1}
        title={'LAUNCH VEHICLE SYSTEM'}
        subTitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
         />
        <SpaceSystem
        sectionTitle={'Space mission'} 
        sectionSubTitle={'[End to end solutions]'} 
        blocks={SatelliteSystemArray} 
        imagePath={'/assets/images/satellite-system.png'} 
        renderSvg={svg2}  
        isRight={true}
        title={'satellite system'}
        subTitle={'AADYAH’s expertise in bespoke Satellite systems can elevate your mission to new heights. '}
        />
        <SpaceSystem  
        sectionTitle={'Satellite System'} 
        sectionSubTitle={'[End to end solutions]'} 
        blocks={SpaceMissionArray} 
        imagePath={'/assets/images/space-mission.png'} 
        renderSvg={svg3} 
        isbottom={true} 
        title={'sPACE  MISSION'}
        subTitle={'Ascending Beyond Limits'}
        />
        <Discovering title={"Discovering tomorrow's universe today"} />
    </div>
  )
}
