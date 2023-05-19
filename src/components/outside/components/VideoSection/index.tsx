import React from 'react'

const VideoSection: React.FC = () => {
  const points = [
    'Might be delayed with their speech',
    'Are not interacting with you',
    'Are not developing as fast as children the same age',
    'Are becoming increasingly frustrated and losing self-confidence because of their communication difficulties?',
  ]

  const points1List = [
    "It's estimated that 1.7 million children in the UK are struggling with speaking and understanding words.",
    "You just want the best for your child so you're feeling frustrated over the lengthy waitlists of public services but funding private speech therapy isn't an option for you right now.",
    "Many parents think their child will outgrow the delay, and whilst it's possible, in many situations it's not the case. And the longer you wait, the more significant the impact on your child's development.",
  ]

  return (
    <div
      className="relative flex  flex-col items-center justify-center 
    sm:mt-8 sm:w-[560px] sm:pb-[100px] 
    md:mt-16 md:w-[611px] md:pb-[100px] lg:mt-6 lg:w-[1184px] lg:pb-[150px]"
    >
      {/* video monitor */}
      <div className=" relative flex flex-col items-center justify-center rounded-[67px] bg-mint  sm:h-[399px] sm:w-[560px] md:h-[435px] md:w-[611px] lg:h-[842px]  lg:w-[1184px]  ">
        <img
          className=" object-cover sm:h-[347px] sm:w-[492px] md:h-auto md:w-[537px] lg:h-auto lg:w-[1000px]  "
          src="/img/Monitor_Image.png"
          alt="video"
        />
        <video
          className="absolute
             object-cover 
              sm:top-[45px]
               sm:h-[210px] 
               sm:w-[390px] 
               md:top-[50px] 
               md:h-[225px]
                md:w-[430px]
                 lg:top-[110px] 
                 lg:h-[410px] 
                 lg:w-[800px] "
          src="../../assets/video/Intro-for-sales-page-.mp4"
          controls
        >
          {' '}
          Your browser does not support the video tag.{' '}
        </video>
      </div>

      {/* help yor toddle btn */}
      <div
        className="absolute 
        flex
         items-center
          justify-center 
        sm:bottom-[38px] sm:h-[83px] sm:w-[220px] 
          md:bottom-[37px] 
          md:h-[90px] 
          md:w-[240px]
           lg:bottom-[35px] lg:h-[175px]
           lg:w-[500px]
           "
      >
        <img
          className="absolute 
          sm:h-[83px] sm:w-[220px]
          md:h-[90px] md:w-[240px]
          lg:h-[175px] lg:w-[466px]

           "
          src="../../svg/WEB-BUTTON.svg"
          alt="WEB-BUTTON"
        />
        <div
          className="
        z-[1] 
        flex  flex-col	
         items-center justify-center "
        >
          <span
            className=" font-LGCB
         uppercase text-white	sm:text-[7px]	
          md:text-[8px] 
          lg:text-[16px]
         
          "
          >
            GET FULL ACCESS TO:
          </span>
          <span
            className="font-LGC
        uppercase 
         text-primary
         sm:text-[15px]
         sm:leading-[24.36px]
         md:text-[16px]	
         	 md:leading-[30px]
            lg:text-[32px] lg:leading-[35px]"
          >
            ‘HELP YOUR TODDLER TALK!’
          </span>
          <span
            className="
        p-0 font-LGC 
        text-lightOrange
        sm:text-[18px]
        sm:leading-[15px]
         md:text-[19px]
        md:leading-[10px]
         lg:text-[38px] lg:leading-[38px]"
          >
            £89.99
          </span>
          <button
            className=" bg-primary
         font-LGC 
         text-white sm:mt-[4px] sm:h-[16px]
       sm:w-[100px]
       sm:text-[7px]
        md:mt-[5px]
        md:h-[17px]
         md:w-[109px]
         md:text-[9px]
             lg:h-[34px]
             lg:w-[212px]
             lg:text-[16px]"
          >
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  )
}
export default VideoSection
