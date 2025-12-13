"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import MainBtn from "../common/MainBtn";
import gsap from "gsap";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const productRefs = useRef([]);
  const [PrevBG, SetPrevBG] = useState();


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


  useEffect(() => {
    const BGTL = gsap.timeline();

    BGTL.to(".BGCircle", {
      scale: 100,
      backgroundColor: ProductItem[activeIndex].bgCircleColor,
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: () => SetPrevBG(ProductItem[activeIndex].bgCircleColor),
    });

    BGTL.to(".BGCircle", {
      scale: 1,
      delay: 0.2,
      duration: 0.001,
    });
  }, [activeIndex]);

  useEffect(() => {
    // Kill all previous animations
    gsap.killTweensOf(productRefs.current);

    // Animate only active product
    const el = productRefs.current[activeIndex];
    if (el) {
      gsap.fromTo(
        el,
        { y: -8 },
        {
          y: 8,
          duration: 1,
          ease: "easeInOut",
          repeat: -1,
          yoyo: true,
        }
      );
    }
  }, [activeIndex]);

  // useEffect(() => {
  //   const updateBullets = () => {
  //     const bullets = document.querySelectorAll(".custom_bullet");

  //     bullets.forEach((bullet) => {
  //       bullet.classList.remove("custom_bullet_active");
  //       const existingFill = bullet.querySelector(".progress_fill");
  //       if (existingFill) bullet.removeChild(existingFill);
  //     });

  //     const activeBullet = bullets[activeIndex];
  //     if (activeBullet) {
  //       activeBullet.classList.add("custom_bullet_active");

  //       const fill = document.createElement("div");
  //       fill.className = "progress_fill";
  //       activeBullet.appendChild(fill);

  //       requestAnimationFrame(() => {
  //         fill.offsetWidth;
  //         fill.style.width = "100%";
  //       });
  //     }
  //   };

  //   updateBullets();
  // }, [activeIndex]);

  return (
    <div
      style={{ backgroundColor: PrevBG }}
      className="w-full h-[120dvh] max-lg:h-screen flex justify-center items-center relative overflow-hidden "
    >
      <div className="BGCircle absolute top-[40%] left-[50%] translate-x-[-50%] w-[50px] h-[50px] rounded-full"></div>

      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center ">
        {/* Texture Section */}
        <div className="w-full h-screen relative flex justify-center items-center max-lg:items-start max-md:pt-[100px] ">
          {/* Texture cont */}
          <div className="w-full h-fit max-w-[800px] flex justify-center items-center ">
            <img
              src={ProductItem[activeIndex].textureUrl}
              alt="TI"
              className="w-full object-cover"
            />
          </div>

          {/* Product */}
          <div className="w-full h-screen max-sm:h-fit  absolute top-0 left-0 flex justify-center items-center">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={250}
              centeredSlides={true}
              loop={true}
              pagination={{
                el: ".swiper_pagination",
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom_bullet" data-index="${index}"></span>`,
              }}
              // pagination={{

              //   clickable: true,
              // }}
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
                    <SwiperSlide key={index} className=" custom_slide flex justify-center items-center max-sm:pt-[120px] max-sm:pb-[140px]">
                      <div className=" w-full max-w-[800px] h-[600px] max-sm:h-fit  flex flex-col">
                        {/* Title */}
                        <div className="w-full h-fit flex justify-center items-center text-wrap px-[2vw] select-none">
                          {
                            <h1
                              style={{ color: item.textColor }}
                              className={`Font3 text-[4vw] leading-[4vw] max-sm:text-[3rem] max-sm:leading-[3rem] text-center uppercase transition-all duration-700  ${activeIndex === index
                                  ? "opacity-100"
                                  : "opacity-0"
                                }`}
                            >
                              {item.title}
                            </h1>
                          }
                        </div>

                        {/* Product Div*/}
                        <div className="w-full h-fit flex justify-center items-center max-sm:px-[10vw] relative select-none cursor-pointer">
                          <img
                            ref={(el) => (productRefs.current[index] = el)}
                            src={item.ProductUrl}
                            className={`${index == 0 && "w-[600px]"
                              } transition-all duration-[900ms] ease-out ${activeIndex === index
                                ? "rotate-0 scale-100"
                                : "rotate-[-5deg] scale-90 opacity-70"
                              }`}
                            alt="PI"
                          />

                          {/* Lable-Image */}
                          {/* Lable-1 */}
                          <img
                            className={` absolute top-[20%]  translate-y-[-50%] left-0 z-[-1] w-[10vw] max-sm:w-[100px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[-0%] translate-y-[-20%] scale-100 rotate-[-30deg] opacity-100"
                                : "translate-x-[80%] translate-y-[20%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/img/heroSectionImg/lable.avif"}
                            alt="LBI"
                          />
                          {/* Lable-2 */}
                          <img
                            className={` absolute top-[80%]  translate-y-[-50%] right-0 z-[-1] w-[10vw] max-sm:w-[100px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[-0%]  scale-100 rotate-[30deg] opacity-100"
                                : "translate-x-[20%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/img/heroSectionImg/lable.avif"}
                            alt="LBI"
                          />

                          {/* Starts ------- */}
                          <img
                            className={` absolute top-[10%]  translate-y-[-50%] right-[14%] z-[-1] w-[35px] max-sm:w-[25px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[+120%]  scale-100 rotate-[30deg] opacity-100"
                                : "translate-x-[14%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/svg/star.svg"}
                            alt="LBI"
                          />
                          <img
                            className={` absolute top-[30%]  translate-y-[-40%] right-[10%] z-[-1] w-[40px] max-sm:w-[20px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[+120%]  scale-100 rotate-[30deg] opacity-100"
                                : "translate-x-[10%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/svg/star.svg"}
                            alt="LBI"
                          />
                          <img
                            className={` absolute top-[45%]  translate-y-[-40%] left-[5%] z-[-1] w-[35px] max-sm:w-[25px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[-120%]  scale-100 rotate-[30deg] opacity-100"
                                : "translate-x-[5%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/svg/star.svg"}
                            alt="LBI"
                          />
                          <img
                            className={` absolute top-[-5%]  translate-y-[-40%] left-[20%] z-[-1] w-[25px] max-sm:w-[13px] 
                                        transition-all duration-[700ms] ease-out
                                            ${activeIndex === index
                                ? "translate-x-[-120%]  scale-100 rotate-[30deg] opacity-100"
                                : "translate-x-[5%] scale-0 rotate-0 opacity-0"
                              }

                                            `}
                            src={"/svg/star.svg"}
                            alt="LBI"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                  </>
                );
              })}
            </Swiper>
           {/* <div className="swiperBtns ">
           <div className="swiper_pagination  " />
           </div> */}
          </div>

          {/* BTN-Lable */}
          <div className="w-full h-fit  absolute top-[85%] max-sm:top-[60%] left-0 flex justify-center items-center gap-[10px] z-[90] max-sm:hidden">
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
          {/* SM - BTN-Lable */}
          <div className="w-full h-fit  absolute top-[85%] max-sm:top-[62%] left-0 flex justify-center items-center gap-[10px] z-[90] sm:hidden">
            <MainBtn
              text={"View Product"}
              theam={"light"}
              size={"small"}
              simble={true}
            />
            <MainBtn
              text={"Find Product"}
              theam={"dark"}
              size={"small"}
              simble={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
