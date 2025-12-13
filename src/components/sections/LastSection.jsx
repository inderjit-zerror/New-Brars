'use client'
import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";
import gsap from 'gsap';

const LastSection = () => {

    useEffect(()=>{
        gsap.to('.bgR',{
            rotate:360,
            repeat:-1,
            duration:40,
            ease:'linear'
        })
    },[])
    return (
        <div className='w-full h-screen flex flex-col relative'>

            {/* Top */}
            <div className='w-full h-[50vh] bg-[#FF4900] overflow-hidden'>
                <div className='w-[50%] mx-auto bgR'>
                    <img src={`https://www.brars.com/images/footer/mandala-spin.svg`} className='w-full' alt="ig" />
                </div>
            </div>

            {/* Bottom */}
            <div className='w-full h-[50vh] bg-[#231F20]'>

            </div>

            {/* TOP-TOP */}
            <div className='w-full h-screen absolute top-0 left-0 flex justify-center items-center'>

                <div className='w-[70%] h-fit bg-[#C5B4E2] rounded-2xl py-[6vw] flex flex-col items-center relative'>


                    <div className='w-full h-fit flex uppercase flex-col text-[5vw] leading-[4vw] justify-center items-center Font3'>
                        <h1>Spice Up Your</h1>
                        <h1>Inbox</h1>
                    </div>

                    <p className='Font2 text-black text-[22px] mt-[2vw]'>Get special offers and all the latest products, recipes, and news delivered to your inbox!</p>

                    {/* Form */}
                    <div className="bg-[#C5B4E2] px-6 py-8 rounded-lg Font3">
                        {/* Top Row */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Full Name*"
                                className="flex-1 min-w-[240px] px-5 bg-white py-4 text-black rounded-xl outline-none text-sm font-medium"
                            />

                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="flex-1 min-w-[240px] px-5 bg-white py-4 text-black rounded-xl outline-none text-sm font-medium"
                            />

                            <button className="bg-black text-white hover:px-9  px-8 py-4 rounded-xl flex items-center gap-2 font-semibold hover:opacity-90 transition">
                                Submit

                                <div className='bg-white px-[4px] py-[4px] rounded-lg text-black'>
                                <FaArrowRight size={14} />
                                </div>
                            </button>
                        </div>

                        {/* Checkbox */}
                        <label className="flex gap-3 mt-4 Font2 w-[300px] text-xs text-black max-w-3xl items-start">
                            <input type="checkbox" className="mt-1" />
                            <span>
                                *Yes, I would like to receive updates, promotions, and offers from
                                Brar’s Retail & Restaurants. I understand I can unsubscribe at any
                                time.
                            </span>
                        </label>
                    </div>

                    {/* Orange */}
                    <div className=' absolute bottom-[-5%] right-[-5%] w-fit h-fit '>
                        <img src={`/img/lastSection/orange.svg`} alt="ol" className='w-[200px]' />
                    </div>

                    {/* Blue */}
                    <div className=' absolute top-[-18%] left-[70%] w-fit h-fit '>
                        <img src={`/img/lastSection/blue.svg`} alt="ol" className='w-[200px]' />
                    </div>

                    {/* Star */}
                    <div className=' absolute top-[-15%] left-[-8%] w-fit h-fit '>
                        <img src={`/img/lastSection/star.svg`} alt="ol" className='w-[250px]' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LastSection