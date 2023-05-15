import React from 'react'
// import {  } from 'react';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Web View */}
      <div className="relative justify-between my-[30px] bg-lightyellow sm:hidden md:hidden lg:flex h-[569px] w-[100%] ">
        <img
          src="../../img/WEB-HEADER@4x.png"
          className=" absolute h-[auto] w-[919px]"
          alt=""
        />
        <div
          className=" flex h-[569px] w-[1920px] flex-col items-end pt-8 pr-14 bg-lightyellow"
        >
          <div className="font-LGCB text-primary lg:text-[118px]">
            Help your toddler talk!
          </div>
          <div
            className="font-LGCG text-white lg:text-[53px]"
          >
            Unlock your child's communication potential!
          </div>
          <div
            className="font-LGC text-primary text-[43px] "
          >
            A set of pre-recorded tutorials to learn how you
          </div>
          <div
            className="font-LGC text-primary text-[43px]  leading-[35px]"
          >
            can help your child speak.
          </div>
          <button className="font-LGC bg-primary text-white h-[73px] w-[451px] text-[34px] mt-[2%]">
          BUY IT NOW
        </button>
        </div>
      </div>

      {/* Tablet/Mobile View */}
      <div className="relative flex my-[30px] bg-lightyellow lg:hidden md:h-[396px] sm:h-[492px] w-[100%]">
        <img
          src="../../img/TTP-Training-(Lady Cutout).png"
          className="absolute sm:flex md:hidden lg:hidden h-[auto] w-[446px]"
          alt=""
        />
        <img
          src="../../img/TABLET-HEADER@4x.png"
          className=" absolute sm:hidden md:flex lg:hidden h-[auto] w-[478px]"
          alt=""
        />
        <div
          className="flex flex-col items-end w-[100%] pt-12 pr-5 bg-lightyellow"
        >
          <div className="font-LGCB text-primary sm:text-[37px] md:text-[45px]">
            Help your toddler talk!
          </div>
          <div
            className="font-LGCB text-white
            sm:w-[60%] sm:text-right sm:text-[30px]
            md:w-[100%] md:text-[20px] sm:leading-[36px] mb-2"
          >
            Unlock your child's communication potential!
          </div>
          <div
            className="font-LGC text-primary sm:w-[50%] text-right 
            sm:text-[30px] md:text-[18px] 
            md:w-[100%] sm:w-[50%] sm:leading-[36px] md:leading-[20.35px]"
          >
            A set of pre-recorded tutorials to learn how
          </div>
          <div
            className="font-LGC text-primary text-right 
            sm:w-[40%] md:w-[100%] 
            sm:text-[30px] md:text-[18px] sm:leading-[36px] md:leading-[20.35px]"
          >
            you can help your child speak.
          </div>
          <button className="bg-primary font-LGC text-white 
          sm:h-[37px] md:h-[37px] text-[18px]
          sm:w-[230px] md:w-[230px] 
          md:mt-[19%] sm:mt-[13%] z-0 "
          >
          BUY IT NOW
        </button>
        </div>
      </div>
    </>
  )


  
}
export default HeroSection
