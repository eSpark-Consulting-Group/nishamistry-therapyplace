import React from 'react'
// import {  } from 'react';

const ToddlerTalkSection: React.FC = () => {
  const childConcerned = [
    'Might be delayed with their speech',
    'Are not interacting with you',
    'Are not develping as fast as children the same age',
    'Are becoming increasingly frustrated and losing self-confidence beacuse of their communication difficulties?'
  ]
  return (
    <>
    {/* // WEB/TEMPLATE VIEW */}
    <div className="lg:w-[60%]  md:flex flex-col justify-center items-center md:w-[90%] lg:my-4 md:my-10 sm:hidden ">
      {/* first image them content */}
      <div className="flex">
        <div>
          <img
            src="../../img/WEB-CHILD READING@4x.png"
            className=" bg-lightyellow lg:h-[479px] lg:flex lg:w-[571px] md:hidden
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
        <div className=" lg:px-[20px] md:ml-[16px] lg:w-[571px]  md:w-[340px] ">
          <p className="lg:text-[43px] md:text-[24px] 
          lg:leading-[56px] md:leading-[31.66px]">
            Are you worried that your toddler is late to talk?
          </p>
          <p className="uppercase lg:text-[19px] md:text-[12px]
           lg:py-8  md:py-2 font-LGC">
            If you are a parent of a child under 5 and concerned that they:
          </p>
          {childConcerned.map((talk) => (
              <div className=" lg:text-[23px] md:text-[13px]
               lg:w-[571px] relative lg:pl-[36px] md:pl-[20px] lg:leading-[30px] md:leading-[20.35px] font-LGC">
              <img
                src="../../svg/WEB-TICK.svg"
                className="lg:mr-2 lg:w-[25px] md:w-[15px] absolute top-0 left-0"
                alt=""
              />
              {talk}
             
            </div>
            ))}
          <p className='text-center lg:text-[23px] md:text-[15px] font-LGCB lg:my-[8px] md:mt-[16px]'>You're not alone</p>
        </div>
      </div>

  {/* second image them content */}
      <div className='flex md:mt-[40px] lg:mt-[60px] '>
        <div className=' lg:w-[571px] md:w-[330px] lg:px-[6px] md:px-[4px]'>
          <p className='font-LGC lg:text-[20.5px] md:text-[11px] lg:leading-[36px] md:leading-[20.35px]'>It's estimated that 1.7 million children in the UK are struggling with speaking and understanding words.</p>
         <p className='font-LGC  lg:text-[20.5px]  md:text-[11px] lg:leading-[36px] md:leading-[20.35px] md:my-5 lg:my-5'>You just want the best for your child so you're feeling frustrated over the lengthy waitlits of public services but funding private speech therapy isn't an option for your right now.</p>
          <p className='font-LGC  lg:text-[20.5px] md:text-[11px] lg:leading-[36px] md:leading-[20.35px] lg:my-2 md:my-2'>Many parents think their child will outgrow the delay, and wishlist it's possible ,in many situation it's not the case.And the longer you wait,the more significant the impact on your child's developement</p>
          <p className='font-LGCB lg:text-[20.5px] md:text-[12px] text-center lg:mt-5 md:mt-5'>Early intervention is so powerful and now it's super affordable tool</p>
        </div>
        
        <div className="">
          <img
            src="../../img/WEB-HUGGING CHILD@2x.png"
            className="lg:h-[479px] lg:w-[571px]
            lg:flex  md:hidden"
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
  <div className=" w-[470px] sm:flex flex-col mt-14 md:hidden">
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
      <p className="text-[37px]  text-primary
      leading-[48.67px]">
        Are you worried that your toddler is late to talk?
      </p>
      <p className="uppercase text-[17px]  text-primary
       py-5  font-LGC">
        If you are a parent of a child under 5 and concerned that they:
      </p>
      {childConcerned.map((talk) => (
          <div className=" text-[19px] text-primary
           w-[470px] relative pl-[30px] leading-[31.29px] font-LGC">
          <img
            src="../../svg/WEB-TICK.svg"
            className="mr-0 w-[25px] absolute top-1 left-0"
            alt=""
          />
          {talk}
         
        </div>
        ))}
      <p className='text-center text-primary text-[18px] font-LGCB'>You're not alone</p>
    </div>
  </div>

{/* second image them content */}
  <div className='flex-col flex my-2'>
  <div className='my-10
    '>
      <img
        src="../../img/WEB-HUGGING CHILD@2x.png"
        className="h-[400px] w-[470px]"
        alt="child reading"
      />
      
    </div>
    <div className=' w-[500px] text-center '>
      <p className='font-LGC text-[18px] text-primary leading-[31.29px]'>It's estimated that 1.7 million children in the UK are struggling with speaking and understanding words.</p>
     <p className='font-LGC text-[18px] text-primary leading-[31.29px]  py-5'>You just want the best for your child so you're feeling frustrated over the lengthy waitlits of public services but funding private speech therapy isn't an option for you right now.</p>
      <p className='font-LGC text-[18px] text-primary leading-[31.29px]'>Many parents think their child will outgrow the delay, and wishlist it's possible ,in many situation it's not the case.And the longer ypu wait,the more significant the impact on your child's developement</p>
      <p className='font-LGC text-[18px] text-primary  my-2 '>Early intervention is so powerful and now it's super affordable tool</p>
      </div>
    
   
    </div>
</div>
</>
  )
}
export default ToddlerTalkSection
