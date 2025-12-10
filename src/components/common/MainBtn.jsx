import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const MainBtn = ({text, theam, size, simble}) => {
  return (
    <div className={`w-fit h-fit ${size == 'big'? ('text-[20px]'):('text-[16px]')} flex justify-center items-center Font1 ${theam === 'dark'? ('text-white bg-transparent border-[1px] border-white'):('text-black bg-white')} rounded-[10px] max-md:rounded-[7px] flex gap-[7px] select-none cursor-pointer px-[20px] py-[10px] max-md:py-[7px] hover:px-[30px] transition-all duration-500`}>
     {text}
     {
       simble === true && (<div className={`w-fit h-full ${theam === 'dark'? ('text-black bg-white '):('text-white bg-black')} rounded-[7px] `}>
        <MdKeyboardArrowRight/>
       </div>) 
     }
    </div>
  )
}

export default MainBtn
