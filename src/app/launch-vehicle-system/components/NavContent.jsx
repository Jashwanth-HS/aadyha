import { dataArray, dataArrayTab } from '@/helper';
import React, { useState } from 'react'

export default function NavContent({styles}) {
    const [activeData,setActiveData] = useState(dataArray[0]);
  return (
    <div className={styles?.LvsTab}>
    <div className={styles?.LvsTabWrapper}>
        {dataArrayTab?.map((e,index)=> {
            const {title,id,image} = e || {};
            return <div className={`${styles?.LvsTabTitles} ${activeData?.id === id ? styles?.LvsTabTitlesActive : ""}`} key={index} onClick={()=> setActiveData(dataArray.find((e)=> e.id == id))}>
                {image &&  <img src={image} />}
                {title &&  <div>{title}</div>}
            </div>
        })}
        </div>
    <div>
{activeData?.data?.map((data,index)=> {
    const {title,description,blocks,subTitle,image} = data || {}
        return <div key={index}>
            <div className={`${styles?.TvcWrap} ${index % 2 === 0 ? styles?.TvcWrapRight : ''}`}>
                <div className={`${styles?.TvcWrapLeftImg} mobile-hide`}><img  src={image}/></div>
                <div className={styles?.TvcContent}>
                    <div>
                        <h6 className="caption secondary-font">{subTitle}</h6>
                        <h3 className="heading-3">{title}</h3>
                        <p className="paragraph">{description}</p>
                        <div className={`${styles?.TvcWrapLeftImg} desktop-hide`}><img src={image}/></div>
                    </div>
                    <div className={styles?.TvcContentBlocks}>
                        {blocks?.map((e,index1)=> {
                            const {title,image} = e || {}
                            return <div className={styles?.TvcContentBlocksItem} key={index1}>
                                <div><img src={image}/></div>
                                <div>
                                    <p>[{index1+1}]</p>
                                    <h3 className="micro-large secondary-font">{title}</h3>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    })}
    </div>
    </div>
  )
}
