import { opportunities } from '@/helper';
import React from 'react'

export default function Opportunities({ styles }) {
    const {slug,
      title,
      description,
      button } = opportunities || {}
    return (
        <div className={styles?.OpportunitiesWrapper} id={slug}>
            <h2 className="heading-1">{title}</h2>
            <p className="paragraph">{description}</p>
            <button className="primary-btn secondary-font">{button?.text}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="1" viewBox="0 0 20 1" fill="none">
            <path d="M0 0.5H19.5" stroke="white"/>
            </svg></button>
        </div>
    )
}