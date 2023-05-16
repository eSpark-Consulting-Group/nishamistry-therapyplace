const IntroductionHeader: React.FC = () => {
    return (
       
        <div className="relative flex items-center justify-center bg-chocolate sm:h-[100px] w-[100%] md:h-[120px] lg:h-[272px] mb-10">
          <div className="flex h-full w-3/5 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-full w-1/6 flex-col items-center justify-center">
                <h2 className="font-LGCB text-primary sm:text-[15px] md:text-[18px] lg:text-[42px]">
                  INTRODUCTION:
                </h2>
              </div>
              <div className="flex justify-center">
                <img
                  className="mr-4 sm:h-[35px] sm:w-[37px] md:h-[42px] md:w-[44px] lg:h-[95px] lg:w-[100px]"
                  src="../../svg/BLUE STAR.svg"
                  alt="Image 1"
                />
                <h2 className="font-LGC whitespace-nowrap text-white sm:text-[34px] md:text-[41px] lg:text-[94px]">
                ‘HELP YOUR TODDLER TALK!’
                </h2>
                <img
                  className="ml-4 sm:h-[35px] sm:w-[37px] md:h-[42px] md:w-[44px] lg:h-[95px] lg:w-[100px]"
                  src="../../svg/GREEN STAR.svg"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>    
   
)
};

export default IntroductionHeader;