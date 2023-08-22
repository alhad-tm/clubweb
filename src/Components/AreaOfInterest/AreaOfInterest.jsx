import React from 'react'
import css from "./AreaOfInterest.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination,Navigation } from "swiper/modules";
import Car1 from "../../assets/car1.svg"
import Car2 from "../../assets/car22.svg"
import Car3 from "../../assets/car3.svg"
import Car4 from "../../assets/car4.svg"
import Car5 from "../../assets/car5.svg"
import Car6 from "../../assets/car6.svg"
import Car7 from "../../assets/car7.svg"
import Car8 from "../../assets/car8.svg"
import Car9 from "../../assets/car9.svg"

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const AreaOfInterest = () => {
  return (
    <div className={css.container}>
        <span>What to expect?</span>
        <div >
        <Swiper className={css.swiperdiv}
          breakpoints={{
            1140:{
                slidesPerView:7,
                // slidesPerColumn: 1,
                slidesPerGroup:1, 
                loop:true,
                
              
            },
            1024:{
                slidesPerView:6,
            },
        786: {
          slidesPerView: 6,
        },
        0: {
          slidesPerView: 4,
        },
      }}
           modules={[Pagination]}
        pagination={{ clickable: true }}
        // navigation={true}
           loopFillGroupWithBlank={true}
           loop={true}
           slidesPerView={6}
           spaceBetween={0}
           slidesPerGroup={1}
           speed={1300}
          
          
          >
            <SwiperSlide>
                <div className={css.content}>
                <img src={Car1} alt="" />
                <span>Vintage car shows</span>
                </div>
               
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car2} alt="" />
                <span>Classic car meets</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car3} alt="" />
                <span>Quarter mile</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car4} alt="" />
                <span>Drift shows</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car5} alt="" />
                <span>One day drives</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car6} alt="" />
                <span>Road trips</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car7} alt="" />
                <span>JDM</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car8} alt="" />
                <span>German Beast</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={css.content}>
                <img src={Car9} alt="" />
                <span>Mods</span>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        {/* <img src={Car1} alt="" />
        <img src={Car1} alt="" />
        <img src={Car1} alt="" /> */}
      
    </div>
  )
}

export default AreaOfInterest
