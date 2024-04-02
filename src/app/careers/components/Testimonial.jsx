import SwiperSlider from '@/components/SwiperSlider'
import { testimonial } from '@/helper'
import React from 'react'

export default function Testimonial({styles}) {
  return (
    <div>
      <SwiperSlider
        data={testimonial}
        options={{
          pagination: {
            clickable: true,
          },
          speed:1000,
          loop:true,
          rewind:false,
          navigation: true,
          autoplay: {
            pauseOnMouseEnter:true,
            delay: 2500,
          }
        }}
        renderItems={({ item }) => {
          const { name, designation, description } = item;
          return <div className={styles?.TestimonialWrapper}>
              <div><p className="sub-heading-1">{description}</p></div>
              <div className={styles?.profile}>
                <h3 className="caption secondary-font">{name}</h3>
                <p className="caption secondary-font">{designation}</p>
              </div>
            </div>
        }} />
    </div>
  )
}
