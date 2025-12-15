"use client";
import React, { useEffect, useRef, useState } from "react";
import MainBtn from "../common/MainBtn";
import gsap from "gsap";

const SixSection = () => {
  const panelsData = [
    {
      id: 1,
      label: "LATEST NEWS",
      color: "bg-yellow-400",
      image: "/img/sixSection/yellow.avif",
      title: "OUR SMALL STORY WINS BIG AT THE MARKETING AWARDS",
      date: "August 5, 2025",
      text: "Brar’s and Trexo Robotics partner up to donate pediatric mobility devices to clinics",
    },
    {
      id: 2,
      label: "COMPANY UPDATES",
      color: "bg-sky-400",
      image: "/img/sixSection/blue.avif",
      title: "HELPING MORE KIDDOS TAKE THEIR FIRST STEPS",
      date: "July 4, 2025",
      text: "Brar’s and Trexo Robotics partner up to donate pediatric mobility devices to clinics in Toronto and BC, marking the start of a long-term effort.",
    },
    {
      id: 3,
      label: "PRODUCT NEWS",
      color: "bg-purple-300",
      image: "/img/sixSection/pink.avif",
      title: "NEW PRODUCTS LAUNCHING THIS FALL",
      date: "June 18, 2025",
      text: "Brar’s and Trexo Robotics partner up to donate pediatric mobility devices to clinics marking the start of a long-term effort.",
    },
  ];

  const [active, setActive] = useState(0);

  const HandelActive = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full min-h-screen flex pt-[100px] flex-col bg-[#FCFAF8] pb-[100px] max-sm:translate-y-[-30dvh]">
      {/* SubTitle */}
      <p className="Font3 text-[20px] leading-[18px] text-center">What`s New</p>

      {/* Title */}
      <h1 className="mt-[50px] max-md:mt-[10px] uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3  max-md:text-[10vw] max-md:leading-[9vw]">
        The World of{" "}
      </h1>
      <h1 className=" uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3 max-md:text-[10vw] max-md:leading-[9vw]">
        Brar's
      </h1>

      {/* BTN */}
      <div className="bg-black w-fit rounded-[10px] mx-auto mt-[20px]">
        <MainBtn
          text={"Learn More"}
          size={"big"}
          theam={"dark"}
          simble={true}
        />
      </div>

      {/* PC */}
      <div className="max-md:hidden w-full h-fit mt-[30px] px-[5vw] flex gap-[4px] relative">
        {panelsData.map((item, index) => (
          <div
            key={index}
            onClick={() => HandelActive(index)}
            className={`h-[600px] ${item.color} transition-all duration-500 select-none cursor-pointer overflow-hidden whitespace-nowrap  relative `}
            style={{
              width: active === index ? "95%" : "5%",
              borderRadius: active === index ? "20px" : "40px",
            }}
          >
            {/* Open */}
            <div
              style={{
                width: active === index ? "95%" : "5%",
                borderRadius: active === index ? "20px" : "40px",
              }}
              className={`w-full h-full whitespace-nowrap flex p-[20px] ${
                active === index
                  ? " opacity-100 pointer-events-auto whitespace-normal transition-opacity ease-in duration-300   "
                  : " opacity-0 pointer-events-none "
              }`}
            >
              {/* Img */}
              <div
                className={`h-full w-[45%]  rounded-[20px] overflow-hidden ${
                  active === index ? " opacity-100" : " opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt="img"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text-cont */}
              <div
                className={`w-[45vw] shrink-0 h-full flex flex-col justify-center transition-all ease-in duration-500 whitespace-nowrap items-center px-[2vw] ${
                  active === index ? " opacity-100" : " opacity-0"
                }`}
              >
                <div className="w-full h-fit flex px-[2vw] mb-[10px] Font1 gap-[4px]    ">
                  {item.date}
                </div>
                <div className="w-full h-fit flex text-[3vw] leading-[2.5vw] text-wrap px-[2vw] Font3  ">
                  <p>{item.title}</p>
                </div>
                <div className="w-full h-fit flex px-[2vw] Font1 text-wrap  ">
                  <p>{item.text}</p>
                </div>

                <div className="w-full rounded-[10px] mx-auto mt-[20px] px-[2vw]">
                  <MainBtn
                    text={"Learn More"}
                    size={"small"}
                    theam={"light"}
                    simble={true}
                  />
                </div>
              </div>
            </div>

            {/* Close */}
            <div
              className={`absolute inset-0 transition-all ease-in  flex justify-center items-center Font3 text-[20px] -rotate-90
              ${
                active === index
                  ? "opacity-0 z-0 duration-5"
                  : "opacity-100 duration-800 z-10"
              }
            `}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full mt-[30px] px-[5vw] flex flex-col gap-[12px]">
        {panelsData.map((item, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              className={`${item.color} rounded-[20px] overflow-hidden transition-all duration-500`}
            >
              {/* HEADER */}
              <div
                onClick={() => HandelActive(index)}
                className="w-full px-[20px] py-[16px] flex justify-between items-center cursor-pointer"
              >
                <p className="Font3 text-[16px]">{item.label}</p>
                <span
                  className={`transition-transform ${
                    isActive ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* CONTENT */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isActive ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-[20px] pb-[20px] flex flex-col gap-[16px]">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-full h-[200px] object-cover rounded-[15px]"
                  />

                  <p className="Font1">{item.date}</p>

                  <h2 className="Font3 text-[27px] leading-[25px]">
                    {item.title}
                  </h2>

                  <p className="Font1 text-[16px] leading-[14px]">{item.text}</p>

                  <MainBtn
                    text="Read More"
                    size="small"
                    theam="light"
                    simble
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixSection;
