import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FAQs from "./components/FAQs";
import Reviews from "./components/Reviews";
// import Footer from "./components/layout/Footer";
import VideoSection from "./components/VideoSection";
import PriceSection from "./components/PriceSection";
import Introduction from "./components/Introduction";
import BANNER_IMAGE from "../../../public/img/TABLET-HEADER@4x.png";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center bg-white justify-center">


   
      {/* <Box
        sx={{
          backgroundColor: "#D0CC83",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: { xs: '80%', sm: '40%', md: '52%', lg: '36.7%' },
                height: { xs: '100%', sm: '100%' },
              }}
            >
              <Image
                layout="fill"
                src={BANNER_IMAGE} alt="lady with laptop" />
            </Box>
            <Box
              sx={{
                width: "60%",
                py: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                zIndex: 99,
              }}
            >
              <Typography
                variant="h1"
                color="primary"
                fontWeight={700}
                align="right"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "27px",
                    md: "45px",
                    lg: "75px",
                  }
                }}
                className="font-LGCB"
              >
                Help your toddler talk!
              </Typography>

              <Typography
                variant="h3"
                fontWeight={500}
                align="right"
                color="white"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "35px",
                  },
                }}
                className="font-LGC"
              >
                {`Unlock your child\'s communication potential!`}
              </Typography>
              <Typography
                variant="h4"
                fontWeight={500}
                color="primary"
                align="right"
                gutterBottom
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: {
                    xs: "18px",
                    md: "35px",
                  }
                }}
                className="font-LGC"
              >
                {`A set of 6 pre-recorded tutorials to learn how you\n can help your child speak.`}
              </Typography>

              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ backgroundColor: "#23254E" }}
                sx={{
                  px: { lg: 17, md: 12, xs: 6 },
                  py: { lg: 2, md: 2, xs: 1 },
                  mt: 3,
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                    lg: "22px",
                    textTransform: "uppercase",
                  },
                }}
                className="font-LGC"
              >
                Buy it Now
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box> */}

      <VideoSection />
     <Introduction />
     
       {/* <PriceSection />  */}
      {/* <Reviews />
      <FAQs />  */} 
      {/* <Footer /> */}
   
   </div>
  );
}
