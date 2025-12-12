'use client'
import React, { useEffect, useRef, useState } from 'react'
import MainBtn from '../common/MainBtn'
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
        <div className='w-full min-h-screen flex pt-[100px] flex-col bg-[#FCFAF8] pb-[100px]'>
            {/* SubTitle */}
            <p className='Font3 text-[20px] leading-[18px] text-center'>What`s New</p>

            {/* Title */}
            <h1 className='mt-[50px] uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3'>The World of </h1>
            <h1 className=' uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3'>Brar's</h1>

            {/* BTN */}
            <div className='bg-black w-fit rounded-[10px] mx-auto mt-[20px]'>
                <MainBtn text={'Learn More'} size={'big'} theam={'dark'} simble={true} />
            </div>

            <div className='w-full h-fit mt-[30px] px-[5vw] flex gap-[4px] relative'>


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
                        className={`w-full h-full whitespace-nowrap flex p-[20px] ${active === index ? "block opacity-100 pointer-events-auto transition-opacity duration-1000 delay-500  " : "hidden opacity-0 pointer-events-none "}`}>

                            {/* Img */}
                            <div className='h-full w-[45%]  rounded-[20px] overflow-hidden'>
                                <img src={item.image} alt="img" className='w-full h-full object-cover object-center' />
                            </div>

                            {/* Text-cont */}
                            <div className={`w-[55%] h-full flex flex-col justify-center items-center px-[2vw] ${active === index ? "block" : "hidden"}`}>

                                <div className='w-full h-fit flex px-[2vw] mb-[10px] Font1 gap-[4px]  '>
                                    {item.date}
                                </div>
                                <div className='w-full h-fit flex text-[3vw] leading-[2.5vw] text-wrap px-[2vw] Font3'>
                                    {item.title}
                                </div>
                                <div className='w-full h-fit flex px-[2vw] Font1 text-wrap '>
                                    {item.text}
                                </div>

                                <div className='w-full rounded-[10px] mx-auto mt-[20px] px-[2vw]'>
                                    <MainBtn text={'Learn More'} size={'small'} theam={'light'} simble={true} />
                                </div>
                            </div>

                        </div>

                        {/* Close */}
                        <div className={` w-full h-full flex justify-center items-center Font3 text-[20px] -rotate-90 ${active === index ? "hidden" : "block"}`}>
                            {
                                item.label
                            }
                        </div>

                    </div>
                ))}


            </div>

        </div>
    )
}

export default SixSection