import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GREEN_STAR from "../../../../../public/svg/GREEN STAR.svg";
import ORANGE_STAR from "../../../../../public/svg/ORANGE STAR.svg";
import NAVY_STAR from "../../../../../public/svg/NAVY STAR.svg";
import Image from "next/image";

const PriceSection: React.FC = () => {
  return (
    <>
    <div className='
    w-[100%] 
     lg:h-[144px] md:h-[61px] sm:h-[51px]
       bg-mint 
        sm:my-6  md:my-12 lg:my-[60px] 
         flex flex-col items-center justify-center '>
   <div className="relative py-5 w-[100%]   ">
   {/* LEFT Green star */} 
   <div className="absolute lg:top-[-43%] md:top-[-15%]  sm:top-[-9%] 
   lg:right-[12%] md:right-[9%] sm:right-[11%] 
    rotate-45	">
    <img src="../../svg/GREEN STAR.svg"  alt="green star" className="lg:w-[60px] lg:h-[60px] md:w-[23px] md:h-[22px] sm:w-[19px] sm:-h[19px]" />
   </div>
   {/* RIGHT Green str two */}

   <div className="absolute
    lg:bottom-[-43px] 
   lg:left-[232px] 
   md:bottom-[-12%] 
   md:left-[10%] 
   sm:bottom-[-5%] 
   sm:left-[10%] 
   
   rotate--40	">
    <img src="../../svg/GREEN STAR.svg"  alt="green star" className="lg:w-[60px] lg:h-[70px]
     md:w-[23px] md:h-[22px] 
     sm:w-[19px] sm:-h[19px]" />
   </div>
   <div className="absolute 
     lg:top-[-20px]  lg:left-[120px]
     md:top-[6px]  md:left-[30px]
     sm:top-[3%]  sm:left-[30px]
      rotate-45	">
    <img src="../../svg/ORANGE STAR.svg"  alt="orange star"
     className="lg:w-[60px] lg:h-[70px]
     md:w-[28px] md:h-[28px]
      sm:w-[24px] sm:-h[19px]" />
   </div>
   <div className="absolute
    lg:bottom-[-44px] 
     lg:right-[130px]
     md:bottom-[-12%] 
     md:right-[30px]
     sm:bottom-[-9%] 
     sm:right-[32px]  
     ">
    <img src="../../svg/NAVY STAR.svg"  alt="navy star" 
    
    className="lg:w-[60px] lg:h-[70px]  
        md:w-[28px] md:h-[28px]
 sm:w-[22px] sm:-h[20px]" />
   </div>
   <h4 className="text-primary lg:text-[50px] md:text-[21px] sm:text-[17px]
    text-center
     font-semibold
      uppercase font-LGC "> All of this for the half the price of a single therapy session!</h4>
   </div>
    </div>
    <div className="  mt-[10px] my-24 lg:w-[1200px] lg:h-[600px]  flex flex-col justify-center items-center">
  {/* <div className="bg-no-repeat bg-center bg-cover w-600 h-300 p-20"  Style="background-image: url('./public/svg/WEB-ORANGE BUTTON.svg')"> */}
     <div className="  bg-no-repeat  lg:w-[1029px] lg:h-[408px]
      md:w-[437px] md:h-[165px]
      sm:w-[368px] sm:h-[140px]

        "   style={{ 
      backgroundImage: `url("../../svg/WEB-ORANGE BUTTON.svg")` ,
    }} > 
    <div className="z-10 flex flex-col justify-center items-center lg:h-[408px] md:h-[165px] sm:h-[140px] ">
      <span className="text-white lg:text-[36px] md:text-[15px] sm:text-[12px]
         font-LGCB">LIMITED INTRODUCTORY OFFER!!</span>
      <span className="lg:text-[50px] md:text-[23px] sm:text-[19px]
       text-navy
       font-LGCB ">ACCESS TO THE FULL PROGRAMME</span>
      <span className="font-LGC text-lightyellow 
      lg:text-[84px] md:text-[36px] sm:text-[30px] 
      lg:leading-[112.57px] md:leading-[48.26px] sm:leading-[40.13px]">£89.99</span>
    </div>
  </div>
  <button className="btnbuy bg-navy text-white lg:text-[40px] md:text-[15px]
   uppercase lg:py-4 lg:px-20 
   border-none flex justify-center items-center font-LGC
   lg:w-[550px] lg:mt-10 md:mt-5 sm:mt-4 lg:h-[80px] md:w-[238px] md:h-[38px] sm:w-[200px] sm:h-[32px]">Buy it Now</button>
</div>


<div className="bg-lightyellow flex  justify-center items-center flex-col py-8 lg:w-[100%] md:w-[100%] sm:w-[100%]
sm:h-[100px] md:h-[120px] lg:h-[281px]
lg:mt-[-40px] md:mt-[-55px] sm:mt-[-62px]  ">
  <div className="lg:w-[58%] md:w-[60%] sm:w-[60%] text-center">
  <div className="lg:text-[40px] md:text-[17px] sm:text-[14px] 
  text-primary
   lg:leading-[48px] md:leading-[20.58px] sm:leading-[17.11px]
    font-LGC mb-8">"Nisha's strategies for us to use at home have been essential in supporting Theo's language development"</div>
    </div>
    <div className="">
  <ul className="flex items-center list-none  ">
    <li className="mr-4 font-LGCB lg:text-[40px] md:text-[17px] sm:text-[14px] text-primary">Sarah, UK</li>
    <li className="mr-4">
      <img src="../../svg/NAVY STAR.svg" alt="" className="lg:w-[45px] lg:h-[42px] md:w-[19px] md:h-[18px] sm:w-[19px] sm:h-[18px] " />
    </li>
    <li className="mr-4">
      <img src="../../svg/NAVY STAR.svg" alt="" className="lg:w-[45px] lg:h-[42px] md:w-[19px] md:h-[18px] sm:w-[19px] sm:h-[18px]" />
    </li>
    <li className="mr-4">
      <img src="../../svg/NAVY STAR.svg" alt="" className="lg:w-[45px] lg:h-[42px] md:w-[19px] md:h-[18px] sm:w-[19px] sm:h-[18px]" />
    </li>
    <li className="mr-4">
      <img src="../../svg/NAVY STAR.svg" alt="" className="lg:w-[45px] lg:h-[42px] md:w-[19px] md:h-[18px] sm:w-[19px] sm:h-[18px]" />
    </li> 
    <li className="mr-4">
      <img src="../../svg/NAVY STAR.svg" alt="" className="lg:w-[45px] lg:h-[42px] md:w-[19px] md:h-[18px] sm:w-[19px] sm:h-[18px]" />
    </li>       
  </ul>
  </div>
</div>
</>
    
  
  );
};

export default PriceSection;
