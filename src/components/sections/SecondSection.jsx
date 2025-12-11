"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GoDotFill } from "react-icons/go";
import { MdVerified } from "react-icons/md";

const SecondSection = () => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);
  const swiperWrapperRef = useRef(null);

  // ===================================  PRODUCT CODE
  const mostpopular = [
    {
      id: 1,
      backgroundImg: `https://www.brars.com/images/footer/mandala-spin.svg`,
      productImg: `/img/heroSectionImg/products/dahai.avif`,
      title: `Dahi Ke Kebab`,
      avalable: `Samosas(25 Piece)`,
      features: ["Vegetarian", "Halal", "Gelatin Free"],
    },
    {
      id: 2,
      backgroundImg: `https://www.brars.com/images/footer/mandala-spin.svg`,
      productImg: `/img/heroSectionImg/products/makhani.avif`,
      title: `Makhani Brars`,
      avalable: `Samosas(25 Piece)`,
      features: ["Vegetarian", "Halal"],
    },
    {
      id: 3,
      backgroundImg: `https://www.brars.com/images/footer/mandala-spin.svg`,
      productImg: `/img/heroSectionImg/products/milkcake.avif`,
      title: `Milk Cake`,
      avalable: `Samosas(25 Piece)`,
      features: ["Vegetarian", "Halal", "Gelatin Free"],
    },
    {
      id: 4,
      backgroundImg: `https://www.brars.com/images/footer/mandala-spin.svg`,
      productImg: `/img/heroSectionImg/products/veggie.avif`,
      title: `Veggie Burger`,
      avalable: `Samosas(25 Piece)`,
      features: ["Vegetarian", "Gelatin Free"],
    },
  ];

  const categories = [
    { name: "Most Popular", data: mostpopular },
    { name: "Samosa", data: mostpopular },
    { name: "Desserts", data: mostpopular },
    { name: "Snacks", data: mostpopular },
    { name: "Dairy", data: mostpopular },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].data);
  const [activeBtn, setActiveBtn] = useState("Most Popular");

  const handleCategoryClick = (data) => {
    gsap.to(swiperWrapperRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        setActiveCategory(data);

        gsap.to(swiperWrapperRef.current, {
          opacity: 1,
          duration: 0.4,
          delay: 0.1,
        });
      },
    });
  };

  const handleHoverIn = (e) => {
    const texture = e.currentTarget.querySelector(".texture");
    const productImg = e.currentTarget.querySelector(".product-img");

    // Animate product image
    gsap.to(productImg, {
      scale: 1.1,
      duration: 0.4,
      rotateZ: "-10",
      ease: "power3.out",
    });

    // Animate texture
    gsap.to(texture, {
      scale: 1.1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    // Infinite rotation
    gsap.to(texture, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  };

  const handleHoverOut = (e) => {
    const texture = e.currentTarget.querySelector(".texture");
    const productImg = e.currentTarget.querySelector(".product-img");

    // STOP infinite rotation first
    gsap.killTweensOf(texture);

    // Reset product image
    gsap.to(productImg, {
      scale: 1,
      rotateZ: "0",
      duration: 0.4,
      ease: "power3.out",
    });

    // Reset texture
    gsap.to(texture, {
      scale: 1,
      opacity: 0.05,
      rotate: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  //  ===================================== MARQUE CODE

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50, // 👉 move only 50% instead of full
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  const MarqueeItem = () => {
    return (
      <div className="text-black text-[22px] font-bold flex items-center gap-[4px] uppercase tracking-tight">
        <GoDotFill className="text-black" />{" "}
        <span> Vegetarian Done Better </span>{" "}
        <GoDotFill className="text-black" />{" "}
        <span className=" font-light">
          Bringing you the best in snacks, desserts & dairy!
        </span>
      </div>
    );
  };

  // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

  const [openDropdown, setOpenDropdown] = useState(false);

  // ================== CENTER SLIDE ANIMATION ==================
  const slidesRef = useRef([]);
  slidesRef.current = [];

  const addToRefs = (el) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FCFAF8] flex justify-center items-center">
      <div className="w-[90%] h-[90vh] max-md:w-[95%] bg-[#C5B4E2] rounded-[30px] flex translate-y-[-20dvh] flex-col max-sm:translate-y-[-30dvh]">
        {/* MARQUEE */}
        <div className="w-full overflow-hidden py-4  ">
          <div
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex  whitespace-nowrap select-none cursor-pointer"
          >
            {/* Duplicate content for seamless loop */}
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        {/* CONTANT-DIV */}
        <div className="w-full h-full bg-[#F6EFE2] rounded-[30px] flex flex-col">
          {/* Buttons */}
          <div className=" w-full h-fit flex justify-center items-center gap-[20px] mt-[40px] Font3 max-md:hidden">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-[30px] py-[15px] rounded-[10px] select-none cursor-pointer  hover:outline hover:outline-[2px] hover:outline-black ${
                  activeBtn === cat.name
                    ? "bg-black text-white border border-black"
                    : "bg-transparent text-black "
                }`}
                onClick={() => {
                  setActiveBtn(cat.name);
                  handleCategoryClick(cat.data);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* MOBILE DROPDOWN */}
          <div className="md:hidden w-full flex justify-center mt-[40px]">
            <div className="relative w-[85%]">
              {/* Main Dropdown Button */}
              <button
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="w-full bg-black text-white px-4 py-3 rounded-lg flex justify-between items-center"
              >
                <span className="font-semibold">{activeBtn}</span>
                <span className="text-xl">▾</span>
              </button>

              {/* Dropdown List */}
              {openDropdown && (
                <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg p-4 z-50">
                  {categories
                    .filter((c) => c.name !== activeBtn)
                    .map((cat, index) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setActiveBtn(cat.name);
                          handleCategoryClick(cat.data);
                          setOpenDropdown(false);
                        }}
                        className="w-full flex items-center gap-3 py-2 text-left"
                      >
                        {/* Colored dot — exact like image */}
                        <span
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: [
                              "#C59D5F", // Samosa gold
                              "#7B2136", // Dessert dark pink
                              "#FF6A00", // Snacks orange
                              "#4AA9E0", // Dairy blue
                            ][index],
                          }}
                        ></span>

                        <span className="font-medium text-[18px]">
                          {cat.name}
                        </span>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Cards */}
          <div className="w-full h-full  pt-[40px]">
            <div
              ref={swiperWrapperRef}
              className="opacity-100 transition-opacity duration-300"
            >
              <Swiper
                slidesPerView={"3.5"}
                // centeredSlides={true}
                spaceBetween={40}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 35,
                  },
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                  },
                }}
                className="mySwiper"
              >
                {activeCategory.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-full max-w[340px] h-[500px] rounded relative p-4 flex flex-col items-center">
                      <div
                        onMouseEnter={(e) => handleHoverIn(e)}
                        onMouseLeave={(e) => handleHoverOut(e)}
                        className="w-[300px] h-fit relative cursor-pointer"
                      >
                        {/* Bg texture */}
                        <img
                          src={item.backgroundImg}
                          alt="BG"
                          style={{ opacity: 0.05 }}
                          className="texture  w-full object-center object-cover "
                        />

                        {/* Product Img */}
                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                          <img
                            src={item.productImg}
                            alt="PI"
                            className="product-img"
                          />
                        </div>
                      </div>

                      <div className="w-full h-fit flex flex-col Font3 justify-center items-center pt-[30px]">
                        <h2 className="text-[2vw]">{item.title}</h2>
                        {/* features */}
                        <div className="w-full h-fit flex justify-center items-center flex-wrap gap-[4px]">
                          {item.features.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="w-fit h-fit flex gap-[4x] items-center"
                              >
                                <MdVerified className="text-orange-500" />
                                {
                                  <p className="Font3 text-[18px] leading-[18px]">
                                    {item}
                                  </p>
                                }
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Text */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
