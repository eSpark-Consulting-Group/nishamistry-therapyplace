import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "../../Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Footer_Contacts_Info, NavbarNavLinks } from "../constants";
import FooterLogo from "../../../assets/svg/Logo_Footer_SVG.svg";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#CBDBD8",
          px: 2,
          py: {
            xs: 3,
            lg: 5,
          },
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          spacing={{
            xs: 4,
            lg: 45,
          }}
          sx={{
            flexDirection: {
              xs: "column-reverse",
              lg: "row",
            },
          }}
        >
          <Grid item xs={12} lg={6} marginLeft={{ sm: 5, md: 0, lg: 0 }}>
            <Stack
              direction={{
                xs: "column-reverse",
                lg: "row",
              }}
              alignItems="center"
              spacing={2}
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                  alignItems: "end",
                  height: "100%",
                  mr: {
                    xs: 0,
                    lg: 20,
                  },
                  ml: {
                    lg: 8,
                  },
                }}
              >
                <Image
                  src={FooterLogo}
                  alt="The Therapy Place Logo"
                  width={100}
                  onClick={() => {
                    router.push("/");
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    lg: "none",
                  },
                  paddingRight: { xs: 5, md: 1, lg: 0 },
                  alignItems: "end",
                  justifyContent: "center",
                  height: "100%",
                  mr: {
                    xs: 0,
                    lg: 5,
                  },
                  "& img": {
                    width: "100%",
                  },
                }}
              >
                <Image
                  src={FooterLogo}
                  alt="The Therapy Place Logo"
                  onClick={() => {
                    router.push("/");
                  }}
                />
              </Box>

              <Stack
                spacing={2}
                alignItems="center"
                sx={{
                  width: {
                    xs: "60%",
                    md: "80%",
                    lg: "auto",
                  },
                }}
                paddingLeft={{
                  xs: 2,
                  md: 5,
                }}
              >
                <Grid
                  container
                  spacing={1}
                  justifyContent={{
                    xs: "flex-start",
                    md: "center",
                  }}
                >
                  {NavbarNavLinks.map((link, index) => (
                    <Grid item xs={6} md={2} lg={12} key={"nav-link" + index}>
                      <Link
                        href={link.href}
                        underline="none"
                        fontSize={24}
                        fontWeight={300}
                      >
                        {link.title}
                      </Link>
                    </Grid>
                  ))}
                </Grid>

                <Grid
                  container
                  justifyContent="space-around"
                  position={{ md: "absolute", lg:"unset" }}
                  paddingTop={{ md: 15, lg: 0 }}
                  sx={{
                    pt: 3,
                  }}
                >
                  <Grid item xs={6} md={3} lg={6}>
                    <Link
                      href="/"
                      underline="none"
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        width: "100%",
                        pl:{
                          lg:1
                        }
                      }}
                      marginLeft={{
                        md: 10,
                        lg: -1,
                      }}
                    >
                      Privacy Policy
                    </Link>
                  </Grid>
                  <Grid item xs={6} md={3} lg={6}>
                    <Link
                      href="/"
                      underline="none"
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        width: "100%",
                        pl: 1,
                      }}
                    >
                      Terms & Conditions
                    </Link>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Stack
              spacing={2}
              justifyContent={{
                xs: "center",
                lg: "flex-end",
              }}
              direction={{
                xs: "row",
                lg: "column",
              }}
              sx={{
                pt: {
                  xs: 3,
                  lg: 0,
                },
              }}
            >
              {Footer_Contacts_Info.map((info, index) => (
                <Stack
                  direction="row"
                  spacing={1}
                  key={"contact-info" + index}
                  alignItems="center"
                >
                  <Image
                    src={info.icon}
                    alt={info.text}
                    width={40}
                    height={40}
                    onClick={() => {
                      router.push(info.href);
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={400}
                    href={info.href}
                    component={MuiLink}
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: {
                        xs: "none",
                        lg: "block",
                      },
                      pl: {
                        lg: 1,
                      },
                    }}
                  >
                    {info.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "center",
          py: 3,
          backgroundColor: "common.white",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={400}
          color="primary"
        >
          www.thetherapyplaceuk.com
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
