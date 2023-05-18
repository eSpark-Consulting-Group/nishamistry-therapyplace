const ButtonTwo: React.FC = () => {
  return (
    <div
      className="
      flex 
    items-center justify-center sm:mb-[40px] 
      sm:mt-[5%] 
      sm:h-[147px] 
      sm:w-[397px]
       md:mt-[4%]
        md:h-[177px]
       md:w-[471px]
       lg:mb-[80px]
       lg:mt-[4%]
       lg:h-[175px]
       lg:w-[500px]"
    >
      <img
        className="absolute 
      sm:h-[147px] sm:w-[397px]
      md:h-[177px] md:w-[471px]
      lg:h-[229px] lg:w-[606px]
      "
        src="../../svg/BLUE BUTTON.svg"
        alt="WEB-BUTTON"
      />
      <div
        className="
    z-[1] 
    flex  flex-col	
     items-center justify-center "
      >
        <span
          className="font-LGCB
     uppercase text-white	
     sm:mb-1	
      sm:text-[12px] 
      md:text-[14px]
      lg:text-[19px]"
        >
          GET FULL ACCESS TO:
        </span>
        <span
          className="font-LGCB
    uppercase 
     text-primary
     sm:text-[24px]
     sm:leading-[24.36px]
     md:text-[28px]	
        md:leading-[30px]
        lg:text-[37px] lg:leading-[35px]"
        >
          ‘HELP YOUR TODDLER TALK!’
        </span>
        <span
          className="
    p-0 font-LGC 
    text-lightOrange
    sm:mt-[9px]
    sm:text-[28px]
     sm:leading-[15px]
    md:text-[34px]
    md:leading-[10px]
     lg:text-[44px] lg:leading-[38px]"
        >
          £89.99
        </span>
        <button
          className="bg-primary
     font-LGC 
     text-white 
     sm:mt-[15px] 
     sm:h-[27px]
   sm:w-[173px]
   sm:text-[13px]
   md:mt-[25px]
    md:h-[33px]
    md:w-[206px]
     md:text-[15px]
     lg:mt-[15px]
         lg:h-[43px]
         lg:w-[265px]
         lg:text-[18px]"
        >
          BUY IT NOW
        </button>
      </div>
    </div>
  )
}

export default ButtonTwo
