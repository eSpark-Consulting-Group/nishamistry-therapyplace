
const HeroSection: React.FC = () => {
    return (
<div> 
{/* <div className="flex flex-col items-center justify-center bg-white"> */}
  <div
    className=" 
bg-[#D0CC83]
sm:h-[819px] sm:w-[741px] md:h-[396px] md:w-[769px] lg:h-[569px] lg:w-[1920px]"
  >
    <div
      className="max-w-1xl 
relative
mx-auto"
    >
      <div
        className="relative flex 
flex-col
items-center
justify-center
lg:flex-row 
lg:items-start"
      >
        <div
          className="w-80% sm:w-40% md:w-52%
lg:w-36.7% absolute
top-0
left-0
h-full"
        >
          <img
            className="h-full w-full
object-cover"
            src="../../img/tablet-header@4x.png"
            alt="lady with laptop"
          />
        </div>
        <div
          className="w-60% 
z-10 
py-20 text-right"
        >
          <h1
            className="height:12rem font-Louis George Caf font-bold text-[#23254E] sm:text-[37px] md:text-[45px] lg:text-[118px]
"
          >
            Help your toddler talk!
          </h1>
          <h3 className="font-Myraid Pro text-white sm:text-[30px] md:text-[20px] lg:text-[118px]">
            Unlock your child's communication potential!
          </h3>
          <h4 className="ext-lg font-Myriad Pro text-[23254E] sm:text-[30px] md:text-[18px] lg:text-[53px]">
            A set of 6 pre-recorded tutorials to learn how you can help
            your child speak.
          </h4>
          <div
            className="content-start bg-[#23254E] 
px-6
py-2
sm:h-[37px]
sm:w-[239px]
md:h-[37px]
md:w-[230px]
lg:h-[73px]
lg:w-[451px]
"
          >
            <button
              className="
font-Louis George Caf 
px-5
py-1 
text-[34px] text-white
"
            >
              BUY IT NOW
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  </div>

//   </div>
//   </div>
    )
};


export default HeroSection;