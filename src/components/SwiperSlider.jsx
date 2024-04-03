import React from "react";
import 'swiper/css/pagination';
import styles from './SwiperSilder.module.css';
import { Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function SwiperSlider({data,renderItems,options}) {
  return (
    <>
      <Swiper className={styles?.SwiperContainer} {...options} modules={[Pagination,Autoplay]}>
        {data.map((item,index)=> {
        return  <SwiperSlide key={index}>
          {renderItems({item})}
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
