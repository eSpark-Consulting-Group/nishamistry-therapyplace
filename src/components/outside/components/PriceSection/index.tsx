import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GREEN_STAR from "../../../../../public/svg/GREEN STAR.svg";
import ORANGE_STAR from "../../../../../public/svg/ORANGE STAR.svg";
import NAVY_STAR from "../../../../../public/svg/NAVY STAR.svg";
import Image from "next/image";

const PriceSection: React.FC = () => {
  return (
    <div>
    <div className='lg:w-[1924px]
     lg:h-[144px] md:w-[824px] 
      md:h-[61px] sm:w-[695px] sm:h-[51px] bg-mint 
       md:w-[611px]  my-4 flex flex-col items-center justify-center '>
   <div className="relative py-5 max-w-100 ">
   {/* Green star */}
   <div className="absolute top-[-20px] 
   right-[40px] 
    rotate-45	">
    <img src="../../svg/GREEN_STAR.svg"  alt="green star" className="h-30" />
   </div>
   {/* Green str two */}
   <div className="absolute bottom-[-20px] 
   left-[50px]  rotate--40	">
    <img src="../../svg/GREEN_STAR.svg"  alt="green star" className="h-30" />
   </div>
   <div className="absolute sm:top-[-30px]
    lg:top-[5px]
     left-[0px] rotate-45	">
    <img src="../../svg/ORANGE_STAR.svg"  alt="orange star" className="h-50" />
   </div>
   <div className="absolute bottom-[-30px] right-[0] ">
    <img src="../../svg/NAVY_STAR.svg"  alt="navy star" className="h-50" />
   </div>
   <h4 className="text-primary lg:text-[50px] md:text-[21px] sm:text-[17px] text-center font-semibold uppercase font-LGC "> All of this for the half the price of a single therapy session!</h4>
   </div>
    </div>
    <div className="max-w-md my-6">
      <div className="space-5 text-center">
     {/* <div className="p-6 flex justify-center items-center rounded-"> */}
        {/* </div>   */}
        <div className="  lg:w-[1500px] lg:h-[80px] bg-no-repeat "   style={{ 
      backgroundImage: `url("../../svg/WEB-ORANGE BUTTON.svg")` ,

    }} > 
    <h5 className="font-LGCB text-white lg:text-[36px] md:text-[15px] sm:text-[12px] "> LIMITED INTRODUCTORY OFFER!!</h5>
      </div>

    </div>
    </div>
    </div>
    // <Box>
    //   <Box
    //     sx={{
    //       backgroundColor: "#CBDBD8",
    //     }}
    //   >
    //     <Container
    //       maxWidth="lg"
    //       component="div"
    //       sx={{
    //         position: "relative",
    //         py: 5,
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: -20,
    //           right: 40,
    //           transform: "rotate(45deg)",
    //         }}
    //       >
    //         <Image src={GREEN_STAR} alt="green star" height={30} />
    //       </Box>
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           bottom: -20,
    //           left: 50,

    //           transform: "rotate(-40deg)",
    //         }}
    //       >
    //         <Image src={GREEN_STAR} alt="green star" height={30} />
    //       </Box>

    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: {
    //             xs: -30,
    //             lg: 5,
    //           },
    //           left: 0,
    //           transform: "rotate(45deg)",
    //         }}
    //       >
    //         <Image src={ORANGE_STAR} alt="orange star" height={50} />
    //       </Box>
    //       <Box sx={{ position: "absolute", bottom: -30, right: 0 }}>
    //         <Image src={NAVY_STAR} alt="navy star" height={50} />
    //       </Box>

    //       <Typography
    //         variant="h4"
    //         color="primary"
    //         align="center"
    //         fontWeight={600}
    //         sx={{
    //           textTransform: "uppercase",
    //           fontSize: {
    //             xs: "20px",
    //             md: "35px",
    //             lg: "45px",
    //           }
    //         }}
    //         className="font-LGCB"
    //       >
    //         All of this for the half the price of a single therapy session!
    //       </Typography>
    //     </Container>
    //   </Box>

    //   <Container
    //     maxWidth="md"
    //     component="div"
    //     sx={{
    //       my: 6,
    //     }}
    //   >
    //     <Stack spacing={5} alignItems="center">
    //       <Box
    //         sx={{
    //           p: 6,
    //           px: { xs: 6, md: 6, lg: 10 },
    //           mx: { xs: 2 },
    //           mr: { xs: 3 },
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           flexDirection: "column",
    //           backgroundColor: "#CD7F59",
    //           borderRadius: "200px",
    //           maxWidth: "600px",
    //           boxShadow: `10px 12px 0px 0px rgba(163, 94, 65, 1)`,
    //         }}
    //       >
    //         <Typography
    //           color="White"
    //           sx={{
    //             textTransform: "uppercase",
    //             fontSize: {
    //               xs: 14,
    //               md: 20,
    //               lg: 28,
    //             }
    //           }}
    //           fontWeight={500}
    //           className="font-LGC"
    //         >
    //           LIMITED INTRODUCTORY OFFER!!
    //         </Typography>
    //         <Typography
    //           color="primary"
    //           fontWeight={600}
    //           textAlign={"center"}
    //           sx={{
    //             textTransform: "uppercase",
    //             fontSize: {
    //               xs: 18,
    //               md: 24,
    //               lg: 32,
    //             }
    //           }}
    //           className="font-LGCB"
    //         >
    //           ACCESS TO THE FULL PROGRAMME
    //         </Typography>

    //         <Typography
    //           sx={{
    //             color: "#D0CC83",
    //             fontSize: {
    //               xs: 18,
    //               md: 24,
    //               lg: 32,
    //             }
    //           }}
    //           fontWeight={600}
    //           className="font-LGCB"
    //         >
    //           (
    //           <Typography
    //             sx={{
    //               color: "#D0CC83",
    //               fontSize: {
    //                 xs: 18,
    //                 md: 24,
    //                 lg: 32,
    //               },
    //               textDecoration: "line-through",
    //             }}
    //             fontWeight={600}
    //             component="span"
    //             className="font-LGCB"
    //           >
    //             £89.99
    //           </Typography>
    //           ) £49.99
    //         </Typography>
    //       </Box>

    //       <Button
    //         variant="contained"
    //         size="large"
    //         color="primary"
    //         sx={{
    //           px: 10,
    //           py: 1,
    //           mt: 3,
    //         }}
    //         style={{ backgroundColor: "#23254E" }}
    //       >
    //         <Typography
    //           variant="h4"
    //           sx={{
    //             textTransform: "uppercase",
    //             fontWeight: 400,
    //             fontSize: {
    //               xs: "16px",
    //               md: "18px",
    //               lg: "24px",
    //             }
    //           }}
    //           className="font-LGC"
    //         >
    //           Buy it Now
    //         </Typography>
    //       </Button>
    //     </Stack>
    //   </Container>
    // </Box>
   
  );
};

export default PriceSection;
