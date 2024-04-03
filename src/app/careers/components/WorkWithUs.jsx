import { workwithus } from '@/helper';
import React from 'react'

export default function WorkWithUs({ styles }) {
    const {slug,
        subTitle,
        title,
        description,
        data} = workwithus || {}
    return (
        <div className={styles?.WorkWithUsWrapper} id={slug}>
            <div className={styles?.WorkWithUsTitle}>
                <h6 className="micro-large secondary-font">{subTitle}</h6>
                <h2 className="heading-1">{title}</h2>
                <p className="paragraph">{description}</p>
            </div>
            
            <div className={styles?.WorkwithusItems}>
                {data?.map((e,index)=> {
                    const {image:WWUImages} = e || {};
                    return <React.Fragment key={index}>
                    <div className={styles?.WWURepeater}>
                        <div className={styles?.WWURepeaterImgs}>{WWUImages && <img src={WWUImages} />}</div>
                    </div>
                    </React.Fragment>
                })}
            </div>
        </div>
    )
}