"use client"
import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { VscVerifiedFilled } from "react-icons/vsc";



// import required modules
import { Pagination } from 'swiper/modules';
import MainBtn from '../common/MainBtn'
import gsap from 'gsap';


const FifthSection = () => {

    const fifthArr = [
        {
            img: `/img/fifthSection/img2.avif`,
            title: `Protein Dahi Bowl`,
            time: `15 min`,
            bgclr: `#C5B4E2`
        },
        {
            img: `/img/fifthSection/img3.avif`,
            title: `Grilled Peri Peri Paneer with Cheesy Garlic Sauce & Rice`,
            time: `40 min`,
            bgclr: `#24A3E3`
        },
        {
            img: `/img/fifthSection/img4.avif`,
            title: `Ghee Podi Dosa`,
            time: `39 min`,
            bgclr: `#C5B4E2`
        },
        {
            img: `/img/fifthSection/img5.avif`,
            title: `Samosa Chaat Cups`,
            time: `48 min`,
            bgclr: `#FFC629`
        },
        {
            img: `/img/fifthSection/img6.avif`,
            title: `Mango Rasmalai Milkshake`,
            time: `50 min`,
            bgclr: `#00A7E1`
        },
        {
            img: `/img/fifthSection/img7.avif`,
            title: `Loaded Veggie Burger Bowl`,
            time: `20 min`,
            bgclr: `#C5B4E2`
        },
        {
            img: `/img/fifthSection/img8.avif`,
            title: `Grilled Peri Peri Paneer with Cheesy Garlic Sauce & Rice`,
            time: `30min`,
            bgclr: `#24A3E3`
        },
    ]

    useEffect(()=>{

        gsap.to('.bgRound',{
          rotateZ:'360',
          repeat:-1,
          duration:20,
          ease:'linear'  
        })

    },[])


    return (
        <div className='w-full min-h-screen flex pt-[100px] flex-col bg-[#FCFAF8] pb-[100px]'>
            {/* SubTitle */}
            <p className='Font3 text-[20px] leading-[18px] text-center'>Recipes</p>

            {/* Title */}
            <h1 className='mt-[50px] uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3'>From Our Kitchen</h1>
            <h1 className=' uppercase text-[4.5vw] leading-[4vw] tracking-tight text-center Font3'>To Yours</h1>

            <div className='bg-black w-fit rounded-[10px] mx-auto mt-[20px]'>
                <MainBtn text={'Learn More'} size={'big'} theam={'dark'} simble={true} />
            </div>

            {/* Main Contant */}

            <div className='w-full h-fit flex mt-[40px] overflow-hidden'>
                <Swiper
                    loop={true}
                    spaceBetween={100}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        fifthArr.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div style={{ backgroundColor: item.bgclr }} key={index} className='w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-fit overflow-hidden   flex flex-col cursor-pointer justify-between rounded-[30px] min-h-[500px] p-[20px] relative '>
                                        <div className='w-full h-fit flex flex-col z-[2]'>
                                            <div className='w-full h-[240px] overflow-hidden rounded-[15px] select-none '>
                                                <img src={item.img} alt="img" className='w-full object-cover' />
                                            </div>
                                            {/* SubTitle */}
                                            <div className='w-full h-fit flex text-[18px] leading-[17px] gap-[10px] Font3 mt-[20px] select-none items-center '>
                                               <VscVerifiedFilled /> <p>Vegetarian</p>
                                            </div>

                                            {/* Title */}
                                            <div className='w-full h-fit flex text-[2rem] mt-[20px] select-none leading-[1.5rem] Font3 mt-[10px] text-wrap flex-wrap'>
                                                <p>{item.title}</p>
                                            </div>

                                        </div>
                                        {/* Btn */}
                                        <div className='w-full h-fit flex z-[2] '>
                                            <MainBtn text={'View Recipe'} size={'small'} theam={'light'} simble={true} />
                                        </div>

                                        {/* Background */}
                                        <img src={`https://www.brars.com/images/footer/mandala-spin.svg`} className=' absolute origin-center bgRound scale-[1.1] top-[-10%] opacity-10 left-1/2 z-[1] -translate-x-1/2' alt="bg" />

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>





            </div>

        </div>
    )
}

export default FifthSection