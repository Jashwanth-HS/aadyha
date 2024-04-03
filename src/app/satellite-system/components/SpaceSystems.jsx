'use client';
import React from 'react'
import AccordionWrap from '@/components/Accordion';

export default function SpaceSystems({data,styles}) {
  const {slug,title,images,description,data: accordianData} = data || {};
  return (
    <div id={slug} className={styles?.SpaceSystemsItems}>
      <div><h3 className="heading-2">{title}</h3></div>
      <div className={styles?.SpaceSystemsItemsContent}>
        <div className={styles?.SpaceSystemsImgs}>{images && <img src={images} />}</div>
        <div className={styles?.SpaceSystemsItemsRight}>
          <p>{description}</p>
          {accordianData?.values && 
          <AccordionWrap 
          AccordianTitle={accordianData?.title} 
          values={accordianData?.values} 
          ContentClassName={styles?.AccordionTextWhite} 
          HeaderclassName={styles?.AccordionTextWhite}
          IconClass={styles?.AccordionIconClass}
          />}
        </div>
      </div>
    </div>
  )
}
