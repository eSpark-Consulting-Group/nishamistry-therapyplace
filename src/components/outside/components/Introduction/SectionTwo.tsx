import { points2List1, points2List2 } from './constants'

const SectionTwo: React.FC = () => {
  return (
    <div className="sm:w-[90%] md:w-[90%] lg:w-[1184px]">
      <div className="flex justify-between">
        <div className="sm:pt-5 md:pt-10 lg:pt-10">
          <img
            src="../../img/WEB-SITTING@4x.png"
            className="sm:h-[165px] sm:w-[380px] md:h-[200px] md:w-[470px] lg:h-[330px] lg:w-[750px]"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <img
            src="../../img/WEB-BUY IT NOW@4x.png"
            className="sm:h-[30px] sm:w-[200px] md:h-[40px] md:w-[250px] lg:h-[55px] lg:w-[390px]"
            alt=""
          />
          <img
            src="../../img/WEB-NUMBER TWO@4x.png"
            className="sm:mr-1  sm:h-[180px] sm:w-[110px] md:mr-5 md:h-[230px] md:w-[150px] lg:mr-5 lg:h-[350px] lg:w-[200px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-[100%] flex-col items-center justify-center ">
        <div
          className="flex font-LGCB text-primary 
        sm:text-[28px] md:text-[38px] lg:text-[59px]"
        >
          WHAT DOES THE PROGRAMME INCLUDE?
        </div>

        <div className="flex font-LGC uppercase text-primary sm:my-4 sm:w-[88%] sm:text-[16.5px] md:w-[90%] md:text-[20px] lg:my-8 lg:w-[94%] lg:text-[35px]">
          instant and life time access 6 x video tutorials which focus on
          specific startegies
        </div>
      </div>

      {points2List1.map((point) => (
        <div className=" flex flex-row">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="ml-3 sm:my-1.5 sm:mr-1.5 sm:h-[11px]  sm:w-[12px] md:my-2 md:mr-2  md:h-[14px] md:w-[14px] lg:my-4 lg:mr-2.5 lg:ml-0  lg:h-[24px] lg:w-[25px]"
          />
          <div className="font-LGC text-[34px] text-primary sm:text-[17px] md:text-[20px] lg:text-[36px]">
            {point}
          </div>
        </div>
      ))}

      {points2List2.map((point) => (
        <div className="flex flex-row sm:my-4 lg:my-8">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="mr-2 ml-3 sm:my-1.5  sm:h-[11px] sm:w-[12px] md:my-2  md:h-[14px] md:w-[14px] lg:my-4 lg:mr-3.5 lg:ml-0  lg:h-[24px] lg:w-[25px]"
          />
          <div className="font-LGC text-[34px] text-primary sm:text-[17px] md:text-[20px] lg:text-[36px]">
            {point}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionTwo
