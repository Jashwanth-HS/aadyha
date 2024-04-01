import { GauidanceData } from '@/helper'
import React from 'react'

export default function Gauidance({styles}) {
  const {data,slug,title} = GauidanceData || {}
  return (
    <div className={styles?.GncContainer} id={slug} >
    <div className="container">
      <div><h3 className="heading-2">{title}</h3></div>
      <div className={styles?.GncWrapper}>
        {data?.map((e,index)=> {
          const {image,title,description} = e || {}
          return <div className={styles?.GncItems} key={index}>
          <div><img src={image}/></div>
          <div>
            <h3 className="sub-heading-1">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
  )
}
