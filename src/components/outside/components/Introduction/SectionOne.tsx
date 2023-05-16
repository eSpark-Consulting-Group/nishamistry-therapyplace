import { points } from './constants'

const SectionOne: React.FC = () => {
  return (
    <div className="sm:w-[90%] md:w-[90%] lg:w-[1184px]">
      {/* section 1  */}

      <div className="flex flex-row justify-between">
        <img
          src="../../img/WEB-NISHA NOTEPAD@4x.png"
          className="sm:h-[577px] sm:w-[266px] md:h-[699px] md:w-[322px] lg:h-[1221px] lg:w-[563px]"
          alt=""
        />
        <div className="flex flex-col items-end">
          <div className="sm:h-[434px] sm:w-[266px] md:h-[534px] md:w-[322px] lg:h-[932px] lg:w-[563px]">
            <img
              src="../../img/WEB-BOX DESIGN@4x.png"
              className="absolute  sm:h-[434px] sm:w-[266px] md:h-[534px] md:w-[322px] lg:h-[932px] lg:w-[563px]"
              alt=""
            />
            <div className="relative w-[90%] sm:py-6 sm:px-4 md:py-8 md:px-4 lg:py-14 lg:px-8">
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
            className="sm:mr-10  sm:h-[170px] sm:w-[95px] md:mr-10 md:h-[200px] md:w-[120px] lg:mr-16 lg:h-[350px] lg:w-[200px]"
            alt=""
          />
        </div>
      </div>

      <div
        className="flex justify-end font-LGCB text-primary 
        sm:text-[28px] md:text-[38px] lg:text-[59px]"
      >
        WHAT YOU WILL LEARN
      </div>

      <div className="flex justify-end font-LGC uppercase text-primary sm:my-4 sm:text-[16.5px] md:text-[20px] lg:my-8 lg:text-[35px]">
        in this self-paced online parent coaching programme you will:
      </div>

      <div className="flex flex-col font-LGCB text-primary sm:my-4 lg:my-8">
        <div className="relative flex items-center pl-8  font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Learn exactly how to boost your child's speech and language
        </div>
        <div className="pl-8 font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          development with simple strategies that you can implement at home
        </div>
      </div>

      <div className="flex flex-col font-LGCB text-primary sm:my-4 lg:my-8">
        <div className="relative flex items-center pl-8 font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Change the trajectory of your little one's speech development so they
        </div>
        <div className="w-[90%] pl-8  font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          have the best chance possible for learning reading writing and
          social-emotional development.
        </div>
      </div>

      <div className="flex flex-col font-LGCB  text-primary sm:my-4 lg:my-8">
        <div className="relative flex items-center pl-8 font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] sm:text-[17px] md:h-[14px] md:w-[14px] md:text-[20px] lg:h-[24px] lg:w-[25px] lg:text-[36px]"
          />
          Give your child the head start they deserve because the earlier you
        </div>
        <div className="w-[90%]  pl-8 font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          start implementing these strategies the less support they'll need in
          the future!
        </div>
      </div>

      <div className="flex flex-col font-LGCB text-primary sm:my-4 lg:my-8">
        <div className="relative flex  items-center pl-8 font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0  sm:h-[11px] sm:w-[12px] sm:text-[17px] md:h-[14px] md:w-[14px] md:text-[20px] lg:h-[24px] lg:w-[25px] lg:text-[36px]"
          />
          Feel empowered as you watch your child's confidence grow!
        </div>
      </div>

      {/* section 2 */}

      <div className="flex justify-end text-right font-LGCB text-primary sm:text-[28px] md:text-[34px] lg:text-[59px]">
        WHAT DOES THE PROGRAMME INCLUDE?
      </div>

      <div className="flex justify-end pl-8 font-LGC uppercase text-primary sm:my-4 sm:text-[17px] md:text-[20px] lg:my-8 lg:text-[36px]">
        INSTANT AND LIFETIME ACCESS TO 6 X VIDEO TUTORIALS WHICH FOCUS ON
        SPECIFIC STRATEGIES
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Watch, wait and follow
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Developing Joint Attention
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Commenting
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Expanding language
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Encouraging sounds
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Simple strategies that you can replay as many times as you need to.
        </div>
      </div>

      <div className="my-8 flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Downloadable checklists to map out both yours and your child's
        </div>
        <div className="w-[90%] pl-8  font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          communuication skills to help you monitor progress.
        </div>
      </div>

      <div className="my-8 flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/ORANGE STAR.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Downloadable handouts with activity-specific tips and strategies to
        </div>
        <div className="w-[90%] pl-8  font-LGC text-[34px] sm:text-[17px] md:text-[20px] lg:text-[36px]">
          guide you through the process.
        </div>
      </div>

      {/* Section three */}

      <div className="flex justify-end text-right font-LGCB text-primary sm:text-[28px] md:text-[34px] lg:text-[59px]">
        WHO IS IT FOR?
      </div>

      <div className="flex justify-end pl-8 font-LGC uppercase text-primary sm:my-4 sm:text-[17px] md:text-[20px] lg:my-8 lg:text-[38px]">
        This programme is for you if you'r a parent of a child aged 4 and under
        who:
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Is late to talk
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Has delayed speech in comparison to children of the same age
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Says words but they are very unclear
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Don't seem to show interest in play or interaction with you
        </div>
      </div>

      <div className="flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          <img
            src="../../svg/WEB-TICK.svg"
            alt="Image"
            className="absolute left-0 sm:h-[11px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[24px] lg:w-[25px]"
          />
          Don't turn to their name
        </div>
      </div>

      <div className="my-8 flex flex-col font-LGC text-[30px] text-primary">
        <div className="relative flex items-center pl-8 font-LGC sm:text-[17px] md:text-[20px] lg:text-[36px]">
          If you relate to one or more of these points, then this programme is
          for you!
        </div>
      </div>
    </div>
  )
}

export default SectionOne
