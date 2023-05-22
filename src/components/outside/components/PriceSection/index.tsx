import React from 'react'

const PriceSection: React.FC = () => {
  return (
    <>
      <div
        className="
    flex 
     w-[100%] flex-col items-center
       justify-center 
        bg-mint  sm:my-6 sm:h-[51px] 
         md:my-12 md:h-[61px] lg:my-[60px] lg:h-[144px] "
      >
        <div className="relative w-[100%] py-5   ">
          {/* LEFT Green star */}
          <div
            className="absolute rotate-45 sm:top-[-9%]  sm:right-[11%] 
   md:top-[-15%] md:right-[9%] lg:top-[-43%] 
    lg:right-[12%]	"
          >
            <img
              src="../../svg/GREEN STAR.svg"
              alt="green star"
              className="sm:-h[19px] sm:w-[19px] md:h-[22px] md:w-[23px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
          {/* RIGHT Green str two */}

          <div
            className="rotate--40
    absolute 
   sm:bottom-[-5%] 
   sm:left-[10%] 
   md:bottom-[-12%] 
   md:left-[10%] 
   lg:bottom-[-43px] 
   
   lg:left-[232px]	"
          >
            <img
              src="../../svg/GREEN STAR.svg"
              alt="green star"
              className="sm:-h[19px] sm:w-[19px]
     md:h-[22px] md:w-[23px] 
     lg:h-[70px] lg:w-[60px]"
            />
          </div>
          <div
            className="absolute 
     rotate-45  sm:top-[3%]
     sm:left-[30px]  md:top-[6px]
     md:left-[30px]  lg:top-[-20px]
      lg:left-[120px]	"
          >
            <img
              src="../../svg/ORANGE STAR.svg"
              alt="orange star"
              className="sm:-h[19px] sm:w-[24px]
     md:h-[28px] md:w-[28px]
      lg:h-[70px] lg:w-[60px]"
            />
          </div>
          <div
            className="absolute
    sm:bottom-[-9%] 
     sm:right-[32px]
     md:bottom-[-12%] 
     md:right-[30px]
     lg:bottom-[-44px] 
     lg:right-[130px]  
     "
          >
            <img
              src="../../svg/NAVY STAR.svg"
              alt="navy star"
              className="sm:-h[20px] sm:w-[22px]  
        md:h-[28px] md:w-[28px]
 lg:h-[70px] lg:w-[60px]"
            />
          </div>
          <h4
            className="text-center font-LGC font-semibold uppercase
    text-primary
     sm:text-[17px]
      md:text-[21px] lg:text-[50px] "
          >
            All of this for the half the price of a single therapy session!
          </h4>
        </div>
      </div>
      <div className="  my-24 mt-[10px] flex flex-col  items-center justify-center lg:h-[600px] lg:w-[1200px]">
        {/* <div className="bg-no-repeat bg-center bg-cover w-600 h-300 p-20"  Style="background-image: url('./public/svg/WEB-ORANGE BUTTON.svg')"> */}
        <div
          className="bg-no-repeat sm:h-[160px] sm:w-[388px] md:h-[185px] md:w-[457px] lg:h-[428px] lg:w-[1049px]"
          style={{
            backgroundImage: `url("../../svg/WEB-ORANGE BUTTON.svg")`,
          }}
        >
          <div className="z-10 flex flex-col items-center justify-center sm:h-[160px] md:h-[215px] lg:h-[428px] ">
            <span className="ml-[2px] font-LGCB text-navy sm:text-[21px] md:text-[25px] lg:text-[59px] ">
              ACCESS TO THE FULL PROGRAMME
            </span>
            <span className="text-center font-LGC text-lightyellow sm:text-[30px] sm:leading-[40.13px] md:text-[36px] md:leading-[48.26px] lg:text-[84px] lg:leading-[112.57px]">
              £89.99
            </span>
          </div>
        </div>
        <button
          className="btnbuy flex items-center justify-center border-none
   bg-navy font-LGC uppercase 
   text-white sm:mt-4 sm:h-[32px] sm:w-[200px] md:mt-5
   md:h-[38px] md:w-[238px] md:text-[15px] lg:mt-10 lg:h-[80px] lg:w-[550px] lg:py-4 lg:px-20 lg:text-[40px]"
        >
          Buy it Now
        </button>
      </div>

      <div
        className="flex flex-col  items-center justify-center bg-lightyellow py-8 sm:mt-[-62px] sm:h-[100px] sm:w-[100%]
md:mt-[-55px] md:h-[120px] md:w-[100%]
lg:mt-[-40px] lg:h-[281px] lg:w-[100%]  "
      >
        <div className="text-center sm:w-[60%] md:w-[60%] lg:w-[58%]">
          <div className="font-LGC text-primary sm:mb-3 sm:text-[14px] sm:leading-[17.11px] md:mb-5 md:text-[17px] md:leading-[20.58px] lg:mb-8 lg:text-[40px] lg:leading-[48px]">
            "Nisha's strategies for us to use at home have been essential in
            supporting Theo's language development"
          </div>
        </div>
        <div className="">
          <ul className="flex list-none items-center">
            <li className="mr-4 font-LGCB text-primary sm:text-[14px] md:text-[17px] lg:text-[40px]">
              Sarah, UK
            </li>
            <li className="mr-4">
              <img
                src="../../svg/STAR.svg"
                alt=""
                className="sm:h-[18px] sm:w-[19px] md:h-[18px] md:w-[19px] lg:h-[42px] lg:w-[45px] "
              />
            </li>
            <li className="mr-4">
              <img
                src="../../svg/STAR.svg"
                alt=""
                className="sm:h-[18px] sm:w-[19px] md:h-[18px] md:w-[19px] lg:h-[42px] lg:w-[45px]"
              />
            </li>
            <li className="mr-4">
              <img
                src="../../svg/STAR.svg"
                alt=""
                className="sm:h-[18px] sm:w-[19px] md:h-[18px] md:w-[19px] lg:h-[42px] lg:w-[45px]"
              />
            </li>
            <li className="mr-4">
              <img
                src="../../svg/STAR.svg"
                alt=""
                className="sm:h-[18px] sm:w-[19px] md:h-[18px] md:w-[19px] lg:h-[42px] lg:w-[45px]"
              />
            </li>
            <li className="mr-4">
              <img
                src="../../svg/STAR.svg"
                alt=""
                className="sm:h-[18px] sm:w-[19px] md:h-[18px] md:w-[19px] lg:h-[42px] lg:w-[45px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PriceSection
