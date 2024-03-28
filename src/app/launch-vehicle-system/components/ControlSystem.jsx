import { controlSystemNavBar } from '@/helper';
import React, { useState } from 'react'
const NavBar = ({ setActive, active, styles }) => {
    return <div className={styles?.ControlSystemTabWrapper}>
        {controlSystemNavBar?.map((e, index) => {
            return (
            <div key={index} 
                className={`${styles?.FcsNavBar}  ${active?.id === e.id ? styles?.FcsNavActive : ''}`} 
                onClick={() => setActive(controlSystemNavBar.find(e1 => e1.id === e.id))}>
                {e.title}
            </div>
            )
        })}
    </div>;
}
const NavBarcontent = ({ activeData, styles }) => {

    if (!activeData?.data) {

        return <div>NO data found</div>
    }
    return (
    <div className={styles?.ControlSystemContentWrapper}>
        {activeData?.data?.map((e, index) => {
        const { image, title } = e || {}
        return (
        <div className={styles?.ControlSystemContent} key={index}>
            {image && <img src={image} />}
            <p className="caption secondary-font">{title}</p>
        </div>
        )
    })} </div>
    )

}
export default function ControlSystem({ styles }) {
    const [active, setActive] = useState(controlSystemNavBar[0])
    return (
        <div className="container">
            <div className={styles?.ControlSystemWrapper}>
                <div className={styles?.ControlSystemTitle}>
                    <h3 className="heading-2">Flow control system</h3>
                    <p className="paragraph">AADYAH’s offers three essential solenoid valves designed to meet the unique requirements of commercial launch vehicles.</p>
                </div>
                <div className={styles?.ControlSystemTab}>
                    <NavBar setActive={setActive} active={active} styles={styles} />
                    <NavBarcontent activeData={active} styles={styles} />
                </div>
            </div>
        </div>
    )
}
