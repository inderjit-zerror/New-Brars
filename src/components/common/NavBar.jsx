"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import MainBtn from "./MainBtn";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const menuArr = ["Products", "Recipes", "About Us", "News", "Search"];
  const productCategories = [
    {
      id: 1,
      title: "DAIRY",
      image: "/img/productCategories/dairy.avif",
    },
    {
      id: 2,
      title: "DESSERTS",
      image: "/img/productCategories/desserts.avif",
    },
    {
      id: 3,
      title: "SNACKS",
      image: "/img/productCategories/snacks.avif",
    },
    {
      id: 4,
      title: "SAMOSAS",
      image: "/img/productCategories/samosas.avif",
    },
    {
      id: 5,
      title: "ALL PRODUCTS",
      image: "/img/productCategories/allProducts.avif",
    },
  ];

  const productTypes = [
    {
      id: 1,
      title: "VEGAN",
      image: "/img/productTypes/vegan.avif",
    },
    {
      id: 2,
      title: "GELATIN FREE",
      image: "/img/productTypes/gelatin.avif",
    },
    {
      id: 3,
      title: "GLUTEN FREE",
      image: "/img/productTypes/free.avif",
    },
    {
      id: 4,
      title: "HALAL",
      image: "/img/productTypes/halal.avif",
    },
  ];

  const [pcMenu, SetPcMenu] = useState(false);
  const [smMenu, SetSmMenu] = useState(false);

  /////////////////////////////////////////////////// FUNCTIONS

  const PcMenuActiveDeActive = (index) => {
    if (index === 0) {
      if (pcMenu == false) {
        const pcTl = gsap.timeline();
        pcTl.to(
          ".PcMenuDisplay",
          {
            opacity: 1,
          },
          "pc1"
        );
        pcTl.to(
          ".PcMenuDisplay",
          {
            height: "80dvh",
            duration: 1,
            ease: "power4.inOut",
          },
          "pc1"
        );
        pcTl.to(
          ".PCMenuCont",
          {
            opacity: 1,
            delay: 0.4,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "pc1"
        );
        SetPcMenu(true);
      } else {
        const pcTl = gsap.timeline();
        pcTl.to(
          ".PCMenuCont",
          {
            opacity: 0,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "pc1"
        );
        pcTl.to(
          ".PcMenuDisplay",
          {
            height: "0dvh",
            delay: 0.02,
            duration: 1,
            ease: "power4.inOut",
          },
          "pc1"
        );
        pcTl.to(
          ".PcMenuDisplay",
          {
            opacity: 0,
            delay: 0.04,
            duration: 1,
          },
          "pc1"
        );
        SetPcMenu(false);
      }
    } else {
      return;
    }
  };

  const SMMenuHandler = () => {
    if (smMenu === false) {
      const SMTl = gsap.timeline();
      SMTl.to(
        ".SMMenuDisplay",
        {
          opacity: 1,
        },
        "SM1"
      );
      SMTl.to(
        ".SMMenuDisplay",
        {
          height: "85dvh",
          duration: 1,
          ease: "power4.inOut",
        },
        "SM1"
      );
      SMTl.to(
        ".SMInnerCont",
        {
          opacity: 1,
          delay: 0.4,
          stagger: 0.1,
          ease: "power4.inOut",
        },
        "SM1"
      );
      SetSmMenu(true);
    } else {
      const ST = gsap.timeline();

      ST.to(".SMInnerCont", {
        opacity: 0,
        duration: 0.4,
        ease: "power4.inOut",
      },'Cl1');

      ST.to(".SMMenuDisplay", {
        height: "0dvh",
        duration: 0.6,
        ease: "power4.inOut",
      },'Cl1');

      ST.to(".SMMenuDisplay", {
        opacity: 0,
        duration: 0.3,
      },'Cl1');

       SetSmMenu(false);
    }
  };

  return (
    <div className="w-full h-fit flex fixed top-0 left-0 z-100 justify-center items-center">
      
      {/* Nav Container */}
      <div className="w-[85%] max-xl:w-[95%] flex h-fit py-[20px] max-xl:py-[10px] bg-[#231F20] mt-[20px] rounded-[20px] max-xl:rounded-[10px] relative items-center px-[2vw]">
        {/* Left */}
        <div className="w-full h-fit flex gap-4.5 text-white max-xl:hidden ">
          {menuArr.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => PcMenuActiveDeActive(index)}
                className="w-fit h-fit flex justify-center items-center border-b-[2px] border-transparent hover:border-white transition-all duration-500 select-none cursor-pointer"
              >
                <p className="text-[20px] Font1">{item}</p>
                {index === 0 && (
                  <div className="w-[20px] h-[20px] flex justify-center items-center text-white">
                    <RiArrowDropDownLine className="text-[18px]" />
                  </div>
                )}
                {index === 4 && (
                  <div className="w-[15px] h-[15px] ml-[7px] rounded-[4px] flex justify-center items-center bg-white">
                    <LiaSearchSolid className="text-black text-[8px]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right  */}
        <div className="w-full h-fit  flex justify-end items-center gap-[10px] max-xl:hidden">
          <MainBtn
            text={"Find Product"}
            theam={"light"}
            size={"big"}
            simble={true}
          />
          <MainBtn
            text={"Dine With Us"}
            theam={"dark"}
            size={"big"}
            simble={true}
          />
        </div>

        {/* MAX-XL Right  */}
        <div className="w-full h-fit  flex justify-end items-center gap-[10px] xl:hidden">
          <MainBtn
            text={"Find Product"}
            theam={"dark"}
            size={"small"}
            simble={false}
          />

          {/* MenuBtn */}
          <div
            onClick={SMMenuHandler}
            className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-[7px] py-[4px] text-[20px] "
          >
            {
              smMenu === false? (<><TbMenu/></>) :(<> <RxCross2/> </>)
            }
          </div>
        </div>

        {/* Logo */}
        <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[180px] select-none cursor-pointer max-xl:left-[2%] max-xl:-translate-x-0 max-xl:w-[80px]">
          <img src={"/svg/logo.svg"} alt="logo" />
        </div>

        {/* PC Menu - Display */}
        <div className="PcMenuDisplay w-full h-[0dvh] opacity-0  bg-[#231F20] absolute top-[110%] left-0 rounded-[25px] p-[10px] max-xl:hidden max-xl:pointer-events-none">
          <div className="w-full h-[100%] bg-white rounded-[10px] overflow-y-scroll flex px-[2vw] py-[1vh] gap-[20px]">
            {/* Left */}
            <div className="PCMenuCont w-full h-full mt-[30px] flex flex-col gap-[20px] opacity-0">
              {/* Title */}
              <div className="w-full h-fit flex">
                <p className="text-[20px] Font1">Product Categories</p>
              </div>
              {productCategories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-fit  flex relative p-[7px] rounded-[10px] hover:bg-amber-50 select-none cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="w-[90px] h-[80px]  overflow-hidden rounded-[10px]">
                      <img
                        src={item.image}
                        alt="product Images"
                        className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <div className="w-full h-full flex Font3 text-[1.2vw] items-center px-[20px]">
                      <p>{item.title}</p>
                    </div>

                    {/* Lable */}
                    <div className=" w-[25px] h-[25px] absolute top-1/2 -translate-y-1/2 left-[90%] bg-black rounded-[7px] flex justify-center items-center text-white">
                      <GoArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center */}
            <div className="PCMenuCont w-full h-full mt-[30px] flex flex-col gap-[20px] opacity-0">
              {/* Title */}
              <div className="w-full h-fit flex">
                <p className="text-[20px] Font1">Type Of Products</p>
              </div>
              {productTypes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-fit  flex relative p-[7px] rounded-[10px] hover:bg-amber-50 select-none cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="w-[90px] h-[80px]  overflow-hidden rounded-[10px]">
                      <img
                        src={item.image}
                        alt="product Images"
                        className="w-full h-full object-center object-cover transition-all duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <div className="w-full h-full flex Font3 text-[1.2vw] items-center px-[20px]">
                      <p>{item.title}</p>
                    </div>

                    {/* Lable */}
                    <div className=" w-[25px] h-[25px] absolute top-1/2 -translate-y-1/2 left-[90%] bg-black rounded-[7px] flex justify-center items-center text-white">
                      <GoArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right */}
            <div className="PCMenuCont w-full h-full mt-[30px] flex flex-col opacity-0">
              {/* Title */}
              <div className="w-full h-fit flex">
                <p className="text-[20px] Font1">Type Of Products</p>
              </div>

              {/* Main */}
              <div className="w-full h-full bg-[#973F54] rounded-[2vw] px-[30px] py-[25px] overflow-hidden">
                {/* title */}
                <div className="w-full h-fit flex Font3 text-[3vw] leading-[3vw] flex-col uppercase text-white">
                  <h2>Veggie</h2>
                  <h2>Burger</h2>
                </div>

                {/* Decs */}
                <div className="w-full h-fit flex Font2 text-white text-[16px] leading-[18px] mt-[20px]">
                  <p>
                    Home-style frozen veggie burgers with an Indian-style twist.
                    Deliciously seasoned with our secret masala spice blend,
                    these burgers are packed with paneer, carrots, corn, and
                    potatoes—egg free, 100% vegetarian.
                  </p>
                </div>

                {/* BTN */}
                <div className="w-full h-fit flex mt-[20px]">
                  <MainBtn
                    text={"View Products"}
                    theam={"light"}
                    size={"big"}
                    simble={true}
                  />
                </div>

                {/* Div image */}
                <div className="w-full h-fit relative flex">
                  <img
                    src={"/img/navFratured/veggie.avif"}
                    alt="NFI"
                    className="w-full object-fill mt-[90px] -rotate-z-10 z-10"
                  />

                  {/* Lable Image */}
                  <img
                    src={"/img/navFratured/lable.avif"}
                    alt="LI"
                    className="  w-[10vw] absolute top-[-10%] left-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL MENU - Display */}
        <div className="SMMenuDisplay w-full h-[0dvh] opacity-0  bg-[#231F20] absolute top-[110%] left-0 rounded-[15px] p-[7px] xl:hidden">
          <div className=" w-full h-[100%] bg-[#FCFAF8] rounded-[10px]  ">
            {/* mainCont */}
            <div className="w-full h-[100%] SMInnerCont opacity-0  relative overflow-y-scroll flex flex-col px-[4vw] py-[1vh] gap-[5px] pt-[20px]">
              {menuArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-fit Font3 uppercase text-[#FF4900]"
                  >
                    <div
                      className={`#FF4900 text-[2.5rem] leading-[2.5rem] ${
                        index === 0 && "relative w-fit"
                      }`}
                    >
                      {item}
                      {index === 0 && (
                        <div className="w-[30px] h-[30px] bg-black rounded-[5px] absolute top-[10%] right-[-20%] flex justify-center items-center text-white">
                          <MdKeyboardArrowRight className="text-[30px]" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="w-full h-fit Font3 uppercase text-[#FF4900] ">
                <p className="#FF4900 text-[2.5rem] leading-[2.5rem]">
                  Contact
                </p>
              </div>

              {/* Bottom Text */}
              <div className="w-full h-fit absolute bottom-0 left-0 ">
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 py-6 px-[4vw]">
                  {/* Social Links */}
                  <div className="space-y-2">
                    {["Instagram", "Facebook", "TikTok"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className={`text-orange-600 flex Font1 items-center gap-1 text-[18px] leading-[18px] hover:text-orange-700 transition `}
                      >
                        {item} <FiArrowUpRight className="inline-block" />
                      </a>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Left Button (Filled) */}
                    <button className="bg-neutral-900 text-white px-6 py-2.5 rounded-[5px] font-semibold text-sm flex items-center gap-2 hover:bg-neutral-800 transition">
                      <span className="font-semibold">Find Product</span>
                      <MdKeyboardArrowRight className="text-sm" />
                    </button>

                    {/* Right Button (Outlined) */}
                    <button className="border border-neutral-900 text-neutral-900 px-6 py-2.5 rounded-[5px] font-semibold text-sm flex items-center gap-2 hover:bg-neutral-900 hover:text-white transition">
                      <span className="font-semibold">Dine with Us</span>
                      <MdKeyboardArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
