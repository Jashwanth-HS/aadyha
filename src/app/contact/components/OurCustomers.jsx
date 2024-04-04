import { ourCustomers } from '@/helper';
import React from 'react'

export default function OurCustomers({ styles }) {
  const {slug,
    title,
    description,
    images,
    data} = ourCustomers || {}
  return (
      <div className={styles?.OurCustomersContainer} id={slug}>
          <div className={styles?.OurCustomersTitle}>
            <h3 className="heading-2">{title}</h3>
            <p>{description}</p>
          </div>
          
          <div className={styles?.OurCustomersContentWrap}>
              <div className={styles?.ORContenItems}>
                  {data?.map((e,index)=> {
                     const {title:PMtitle} = e || {};
                      return <React.Fragment key={index}>
                        <div className={styles?.OCRepeaterContent}>
                          <h3 className="micro-large secondary-font">{PMtitle}</h3>
                        </div>
                      </React.Fragment>
                  })}
              </div>
              {images && <img src={images} />}
          </div>
      </div>
  )
}
