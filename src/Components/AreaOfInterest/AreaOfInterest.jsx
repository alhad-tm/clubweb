import React from 'react'
import css from "./AreaOfInterest.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination ,Navigation} from "swiper/modules";
import Car1 from "../../assets/car1.svg"
import Car2 from "../../assets/car22.svg"
import Car3 from "../../assets/car3.svg"
import Car4 from "../../assets/car4.svg"
import Car5 from "../../assets/car5.svg"
import Car6 from "../../assets/car6.svg"

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

const AreaOfInterest = () => {
  return (
    <div className={css.container}>
        <span>Area of interest</span>
        <div >
        <Swiper className={css.swiperdiv}
           modules={[Pagination, Navigation]}
           navigation={true}
           loopFillGroupWithBlank={true}
           slidesPerView={5}
           spaceBetween={0}
        //    slidesPerGroup={1}
           loop={true}
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
                <span>Dirty shows</span>
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
                <img src={Car6} alt="" />
                <span>Road trips</span>
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
                <img src={Car6} alt="" />
                <span>Road trips</span>
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
