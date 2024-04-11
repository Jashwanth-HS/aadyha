import { aadyahImpact } from '@/helper';
import React from 'react';

export default function AadyahImpact({ styles }) {
  const { slug, title, description, data } = aadyahImpact || {};
  return (
    <div className={styles?.AadyahImpactWrapper} id={slug}>
      <div className={styles?.AadyahImpactTitle}>
        <h2 className="heading-1">{title}</h2>
        <p className="paragraph">{description}</p>
      </div>

      <div className={styles?.AadyahImpactItems}>
        {data?.map((e, index) => {
          const { title: AItitle, description: AIDescription, image: AIImages, slug: AISlug } = e || {};
          return (
            <React.Fragment key={index}>
              <a href={AISlug} target="_blank" rel="noopener noreferrer"> 
                <div className={styles?.AadyahImpactRepeater}>
                  <div className={styles?.AadyahImpactImgs}>{AIImages && <img src={AIImages} alt={AItitle} />}</div>
                  <h3 className="micro-large secondary-font">{AItitle}</h3>
                  <p className="sub-heading-3">{AIDescription}</p>
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}