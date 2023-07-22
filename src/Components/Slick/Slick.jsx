import React from "react";
import Slider from "react-slick";
import css from "./Slick.module.css"
import Car1 from "../../assets/car1.svg"
import Car2 from "../../assets/car22.svg"
import Car3 from "../../assets/car3.svg"
import Car4 from "../../assets/car4.svg"
import Car5 from "../../assets/car5.svg"
import Car6 from "../../assets/car6.svg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide:0,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className={css.container}> 
   <span>Areas of interest</span>
    <Slider className={css.slid} {...settings}>
    <div className={css.content}>
                <img src={Car1} alt="" />
                <span>Vintage car shows</span>
                </div>
                <div className={css.content}>
                <img src={Car2} alt="" />
                <span>Classic car meets</span>
                </div>
                <div className={css.content}>
                <img src={Car3} alt="" />
                <span>Quarter mile</span>
                </div>
                <div className={css.content}>
                <img src={Car4} alt="" />
                <span>Dirty shows</span>
                </div>
                <div className={css.content}>
                <img src={Car5} alt="" />
                <span>One day drives</span>
                </div>
                <div className={css.content}>
                <img src={Car6} alt="" />
                <span>Road trips</span>
                </div>
                <div className={css.content}>
                <img src={Car6} alt="" />
                <span>Road trips</span>
                </div>
                <div className={css.content}>
                <img src={Car6} alt="" />
                <span>Road trips</span>
                </div>
                <div className={css.content}>
                <img src={Car6} alt="" />
                <span>Road trips</span>
                </div>
    </Slider>
    </div>
  );
}