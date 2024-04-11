import { PrimaryButton } from '@/components/Buttons';
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
            <a target='_blank' href="https://www.linkedin.com/company/aadyah-aerospace-private-limited/"><PrimaryButton isDark label={button?.text} /></a>
        </div>
    )
}