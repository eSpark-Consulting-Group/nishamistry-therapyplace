import React from 'react'
// import {  } from 'react';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Web View */}
      <div className="relative my-[30px] h-[569px] w-[100%] justify-between bg-lightyellow sm:hidden md:hidden lg:flex ">
        <img
          src="../../img/WEB-HEADER@4x.png"
          className=" absolute h-[auto] w-[919px]"
          alt=""
        />
        <div className=" flex h-[569px] w-[1920px] flex-col items-end bg-lightyellow pt-8 pr-14">
          <div className="font-LGCB text-primary lg:text-[118px]">
            Help your toddler talk!
          </div>
          <div className="font-LGC text-white lg:text-[53px]">
            Unlock your child's communication potential!
          </div>
          <div className="font-LGC text-[43px] text-primary ">
            A set of pre-recorded tutorials to learn how you
          </div>
          <div className="font-LGC text-[43px] leading-[35px]  text-primary">
            can help your child speak.
          </div>
          <button className="mt-[2%] h-[73px] w-[451px] bg-primary font-LGC text-[34px] text-white">
            BUY IT NOW
          </button>
        </div>
      </div>

      {/* Tablet/Mobile View */}
      <div className="relative my-[30px] flex w-[100%] bg-lightyellow sm:h-[492px] md:h-[396px] lg:hidden">
        <img
          src="../../img/TTP-Training-(Lady Cutout).png"
          className="absolute h-[auto] w-[446px] sm:flex md:hidden lg:hidden"
          alt=""
        />
        <img
          src="../../img/TABLET-HEADER@4x.png"
          className=" absolute h-[auto] w-[478px] sm:hidden md:flex lg:hidden"
          alt=""
        />
        <div className="flex w-[100%] flex-col items-end bg-lightyellow pt-12 pr-5">
          <div className="font-LGCB text-primary sm:text-[37px] md:text-[45px]">
            Help your toddler talk!
          </div>
          <div
            className="mb-2 font-LGC
            text-white sm:w-[60%] sm:text-right
            sm:text-[30px] sm:leading-[36px] md:w-[100%] md:text-[20px]"
          >
            Unlock your child's communication potential!
          </div>
          <div
            className="text-right font-LGC text-primary sm:w-[50%] 
            sm:text-[30px] sm:leading-[36px] md:w-[100%]  md:text-[18px] md:leading-[20.35px]"
          >
            A set of pre-recorded tutorials to learn how
          </div>
          <div
            className="text-right font-LGC text-primary 
            sm:w-[40%] sm:text-[30px] 
            sm:leading-[36px] md:w-[100%] md:text-[18px] md:leading-[20.35px]"
          >
            you can help your child speak.
          </div>
          <button
            className="z-0 bg-primary font-LGC 
          text-[18px] text-white sm:mt-[13%]
          sm:h-[37px] sm:w-[230px] 
          md:mt-[19%] md:h-[37px] md:w-[230px] "
          >
            BUY IT NOW
          </button>
        </div>
      </div>
    </>
  )
}
export default HeroSection
