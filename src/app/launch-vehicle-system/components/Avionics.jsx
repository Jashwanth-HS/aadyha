import React from 'react'
import { AvionicsData } from '@/helper';
import AccordionWrap from '@/components/Accordion';


export default function Avionics({ styles }) {
  const {slug,
    title,
    description,
    images,
    data:{title:AccordianTitle,values}} = AvionicsData || {}
  return (
    <div className="container" id={slug}>
      <div className={styles?.AvionicsContainer}>
        <div className={styles?.AvionicsHeader}>
          <h3 className="heading-2">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>
        
        <div className={styles?.AvionicsItemWrapper}>
          <div className={styles?.AvionicsGallery}>
            {images?.map((e,index)=> {
            return <div key={index}><img src={e}/></div>
            })}
          </div>
          <AccordionWrap AccordianTitle={AccordianTitle} values={values}   />
        </div>
      </div>
    </div>
  )
}
