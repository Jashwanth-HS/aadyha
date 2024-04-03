'use client';
import { satelliteRoadmap } from '@/helper';
import { Box } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react'

const paragraphStyles = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',   
}

const NavBar = ({ setActive, active, styles }) => {
    return <div className={styles?.ControlSystemTabWrapper}>
        {satelliteRoadmap?.data?.map((e, index) => {
            return (
            <div key={index} 
                className={`${styles?.FcsNavBar} ${active?.id === e.id ? styles?.FcsNavActive : ''} secondary-font`}
                onClick={() => setActive(satelliteRoadmap?.data?.find(e1 => e1.id === e.id))}>
                <h3 className="secondary-font" style={{ marginRight: '10px' }}>[Mission {index + 1}]</h3>
                <p>{e.title}</p>
            </div>
            )
        })}
    </div>;
}

const NavBarcontent = ({ activeData, styles }) => {
    const [isOpen, setisOpen] = useState(false)
    const [showReadMoreButton, setshowReadMoreButton] = useState(false)
    const {data:contentData} = activeData || {};
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current){
            setshowReadMoreButton(
                ref.current.scrollHeight !== ref.current.clientHeight
            )
        }
    }, [])
    const { image, title, description, button} = contentData || {}
    if (!activeData?.data) {
        return <div>NO data found</div>
    }
    return (
    <div className={styles?.ControlSystemContentWrapper}>
        <div className={styles?.satelliteRoadmapItems} >
            <div>{image && <img src={image} />}</div>
            <div className={styles?.satelliteRoadmapContent}>
                <h3 className="heading-3">{title}</h3>
                <p style={isOpen ? null: paragraphStyles} ref={ref} className="paragraph">{description}</p>
                {showReadMoreButton && (
                    <button onClick={() => setisOpen(!isOpen)} className="secondary-font">
                    {isOpen ? (
                        <><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0 9H18" stroke="white"/>
                        <path d="M8.9082 18L8.9082 -2.68221e-07" stroke="white"/>
                        </svg><span>Read less</span></>
                    ) : (
                        <><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0 9H18" stroke="white"/>
                        <path d="M8.9082 18L8.9082 -2.68221e-07" stroke="white"/>
                        </svg><span>Read more</span></>
                    )}
                </button>
                )}
            </div>
        </div>
 </div>
    )

}

export default function SatelliteRoadmap({ styles }) {
    const {title,slug} = satelliteRoadmap || {}
    const [active, setActive] = useState(satelliteRoadmap?.data[0])
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
    )
}