import React from "react";
import MainBtn from "../common/MainBtn";

const FourthSection = () => {
  return (
    <div className="w-full min-h-screen max-md:min-h-fit flex justify-center items-center bg-[#FCFAF8] px-[2vw] max-md:overflow-hidden max-sm:translate-y-[-30dvh]">
      <div className="w-fit h-fit flex flex-col justify-center items-center max-sm:w-full  ">
        {/* Top-text */}
        <div className="w-full h-fit fex flex-col px-[6vw] Font3 text-[6vw] leading-[5vw] max-md:text-[12vw] max-md:leading-[11vw] flex flex-col justify-center   items-center uppercase translate-y-[50px] max-md:translate-y-[30px] z-[100] ">
          <h1>Rooted in </h1>
          <h1>Tradition,</h1>
        </div>

        <div className="w-fit h-fit flex justify-center items-center  pl-[4vw] max-md:w-full max-md:flex-col max-md:pl-0">
          {/* Image */}
          <div className="w-[50%] h-[fit] flex  relative max-md:w-full max-md:justify-center max-md:items-center max-md:flex-col">
            {/* top-lable */}
            <div className=" absolute top-[-10%] right-[-7%] w-[160px] h-[160px] max-md:w-[100px] max-md:h-[100px] overflow-hidden origin-center  z-[100] ">
              <img
                src={`/img/forthSection/TR_lable.avif`}
                alt="lable"
                className="w-full object-cover"
              />
            </div>

            {/* main-Image */}
            <img
              src={"/img/forthSection/fourthImg.avif"}
              alt="4Img"
              className="w-full object-cover rounded-[30px] "
            />

            {/* bottom-lable */}
            <div className=" absolute bottom-[-10%] max-md:bottom-[-0%] z-[1] left-[-7%] w-[160px] h-[160px] max-md:w-[100px] max-md:h-[100px] overflow-hidden origin-center  z-[100]">
              <img
                src={`/img/forthSection/BL_lable.avif`}
                alt="lable"
                className="w-full object-cover"
              />
            </div>

            <div className="w-fit h-fit fex flex-col z-[10] justify-center items-center  md:hidden Font3 text-[6vw] leading-[5vw] uppercase -translate-y-[10px] max-md:text-[10vw] max-md:leading-[9vw] max-md:flex-col ">
              <h1>Growing with</h1>
              <h1>Community</h1>
            </div>
          </div>
          <div className="w-[25%] h-full flex flex-col text-black px-[20px] gap-[20px]  max-md:w-full max-md:mt-[30px] text-center ">
            <p className="text-[20px] leading-[18px] Font2 max-md:text-[16px] max-md:leading-[16px] max-md:px-[10vw] ">
              We’re on a mission to share our love of authentic, vegetarian
              Indian cuisine with every Canadian. That’s why you’ll never see
              food on the shelves that we wouldn’t serve up at our own family
              function.
            </p>
            <div className="bg-black w-fit rounded-[10px] max-md:mx-auto max-md:mb-[50px]">
              <MainBtn
                text={"Learn More"}
                size={"big"}
                theam={"dark"}
                simble={true}
              />
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="w-fit h-fit fex flex-col justify-center items-center max-md:hidden  Font3 text-[6vw] leading-[5vw] uppercase translate-y-[-50px] max-md:flex-col ">
          <h1>Growing with</h1>
          <h1>Community</h1>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
