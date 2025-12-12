'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const ThirdSection = () => {

  const Textarr = [
    'Vegan', 'Gelatin Free', 'Gluten Free', 'Dairy Free', 'Keto Friendly', 'Halal'
  ]
  const imgarr = [
    {
      img1: `/img/ThirdSection/veggie.avif`,
      img2: `/img/ThirdSection/makhani.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/c22909d6552d32026a64ba1fde1c09dcf0c43d4c-29x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/7911366576ad2a3d4f2b7ae53a464d37caf249cf-30x31.svg?w=30&auto=format&dpr=2`,
    },
    {
      img1: `/img/ThirdSection/dahai.avif`,
      img2: `/img/ThirdSection/makhani.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/5899d257d1890da7d5f04281bff8091dc0a0e1f3-30x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/c22909d6552d32026a64ba1fde1c09dcf0c43d4c-29x31.svg?w=30&auto=format&dpr=2`,
    },
    {
      img1: `/img/ThirdSection/milkcake.avif`,
      img2: `/img/ThirdSection/makhani.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/7911366576ad2a3d4f2b7ae53a464d37caf249cf-30x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/d8514648efc4d3e249bc2764b844a384ed414c7e-30x31.svg?w=30&auto=format&dpr=2`,
    },
    {
      img1: `/img/ThirdSection/veggie.avif`,
      img2: `/img/ThirdSection/dahai.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/d8514648efc4d3e249bc2764b844a384ed414c7e-30x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/5899d257d1890da7d5f04281bff8091dc0a0e1f3-30x31.svg?w=30&auto=format&dpr=2`,
    },
    {
      img1: `/img/ThirdSection/dahai.avif`,
      img2: `/img/ThirdSection/veggie.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/c22909d6552d32026a64ba1fde1c09dcf0c43d4c-29x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/c22909d6552d32026a64ba1fde1c09dcf0c43d4c-29x31.svg?w=30&auto=format&dpr=2`,
    },
    {
      img1: `/img/ThirdSection/makhani.avif`,
      img2: `/img/ThirdSection/milkcake.avif`,
      textur1: `https://cdn.sanity.io/images/krc73rcv/production/5899d257d1890da7d5f04281bff8091dc0a0e1f3-30x31.svg?w=30&auto=format&dpr=2`,
      textur2: `https://cdn.sanity.io/images/krc73rcv/production/7911366576ad2a3d4f2b7ae53a464d37caf249cf-30x31.svg?w=30&auto=format&dpr=2`,
    },
  ]


  const [hoverIndex, setHoverIndex] = useState(null);

  const isEven = (i) => i % 2 === 0;

  useEffect(() => {
    if (hoverIndex !== null) {
      // Scale animations
      gsap.fromTo(
        ".hover-img",
        { scale: 0, opacity: 0 },
        {
          scale: 1.1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
  
      gsap.fromTo(
        ".hover-texture",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
  
      // Rotate infinite
  
      gsap.to(".hover-texture", {
        rotateZ: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }
   
  },[hoverIndex])




  return (
    <div className='w-full h-screen bg-[#FCFAF8] flex justify-center items-center flex-col  relative overflow-hidden'>

      {/* Top-L */}
      <div className='w-[300px] h-[300px] flex absolute top-0 left-0 justify-center items-center '>
        {hoverIndex !== null && !isEven(hoverIndex) && (
          <div className='w-full h-full flex justify-center items-center relative'>
            <img src={imgarr[hoverIndex].textur1} className=" hover-texture fade-img absolute w-full z-[1] origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textureR" />
            <img src={imgarr[hoverIndex].img1} className="fade-img hover-img z-[2] rotate-[-30deg]" />
          </div>
        )}
      </div>

      {/* Top-r */}
      <div className='w-[300px] h-[300px] flex absolute top-0 right-0 justify-center items-center '>
        {hoverIndex !== null && isEven(hoverIndex) && (
          <div className='w-full h-full flex justify-center items-center relative'>
            <img src={imgarr[hoverIndex].textur1} className=" hover-texture fade-img absolute w-full z-[1] origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textureR" />
            <img src={imgarr[hoverIndex].img1} className="fade-img hover-img z-[2] rotate-[30deg]" />
          </div>
        )}
      </div>

      {/* bottom-r */}
      <div className='w-[300px] h-[300px] flex absolute bottom-0 right-0 justify-center items-center '>
        {hoverIndex !== null && !isEven(hoverIndex) && (
          <div className='w-full h-full flex justify-center items-center relative'>
            <img src={imgarr[hoverIndex].textur2} className=" hover-texture fade-img absolute w-full z-[1] origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textureR" />
            <img src={imgarr[hoverIndex].img2} className="fade-img hover-img z-[2] rotate-[30deg]" />
          </div>
        )}
      </div>

      {/* bottom-l */}
      <div className='w-[300px] h-[300px] flex absolute bottom-0 left-0 justify-center items-center '>
        {hoverIndex !== null && isEven(hoverIndex) && (
          <div className='w-full h-full flex justify-center items-center relative'>
            <img src={imgarr[hoverIndex].textur2} className=" hover-texture fade-img absolute w-full z-[1] origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textureR" />

            <img src={imgarr[hoverIndex].img2} className="fade-img hover-img z-[2] rotate-[-30deg]" />
          </div>
        )}
      </div>


      {
        Textarr.map((item, index) => {
          return (
            <div
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              key={index} className='w-full h-fit flex justify-center items-center Font3 text-[7rem] leading-[6rem] uppercase select-none cursor-pointer hover:text-[#E65300] font-bold'>
              {
                item
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default ThirdSection
