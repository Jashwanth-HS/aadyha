'use client';   
import React from 'react'
import { ourValues } from '@/helper';

export default function OurValues({ styles }) {
    const {slug,
      title,
      description,
      data} = ourValues || {}
    return (
        <div className={styles?.OurValuesWrapper} id={slug}>
            <div className={styles?.OurValuesTitle}>
                <h2 className="heading-1">{title}</h2>
                <p className="paragraph">{description}</p>
            </div>
            
            <div className={styles?.OurValuesItems}>
                {data?.map((e,index)=> {
                    const {title:OVtitle,description:OVDescription, image:OVImages} = e || {};
                    return <React.Fragment key={index}>
                    <div className={styles?.OVRepeater}>
                        <div>{OVImages && <img src={OVImages} />}</div>
                        <h3 className="micro-large secondary-font">{OVtitle}</h3>
                        <p className="micro-large secondary-font">{OVDescription}</p>
                    </div>
                    </React.Fragment>
                })}
            </div>
        </div>
    )
}