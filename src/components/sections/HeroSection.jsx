"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import MainBtn from "../common/MainBtn";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ProductItem = [
    {
      bgCircleColor: `#FFC629`,
      title: "Yogurt & Cilantro",
      textColor: "#FF4900",
      textureUrl: `/img/heroSectionImg/textures/bg2.avif`,
      ProductUrl: `/img/heroSectionImg/products/dahai.avif`,
    },
    {
      bgCircleColor: `#811B48`,
      title: "Paneer & Mixed Veggies",
      textColor: "#FF4900",
      textureUrl: `/img/heroSectionImg/textures/bg1.avif`,
      ProductUrl: `/img/heroSectionImg/products/veggie.avif`,
    },
    {
      bgCircleColor: `#C5B4E2`,
      title: "Indian Dessert Delicacy",
      textColor: "#811B48",
      textureUrl: `/img/heroSectionImg/textures/bg3.avif`,
      ProductUrl: `/img/heroSectionImg/products/milkcake.avif`,
    },
    {
      bgCircleColor: `#FFC629`,
      title: "Plain Home-Style Yogurt",
      textColor: "#FFFFFF",
      textureUrl: `/img/heroSectionImg/textures/bg4.avif`,
      ProductUrl: `/img/heroSectionImg/products/makhani.avif`,
    },
    {
      bgCircleColor: `#811B48`,
      title: "Paneer & Mixed Veggies",
      textColor: "#FF4900",
      textureUrl: `/img/heroSectionImg/textures/bg1.avif`,
      ProductUrl: `/img/heroSectionImg/products/veggie.avif`,
    },
  ];

  return (
    <div className="w-full h-[140dvh] flex justify-center items-center bg-blue-300">
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center ">
        {/* Texture Section */}
        <div className="w-full h-screen relative flex justify-center items-center ">
          {/* Texture cont */}
          <div className="w-full h-fit max-w-[800px] flex justify-center items-center">
            <img
              src={ProductItem[activeIndex].textureUrl}
              alt="TI"
              className="w-full object-cover"
            />
          </div>

          {/* Product */}
          <div className="w-full h-screen  absolute top-0 left-0 flex justify-center items-center">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={250}
              centeredSlides={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500, // 2.5 seconds
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="mySwiper"
            >
              {ProductItem.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={index} className=" custom_slide">
                      <div className=" w-full max-w-[800px] h-[600px] flex flex-col">
                        {/* Title */}
                        <div className="w-full h-fit flex justify-center items-center text-wrap px-[2vw] select-none">
                          {
                            <h1
                              style={{ color: item.textColor }}
                              className={`Font3 text-[4vw] leading-[4vw] text-center uppercase transition-all duration-700  ${
                                activeIndex === index
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            >
                              {item.title}
                            </h1>
                          }
                        </div>

                        {/* Product Div*/}
                        <div className="w-full h-fit flex justify-center items-center relative select-none cursor-pointer">
                          <img
                            src={item.ProductUrl}
                            className={`${
                              index == 0 && "w-[600px]"
                            } transition-all duration-[900ms] ease-out ${
                              activeIndex === index
                                ? "rotate-0 scale-100"
                                : "rotate-[-5deg] scale-90 opacity-70"
                            }`}
                            alt="PI"
                          />

                          {/* Lable-Image */}

                          <img
                            className={` absolute top-[20%]  translate-y-[-50%] left-0 z-[-1] w-[10vw] 
                                        transition-all duration-[700ms] ease-out
                                            ${
                                              activeIndex === index
                                                ? "translate-x-[-0%] translate-y-[-20%] scale-100 rotate-[-30deg] opacity-100"
                                                : "translate-x-[80%] translate-y-[20%] scale-0 rotate-0 opacity-0"
                                            }

                                            `}
                            src={"/img/heroSectionImg/lable.avif"}
                            alt="LBI"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>

          {/* BTN-Lable */}
          <div className="w-full h-fit  absolute top-[85%] left-0 flex justify-center items-center gap-[10px] z-[90]">
            <MainBtn
              text={"View Product"}
              theam={"light"}
              size={"big"}
              simble={true}
            />
            <MainBtn
              text={"Find Product"}
              theam={"dark"}
              size={"big"}
              simble={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
