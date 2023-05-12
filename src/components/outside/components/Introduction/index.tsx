import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BLUE_STAR from "../../../../../public/svg/BLUE STAR.svg";
import GREEN_STAR from "../../../../../public/svg/GREEN STAR.svg";
import ORANGE_STAR from "../../../../../public/svg/ORANGE STAR.svg";
import CHECK_MARK from "../../../../../public/svg/WEB-TICK.svg";
import TWO_BOXES from "../../../../../public/svg/Two_Boxes.svg";
import NISHA_NOTEPAD from "../../../../../public/img/WEB-NISHA NOTEPAD@4x.png";
import SITTING from "../../../../../public/img/WEB-SITTING@4x.png";
import HOORAY from "../../../../../public/img/WEB-HOORAY@4x.png";

const Introduction: React.FC = () => {
  const points = [
    "I'm tired of seeing parents frustrated with ever-growing wait lists; you can start making a difference immediately to support your child, there is no benefit in waiting.",
    "I've seen first-hand that strategies implemented at home by family members in natural settings are much more effective and have a longer lasting impact than therapy sessions.",
    "I wanted to provide a cost-effective option for parents who may struggle to finance £90 a session for the private therapy. This programme covers the equivalent information from 4-6 therapy sessions if not more!",
  ];

  const points1List = [
    "Learn exactly how to boost your child's speech and language development with simple strategies that you can implement at home.",
    "Change the trajectory of your little one's speech development so they have the best chance possible for learning, reading, writing and social-emotional development.",
    "Give your child the head start they deserve because the earlier you start implementing these strategies, the less support they'll need in the future!",
    "Feel empowered as you watch your child's confidence grow!",
  ];

  const points2List1 = [
    "Watch, wait and follow",
    "Developing joint attention",
    "Commenting",
    "Expanding language",
    "Creating opportunities",
    "Encouraging sounds",
    "Simple strategies that you can replay as many times as you need to.",
  ];

  const points2List2 = [
    "Downloadable checklists to map out both yours and your child's communication skills to help you monitor progress.",
    "Downloadable handouts with activity-specific tips and strategies to guide you through the process.",
  ];

  const points3List = [
    "has delayed speech in comparison to children of the same age ",
    "says words but they are very unclear",
    "doesn't seem to show interest in play or interaction with you.",
    "doesn't show interest in playing with other children",
    "doesn't turn to their name",
  ];

  return (
    <div className='flex flex-col justify-center items-center mb-7'>
  <div className='py-5 w-100 bg-lightOrange2'>
{/* <h3>hello</h3> */}
  </div>
    </div>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     mb: 7,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       py: 5,
    //       width: "100%",
    //       backgroundColor: "#CD7F59",
    //     }}
    //   >
    //     <Container maxWidth="lg" component="div">
    //       <Typography
    //         variant="h4"
    //         color="primary"
    //         align="center"
    //         fontWeight={600}
    //         gutterBottom
    //         sx={{
    //           textTransform: "uppercase",
    //         }}
    //         className="font-LGCB"
    //       >
    //         Introducing:
    //       </Typography>

    //       <Stack
    //         direction="row"
    //         spacing={2}
    //         justifyContent="center"
    //         sx={{
    //           "& > img": {
    //             width: {
    //               xs: "30px",
    //               md: "40px",
    //               lg: "50px",
    //             },
    //             height: {
    //               xs: "30px",
    //               md: "40px",
    //               lg: "50px",
    //             },
    //           },
    //         }}
    //       >
    //         <Image src={BLUE_STAR} alt="blue start" />
    //         <Typography
    //           variant="h2"
    //           fontWeight={400}
    //           color="white"
    //           sx={{
    //             textTransform: "uppercase",
    //             letterSpacing: 1,
    //             textAlign: "center",
    //             fontSize: {
    //               xs: "30px",
    //               md: "40px",
    //               lg: "50px",
    //             },
    //           }}
    //           className="font-LGCB"
    //         >
    //           {"\‘Help your toddler talk!\’"}
    //         </Typography>
    //         <Image src={GREEN_STAR} alt="GREEN start" />
    //       </Stack>
    //     </Container>
    //   </Box>

    //   <Container
    //     maxWidth="md"
    //     component="div"
    //     sx={{
    //       my: 6,
    //     }}
    //   >
    //     <Grid
    //       container
    //       spacing={{
    //         xs: 2,
    //         md: 4,
    //       }}
    //     >
    //       <Grid item xs={12} sm={6}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             justifyContent: "center",
    //             position: "relative",
    //             "& > img": {
    //               width: "100%",
    //               height: "100%",
    //               objectFit: "cover",
    //             },
    //           }}
    //         >
    //           <Image src={NISHA_NOTEPAD} alt="Nisha with notepad" />
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} sm={6}>
    //         <Stack
    //           sx={{
    //             height: "100%",
    //           }}
    //         >
    //           <Stack
    //             justifyContent="space-between"
    //             sx={{
    //               width: {
    //                 xs: "95%",
    //                 md: "90%",
    //               },
    //               position: "relative",
    //             }}
    //           >
    //             <Stack
    //               spacing={{
    //                 xs: 1,
    //                 md: 2,
    //               }}
    //               sx={{
    //                 backgroundColor: "primary.main",
    //                 px: {
    //                   xs: 1,
    //                   md: 4,
    //                   lg: 5,
    //                 },
    //                 py: {
    //                   xs: 3,
    //                   md: 4,
    //                   lg: 6,
    //                 },
    //                 borderRadius: {
    //                   xs: "40px",
    //                   md: "70px",
    //                 },
    //                 position: "relative",
    //               }}
    //             >
    //               <Box
    //                 sx={{
    //                   position: "absolute",
    //                   zIndex: -1,
    //                   right: "-10%",
    //                   bottom: "10%",
    //                   "& > img": {
    //                     width: {
    //                       xs: "40px",
    //                       md: "60px",
    //                       lg: "80px",
    //                     },
    //                     height: {
    //                       xs: "80px",
    //                       md: "100px",
    //                       lg: "120px",
    //                     },
    //                     objectFit: "cover",
    //                   },
    //                 }}
    //               >
    //                 <Image src={TWO_BOXES} alt="check" />
    //               </Box>
    //               <Typography
    //                 variant="body1"
    //                 fontWeight={500}
    //                 sx={{
    //                   textTransform: "uppercase",
    //                   color: "#D0CC83",
    //                   fontSize: {
    //                     xs: "12px",
    //                     md: "15px",
    //                   },
    //                 }}
    //                 className="font-LGCB"
    //               >
    //                 {`I'M NISHA, A SPEECH AND LANGUAGE THERAPIST`}
    //               </Typography>

    //               <Typography
    //                 variant="body1"
    //                 fontWeight={500}
    //                 color="white"
    //                 sx={{
    //                   fontSize: {
    //                     xs: "12px",
    //                     md: "15px",
    //                   },
    //                 }}
    //                 className="font-LGC"
    //               >
    //                 {`I've used all my experience and knowledge to create this program for you. but why?`}
    //               </Typography>

    //               {points.map((item, index) => (
    //                 <Stack
    //                   key={"point-list2-" + index}
    //                   direction="row"
    //                   spacing={{
    //                     xs: 0.5,
    //                     md: 1,
    //                     lg: 2,
    //                   }}
    //                   alignItems="flex-start"
    //                 >
    //                   <Box
    //                     sx={{
    //                       mt: {
    //                         xs: 0,
    //                         md: 0.5,
    //                       },
    //                       "& > img": {
    //                         height: {
    //                           xs: "12px",
    //                           md: "15px",
    //                         },
    //                       },
    //                     }}
    //                   >
    //                     <Image src={ORANGE_STAR} alt="check" />
    //                   </Box>
    //                   <Typography
    //                     variant="body1"
    //                     fontWeight={500}
    //                     color="white"
    //                     sx={{
    //                       fontSize: {
    //                         xs: "12px",
    //                         md: "15px",
    //                       },
    //                     }}
    //                     className="font-LGC"
    //                   >
    //                     {item}
    //                   </Typography>
    //                 </Stack>
    //               ))}
    //             </Stack>

    //             <Box
    //               sx={{
    //                 position: "relative",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 alignItems: "end",
    //               }}
    //             >
    //               <Box
    //                 sx={{
    //                   position: "absolute",
    //                   top: -10,
    //                   right: "20%",
    //                   height: "100px",
    //                 }}
    //               >
    //                 <Box
    //                   // create a line going upwards from the circle
    //                   sx={{
    //                     transform: "translateX(-50%)",
    //                     width: 2,
    //                     height: "100%",
    //                     backgroundColor: "primary.main",
    //                   }}
    //                 />
    //                 <Box
    //                   // create a circle with primary color and start a line
    //                   // from the circle going downwards
    //                   sx={{
    //                     transform: "translateX(-50%)",
    //                     width: 10,
    //                     height: 10,
    //                     borderRadius: "50%",
    //                     backgroundColor: "primary.main",
    //                   }}
    //                 />
    //               </Box>
    //               <Typography
    //                 variant="h1"
    //                 align="right"
    //                 fontWeight={700}
    //                 color="primary"
    //                 sx={{
    //                   mt: "110px",
    //                   mr: 5,
    //                 }}
    //                 className="font-LGCB"
    //               >
    //                 01
    //               </Typography>
    //             </Box>
    //           </Stack>
    //         </Stack>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Stack
    //           spacing={2}
    //           sx={{
    //             mt: 2,
    //             mb: 6,
    //           }}
    //         >
    //           <Typography
    //             variant="h3"
    //             align="right"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{
    //               textTransform: "uppercase",
    //               width: "90%",
    //             }}
    //             className="font-LGCB"
    //           >
    //             WHAT YOU WILL LEARN
    //           </Typography>
    //           <Typography
    //             variant="h5"
    //             align="center"
    //             fontWeight={500}
    //             color="primary"
    //             sx={{ textTransform: "uppercase" }}
    //             className="font-LGC"
    //           >
    //             IN THIS SELF-PACED ONLINE PARENT COACHING PROGRAMME YOU WILL:
    //           </Typography>

    //           {points1List.map((item, index) => (
    //             <Stack
    //               key={"point-list3-" + index}
    //               direction="row"
    //               spacing={2}
    //               alignItems="flex-start"
    //             >
    //               <Box
    //                 sx={{
    //                   mt: 0.5,
    //                 }}
    //               >
    //                 <Image src={ORANGE_STAR} alt="check" height={18} />
    //               </Box>
    //               <Typography
    //                 variant="h5"
    //                 fontWeight={500}
    //                 color="primary"
    //                 component="p"
    //                 className="font-LGC"
    //               >
    //                 {item}
    //               </Typography>
    //             </Stack>
    //           ))}
    //         </Stack>
    //       </Grid>
    //       <Grid item xs={12} lg={8}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             justifyContent: "center",
    //             position: "relative",
    //             "& > img": {
    //               width: "100%",
    //               height: "100%",
    //               objectFit: "cover",
    //             },
    //           }}
    //         >
    //           <Image src={SITTING} alt="lady sitting with a kid" />
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} lg={4}>
    //         <Stack
    //           justifyContent="space-between"
    //           alignItems="flex-end"
    //           sx={{
    //             height: "100%",
    //             position: "relative",
    //           }}
    //         >
    //           <Button
    //             fullWidth
    //             variant="contained"
    //             size="small"
    //             color="primary"
    //             sx={{
    //               textTransform: "uppercase",
    //             }}
    //             style={{ backgroundColor: "#23254E" }}
    //           >
    //             <Typography variant="h5" fontWeight={400} className="font-LGC">
    //               Buy it Now
    //             </Typography>
    //           </Button>

    //           <Box
    //             sx={{
    //               position: "absolute",
    //               top: 0,
    //               right: "20%",
    //               height: "120px",
    //             }}
    //           >
    //             <Box
    //               // create a line going upwards from the circle
    //               sx={{
    //                 transform: "translateX(-50%)",
    //                 width: 2,
    //                 height: "100%",
    //                 backgroundColor: "primary.main",
    //               }}
    //             />
    //             <Box
    //               // create a circle with primary color and start a line
    //               // from the circle going downwards
    //               sx={{
    //                 transform: "translateX(-50%)",
    //                 width: 10,
    //                 height: 10,
    //                 borderRadius: "50%",
    //                 backgroundColor: "primary.main",
    //               }}
    //             />
    //           </Box>
    //           <Typography
    //             variant="h1"
    //             align="right"
    //             fontWeight={700}
    //             color="primary"
    //             className="font-LGCB"
    //           >
    //             02
    //           </Typography>
    //         </Stack>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Stack
    //           spacing={2}
    //           sx={{
    //             mt: 2,
    //             mb: 6,
    //           }}
    //         >
    //           <Typography
    //             variant="h3"
    //             align="right"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{
    //               textTransform: "uppercase",
    //             }}
    //             className="font-LGCB"
    //           >
    //             {`WHAT DOES THE PROGRAMME INCLUDE?`}
    //           </Typography>
    //           <Typography
    //             variant="h5"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{ textTransform: "uppercase", pl: 4 }}
    //             className="font-LGCB"
    //           >
    //             INSTANT AND LIFETIME ACCESS TO 6 X VIDEO TUTORIALS WHICH FOCUS
    //             ON SPECIFIC STRATEGIES:
    //           </Typography>

    //           {points2List1.map((item, index) => (
    //             <Stack
    //               key={"points2List1-" + index}
    //               direction="row"
    //               spacing={2}
    //               alignItems="flex-start"
    //             >
    //               <Box
    //                 sx={{
    //                   mt: 0.5,
    //                 }}
    //               >
    //                 <Image src={CHECK_MARK} alt="check" height={18} />
    //               </Box>
    //               <Typography
    //                 variant="h5"
    //                 fontWeight={600}
    //                 color="primary"
    //                 component="p"
    //             className="font-LGCB"
    //             >
    //                 {item}
    //               </Typography>
    //             </Stack>
    //           ))}

    //           {points2List2.map((item, index) => (
    //             <Stack
    //               key={"points2List2-" + index}
    //               direction="row"
    //               spacing={2}
    //               alignItems="flex-start"
    //             >
    //               <Box
    //                 sx={{
    //                   mt: 0.5,
    //                 }}
    //               >
    //                 <Image src={ORANGE_STAR} alt="STAR ICON" height={18} />
    //               </Box>
    //               <Typography
    //                 variant="h5"
    //                 fontWeight={600}
    //                 color="primary"
    //                 component="p"
    //             className="font-LGCB"
    //             >
    //                 {item}
    //               </Typography>
    //             </Stack>
    //           ))}
    //         </Stack>
    //       </Grid>
    //       <Grid item xs={12} lg={8}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             justifyContent: "center",
    //             position: "relative",
    //             "& > img": {
    //               width: "100%",
    //               height: "100%",
    //               objectFit: "cover",
    //             },
    //           }}
    //         >
    //           <Image src={HOORAY} alt="kid playing with lady" />
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} lg={4}>
    //         <Stack
    //           justifyContent="space-between"
    //           alignItems="flex-end"
    //           sx={{
    //             height: "100%",
    //             position: "relative",
    //           }}
    //         >
    //           <Button
    //             fullWidth
    //             variant="contained"
    //             size="small"
    //             color="primary"
    //             sx={{
    //               textTransform: "uppercase",
    //             }}
    //             style={{ backgroundColor: "#23254E" }}
    //           >
    //             <Typography variant="h5" fontWeight={400} className="font-LGC">
    //               Buy it Now
    //             </Typography>
    //           </Button>
    //           <Box
    //             sx={{
    //               position: "absolute",
    //               top: 0,
    //               right: "20%",
    //               height: "120px",
    //             }}
    //           >
    //             <Box
    //               // create a line going upwards from the circle
    //               sx={{
    //                 transform: "translateX(-50%)",
    //                 width: 2,
    //                 height: "100%",
    //                 backgroundColor: "primary.main",
    //               }}
    //             />
    //             <Box
    //               // create a circle with primary color and start a line
    //               // from the circle going downwards
    //               sx={{
    //                 transform: "translateX(-50%)",
    //                 width: 10,
    //                 height: 10,
    //                 borderRadius: "50%",
    //                 backgroundColor: "primary.main",
    //               }}
    //             />
    //           </Box>
    //           <Typography
    //             variant="h1"
    //             align="right"
    //             fontWeight={700}
    //             color="primary"
    //             className="font-LGCB"
    //           >
    //             03
    //           </Typography>
    //         </Stack>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Stack
    //           spacing={2}
    //           sx={{
    //             mt: 2,
    //           }}
    //         >
    //           <Typography
    //             variant="h3"
    //             align="right"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{
    //               textTransform: "uppercase",
    //             }}
    //             className="font-LGCB"
    //           >
    //             {`WHO IS IT FOR?`}
    //           </Typography>
    //           <Typography
    //             variant="h5"
    //             align="center"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{ textTransform: "uppercase", pl: 4 }}
    //             className="font-LGCB"
    //           >
    //             {`THIS PROGRAMME IS FOR YOU IF YOU'RE A PARENT OF A CHILD AGED 4 AND UNDER WHO:`}
    //           </Typography>

    //           {points3List.map((item, index) => (
    //             <Stack
    //               key={"points3List-" + index}
    //               direction="row"
    //               spacing={2}
    //               alignItems="flex-start"
    //             >
    //               <Box
    //                 sx={{
    //                   mt: 0.5,
    //                 }}
    //               >
    //                 <Image src={CHECK_MARK} alt="check" height={18} />
    //               </Box>
    //               <Typography
    //                 variant="h5"
    //                 fontWeight={600}
    //                 color="primary"
    //                 component="p"
    //             className="font-LGCB"
    //             >
    //                 {item}
    //               </Typography>
    //             </Stack>
    //           ))}

    //           <Typography
    //             variant="h5"
    //             align="center"
    //             fontWeight={600}
    //             color="primary"
    //             sx={{ textTransform: "uppercase", pl: 4 }}
    //             className="font-LGCB"
    //           >
    //             {`If you relate to one or more of these points, then this programme is for you!`}
    //           </Typography>
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
  );
};

export default Introduction;
