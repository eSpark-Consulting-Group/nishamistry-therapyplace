import { points, points1List } from './constants'

const SectionOne: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:mt-2 sm:w-[90%] md:mt-10 md:w-[90%] lg:mt-4 lg:w-[1184px]">
      <div className="flex flex-row justify-between sm:w-[100%] md:w-[100%] lg:w-[1244px]">
        <img
          src="../../img/WEB-NISHA NOTEPAD@4x.png"
          className="sm:h-[577px] sm:w-[290px] md:h-[699px] md:w-[350px] lg:h-[1221px] lg:w-[623px]"
          alt=""
        />
        <div className="flex flex-col items-end">
          <div className="sm:h-[434px] sm:w-[266px] md:h-[534px] md:w-[322px] lg:h-[932px] lg:w-[563px]">
            <img
              src="../../img/WEB-BOX DESIGN@4x.png"
              className="absolute  sm:h-[434px] sm:w-[266px] md:h-[534px] md:w-[322px] lg:h-[932px] lg:w-[623px]"
              alt=""
            />
            <div className="relative w-[90%] sm:py-6 sm:px-4 md:py-8 md:px-4 lg:w-[100%] lg:py-14 lg:px-8">
              <div className="font-LGC text-lightyellow sm:text-[12px] sm:leading-[16.04px] md:text-[15px] md:leading-[19.41px] lg:text-[26px] lg:leading-[33.89px]">
                I'M NISHA, A SPEECH AND LANGUAGE THERAPIST
              </div>
              <div className="font-LGC text-white sm:my-3 sm:text-[12px] sm:leading-[16.04px] md:my-4 md:text-[15px] md:leading-[19.41px] lg:my-6 lg:text-[26px] lg:leading-[33.89px]">
                I've used all my experience and knowledge to create this program
                for you. but why?
              </div>
              {points.map((point) => (
                <div className="font-LGC text-white sm:my-3 sm:text-[12px] sm:leading-[16.04px] md:my-4 md:text-[15px] md:leading-[19.41px] lg:my-6 lg:text-[26px] lg:leading-[33.89px]">
                  <img
                    src="../../svg/ORANGE STAR.svg"
                    alt="Image"
                    className="float-left my-[2px] sm:mr-0.5 sm:h-[11px] sm:w-[12px]  md:mr-1 md:h-[14px] md:w-[14px] lg:mr-2 lg:h-[24px] lg:w-[25px]"
                  />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <img
            src="../../img/WEB-NUMBER 1@4x.png"
            className="sm:mr-8  sm:h-[180px] sm:w-[110px] md:mr-8 md:h-[230px] md:w-[150px] lg:mr-10 lg:h-[350px] lg:w-[200px]"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div
          className="flex justify-end font-LGCB text-primary 
        sm:text-[28px] md:text-[38px] lg:text-[59px]"
        >
          WHAT YOU WILL LEARN
        </div>

        <div className="flex justify-end font-LGC uppercase text-primary sm:my-4 sm:text-[16.5px] md:text-[20px] lg:my-8 lg:text-[35px]">
          in this self-paced online parent coaching programme you will:
        </div>
        {points1List.map((point) => (
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
    </div>
  )
}

export default SectionOne
