'use client';
import React from 'react'
import { planetaryMissions } from '@/helper';

export default function PlanetaryMissions({ styles }) {
    const {slug,
      title,
      images,
      data} = planetaryMissions || {}
    return (
        <div className={styles?.PlanetaryMissionsContainer} id={slug}>
            <div className={styles?.PMMoonImg}>
                {images && <img src={images} />}
                <h2 className="heading-2 desktop-hide">{title}</h2>
            </div>
            
            <div className={styles?.PMContentWrap}>
                <h2 className="heading-2 mobile-hide">{title}</h2>
                <div className={styles?.PMContenItems}>
                    {data?.map((e,index)=> {
                       const {title:PMtitle,description:PMDescription, image:PMImages} = e || {};
                        return <React.Fragment key={index}>
                    <div className={styles?.PMRepeater}>
                        <div>{images && <img src={PMImages} />}</div>
                        <div className={styles?.PMRepeaterContent}>
                            <h3 className="micro-large secondary-font">{PMtitle}</h3>
                            <p className="micro-large secondary-font">{PMDescription}</p>
                        </div>
                    </div>

                        </React.Fragment>
                    })}
                </div>
            </div>
        </div>
    )
}
