import { points2List1, points2List2, points3List } from './constants'

const SectionThree: React.FC = () => {
  return (
    <div className="sm:w-[90%] md:w-[90%] lg:w-[1184px]">
      <div className="flex justify-between">
        <div className="sm:pt-5 md:pt-10 lg:pt-10">
          <img
            src="../../img/WEB-HOORAY@4x.png"
            className="sm:h-[170px] sm:w-[370px] md:h-[220px] md:w-[480px] lg:h-[380px] lg:w-[790px]"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <img
            src="../../img/WEB-BUY IT NOW@4x.png"
            className="sm:h-[30px] sm:w-[200px] md:h-[40px] md:w-[250px] lg:h-[60px] lg:w-[390px]"
            alt=""
          />
          <img
            src="../../img/WEB-NUMBER 3@4x.png"
            className="sm:mr-1  sm:h-[180px] sm:w-[110px] md:mr-5 md:h-[230px] md:w-[150px] lg:mr-5 lg:h-[420px] lg:w-[260px]"
            alt=""
          />
        </div>
      </div>

      <div
        className="flex justify-end font-LGCB uppercase text-primary 
        sm:text-[28px] md:text-[34px] lg:text-[59px]"
      >
        who is it for?
      </div>

      <div className="flex w-[100%] flex-col items-center justify-center ">
        <div className="flex font-LGC uppercase text-primary sm:my-4 sm:w-[88%] sm:text-[17px] md:w-[90%] md:text-[21px] lg:my-8 lg:w-[94%] lg:text-[37px]">
          this programme is for you if you're a parent of a child aged 4 and
          under who:
        </div>
      </div>

      {points3List.map((point) => (
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

      <div className="flex w-[100%] flex-col items-center justify-center ">
        <div className="flex font-LGC  text-primary sm:my-4 sm:w-[88%] sm:text-[16.5px] md:w-[90%] md:text-[20px] lg:my-8 lg:w-[94%] lg:text-[35px]">
          If you relate to one or more of these points, then this programme is
          for you!
        </div>
      </div>
    </div>
  )
}

export default SectionThree
