'use client';
import { spaceDebrisMission } from '@/helper';
import React from 'react'

export default function SpaceDebrisMission({ styles }) {
    const {slug,
        title,
        subTitle,
        description,
        images,
        } = spaceDebrisMission || {}
    return (
        <div className={styles?.SpaceDebrisMissionContainer} id={slug}>
            <div className={styles?.SpaceDebrisMissionContent}>
                <h3 className="heading-2">{title}</h3>
                <h6 className="sub-heading-2">{subTitle}</h6>
                <p className="paragraph">{description}</p>
            </div>
            <div className={styles?.SDMSpaceImg}>
                {images && <img src={images} />}
            </div>
        </div>
    )
}
