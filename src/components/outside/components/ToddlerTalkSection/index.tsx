import React from 'react'
// import {  } from 'react';

const ToddlerTalkSection: React.FC = () => {
  const childConcerned = [
    'Might be delayed with their speech',
    'Are not interacting with you',
    'Are not developing as fast as children the same age',
    'Are becoming increasingly frustrated and losing self-confidence because of their communication difficulties?',
  ]
  return (
    <>
      {/* // WEB/TEMPLATE VIEW */}
      <div className="flex-col items-center justify-center sm:hidden md:my-10 md:flex md:w-[90%] lg:my-4 lg:w-[60%]">
        {/* first image them content */}
        <div className="flex">
          <div>
            <img
              src="../../img/WEB-CHILD READING@4x.png"
              className=" bg-lightyellow md:hidden lg:flex lg:h-[479px] lg:w-[571px]
            "
              alt="child reading"
            />
            <img
              src="../../img/WEB-CHILD READING@3x.png"
              className="h-[280px] w-[330px]
            md:flex 
            lg:hidden"
              alt="child reading1"
            />
          </div>
          <div className=" md:ml-[16px] md:w-[340px] lg:w-[571px]  lg:px-[20px] ">
            <p
              className="font-LGC text-primary md:text-[24px]  md:leading-[31.66px]
          lg:text-[43px] lg:leading-[56px]"
            >
              Are you worried that your toddler is late to talk?
            </p>
            <p
              className="font-LGC uppercase text-primary
           md:py-2  md:text-[12px] lg:py-8 lg:text-[19px]"
            >
              If you are a parent of a child under 5 and concerned that they:
            </p>
            {childConcerned.map((talk) => (
              <div
                className=" relative font-LGC text-primary
               md:pl-[20px] md:text-[13px] md:leading-[20.35px] lg:w-[571px] lg:pl-[36px] lg:text-[23px] lg:leading-[36px]"
              >
                <img
                  src="../../svg/WEB-TICK.svg"
                  className="absolute left-0 md:top-0.5 md:w-[15px] lg:top-1.5 lg:mr-2 lg:w-[25px]"
                  alt=""
                />
                {talk}
              </div>
            ))}
            <p className="text-center font-LGCB md:mt-[16px] md:text-[15px] lg:my-[8px] lg:text-[23px]">
              You're not alone
            </p>
          </div>
        </div>

        {/* second image them content */}
        <div className="flex md:mt-[40px] lg:mt-[60px] ">
          <div className=" md:w-[330px] md:px-[4px] lg:w-[571px] lg:px-[6px]">
            <p className="font-LGC text-primary md:text-[11px] md:leading-[20.35px] lg:text-[21px] lg:leading-[36px]">
              It's estimated that 1.7 million children in the UK are struggling
              with speaking and understanding words.
            </p>
            <p className="font-LGC text-primary md:my-5  md:text-[11px] md:leading-[20.35px] lg:my-5 lg:text-[21px] lg:leading-[36px]">
              You just want the best for your child so you're feeling frustrated
              over the lengthy waitlists of public services but funding private
              speech therapy isn't an option for you right now.
            </p>
            <p className="font-LGC text-primary md:my-2 md:text-[11px] md:leading-[20.35px] lg:my-2 lg:text-[21px] lg:leading-[36px]">
              Many parents think their child will outgrow the delay, and
              wishlist it's possible, in many situation it's not the case.And
              the longer you wait, the more significant the impact on your
              child's developement.
            </p>
            <p className="text-center font-LGCB text-primary md:mt-5 md:text-[12px] lg:mt-5 lg:text-[21px]">
              Early intervention is so powerful and now it's super affordable
              too!
            </p>
          </div>

          <div className="">
            <img
              src="../../img/WEB-HUGGING CHILD@2x.png"
              className="md:hidden lg:flex
            lg:h-[479px]  lg:w-[571px]"
              alt="child reading"
            />
            <img
              src="../../img/WEB-HUGGING CHILD@2x.png"
              className="h-[280px] w-[330px] md:flex 
            lg:hidden"
              alt="child reading1"
            />
          </div>
        </div>
      </div>

      {/* //For Mobile */}
      <div className=" mt-14 w-[470px] flex-col sm:flex md:hidden">
        {/* first image them content */}
        <div className=" flex flex-col">
          <div>
            <img
              src="../../img/WEB-CHILD READING@2x.png"
              className="h-[400px] w-[470px]
        "
              alt="child reading"
            />
          </div>
          <div className=" my-5">
            <p
              className="font-LGC  text-[37px] leading-[48.67px]
      text-primary"
            >
              Are you worried that your toddler is late to talk?
            </p>
            <p
              className="py-5 font-LGC  text-[17px]
       uppercase  text-primary"
            >
              If you are a parent of a child under 5 and concerned that they:
            </p>
            {childConcerned.map((talk) => (
              <div
                className=" relative w-[470px]
           pl-[30px] font-LGC text-[19px] leading-[31.29px] text-primary"
              >
                <img
                  src="../../svg/WEB-TICK.svg"
                  className="absolute top-1 left-0 mr-0 w-[25px]"
                  alt=""
                />
                {talk}
              </div>
            ))}
            <p className="text-center font-LGCB text-[18px] text-primary">
              You're not alone
            </p>
          </div>
        </div>

        {/* second image them content */}
        <div className="my-2 flex flex-col">
          <div
            className="my-10
    "
          >
            <img
              src="../../img/WEB-HUGGING CHILD@2x.png"
              className="h-[400px] w-[470px]"
              alt="child reading"
            />
          </div>
          <div className=" w-[500px] text-center ">
            <p className="font-LGC text-[18px] leading-[31.29px] text-primary">
              It's estimated that 1.7 million children in the UK are struggling
              with speaking and understanding words.
            </p>
            <p className="py-5 font-LGC text-[18px] leading-[31.29px]  text-primary">
              You just want the best for your child so you're feeling frustrated
              over the lengthy waitlists of public services but funding private
              speech therapy isn't an option for you right now.
            </p>
            <p className="font-LGC text-[18px] leading-[31.29px] text-primary">
              Many parents think their child will outgrow the delay, and
              wishlist it's possible, in many situation it's not the case.And
              the longer ypu wait,the more significant the impact on your
              child's developement.
            </p>
            <p className="my-2 font-LGC text-[18px]  text-primary ">
              Early intervention is so powerful and now it's super affordable
              too!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ToddlerTalkSection
