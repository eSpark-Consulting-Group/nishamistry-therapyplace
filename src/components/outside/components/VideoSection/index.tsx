import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CHILD_READING from "../../../../../public/img/WEB-CHILD READING@4x.png";
import HUGGING_CHILD from "../../../../../public/img/WEB-HUGGING CHILD@4x.png";
import CHECK_ICON from "../../../../../public/svg/WEB-TICK.svg";
import MONITOR from "../../../../../public/img/Monitor_Image.png";

const VideoSection: React.FC = () => {
  const points = [
    "Might be delayed with their speech",
    "Are not interacting with you",
    "Are not developing as fast as children the same age",
    "Are becoming increasingly frustrated and losing self-confidence because of their communication difficulties?",
  ];

  const points1List = [
    "It's estimated that 1.7 million children in the UK are struggling with speaking and understanding words.",
    "You just want the best for your child so you're feeling frustrated over the lengthy waitlists of public services but funding private speech therapy isn't an option for you right now.",
    "Many parents think their child will outgrow the delay, and whilst it's possible, in many situations it's not the case. And the longer you wait, the more significant the impact on your child's development.",
  ];

  return (
    <Box
      sx={{
        my: 7,
      }}
    >
      <Container
        maxWidth="md"
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: 2,
            py: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#CBDBD8",
            width: "100%",
            borderRadius: {
              xs: "50px",
              md: "100px",
            }
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxWidth: {
                xs: "410px",
                md: "100%",
              },
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: {
                  xs: 15,
                  md: "5%",
                },
                zIndex: 99,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                alignContent: "flex-start",
                maxWidth: {
                  xs: "410px",
                  md: "100%",
                },
                "& video": {
                  width: "75%",
                  height: "75%",
                  objectFit: "cover",
                },
              }}
            >
              <video
                src="../../assets/video/Intro-for-sales-page-.mp4"
                controls
              >
                Your browser does not support the video tag.
              </video>
            </Box>
            <Image src={MONITOR} alt="video" />
          </Box>
        </Box>
        <Box
          sx={{
            mt: {
              xs: -5,
              md: -10,
              lg: -4
            },
            p: {
              xs: 2,
              md: 5,
            },
            px: {
              xs: 2,
              md: 10,
              lg: 5
            },
            py: {
              lg: 1
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#D0CC83",
            borderRadius: {
              xs: "100px",
              md: "200px",
            },
            maxWidth: "600px",
            boxShadow: `10px 12px 0px 0px rgba(169, 165, 104, 1)`,
          }}
        >
          <Typography
            variant="h5"
            color="White"
            sx={{
              textTransform: "uppercase",
              fontSize: {
                xs: 14,
                md: 20,
              }
            }}
            fontWeight={600}
            className="font-LGCL"
          >
            GET FULL ACCESS TO:
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            fontWeight={600}
            sx={{
              fontSize: {
                xs: 18,
                md: 24,
              },
              textTransform: "uppercase",
              textAlign: "center"
            }}
            className="font-LGCL"
          >
            {"\‘HELP YOUR TODDLER TALK!\’"}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#CD7F59",
              fontSize: {
                xs: 18,
                md: 24,
              }
            }}
            fontWeight={600}
            className="font-LGCB"
          >
            £49.99
          </Typography>

          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ backgroundColor: "#23254E" }}
            sx={{
              px: { lg: 10, xs: 5 },
              py: 1,
              mt: 1,
              textTransform: "uppercase",
              fontSize: {
                lg: 14
              }
            }}
            className="font-LGC"
          >
            Buy it Now
          </Button>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            mt: 5,
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                height: "95%",
                width: "95%",
                "& > img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <Image src={CHILD_READING} alt="Woman reading to a child" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography
                variant="h4"
                fontWeight={600}
                color="primary"
                gutterBottom
                className="font-LGC"
              >
                Are you worried that your toddler is late to talk?
              </Typography>

              <Typography
                variant="h6"
                fontWeight={400}
                color="primary"
                gutterBottom
                className="font-LGC"
              >
                IF YOUR ARE A PARENT OF A CHILD UNDER 4 AND CONCERNED THAT THEY:
              </Typography>

              {points.map((item, index) => (
                <Stack
                  key={"point-list1-" + index}
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      mt: 0.5,
                    }}
                  >
                    <Image src={CHECK_ICON} alt="check" height={18} />
                  </Box>
                  <Typography variant="body1" fontWeight={500} color="primary" className="font-LGC" >
                    {item}
                  </Typography>
                </Stack>
              ))}

              <Typography
                variant="h6"
                fontWeight={600}
                color="primary"
                align="center"
                sx={{
                  pb: 5,
                }}
                className="font-LGCB"
              >
                {"You're not alone!"}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              {points1List.map((item, index) => (
                <Typography
                  key={"point2-1-list" + index}
                  variant="h6"
                  fontWeight={500}
                  color="primary"
                  className="font-LGC"
                >
                  {item}
                </Typography>
              ))}

              <Typography
                variant="h6"
                fontWeight={600}
                color="primary"
                align="center"
                sx={{
                  pb: 5,
                }}
                className="font-LGCB"
              >
                {
                  "Early intervention is so powerful and now it's super affordable too!"
                }
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                height: "95%",
                width: "95%",
                "& > img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <Image src={HUGGING_CHILD} alt="parents hugging a child" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoSection;
