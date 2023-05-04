import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Link from "../../Link";
import { drawerWidth } from "../SideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderLogo from "../../../assets/svg/Logo_Header_SVG.svg";
import ProfileLogo from "../../../assets/svg/profile.svg";
import { Contacts_Info, NavbarNavLinks } from "../constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

interface IHeaderProps {
  DrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { DrawerOpen, handleDrawerOpen, handleDrawerClose } = props;

  return (
    <>
      <AppBar position="sticky" color="inherit" open={DrawerOpen}>
        <Box
          sx={{
            backgroundColor: "#D0CC83",
            py: 2,
          }}
        >
          <Box
            sx={{
              px: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                  lg: "space-between",
                },
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                {Contacts_Info.map((info, index) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    key={"contact-info" + index}
                    alignItems="center"
                  >
                    <Image
                      src={info.icon}
                      alt={info.text}
                      width={36}
                      height={36}
                    />
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      component={MuiLink}
                      href={info.href}
                      underline="none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  mr: { lg: 3, md: 3, xs: -6 }
                }}
              >
                Book Free Consultation
              </Button>
            </Box>
            <Image src={ProfileLogo} width={42} alt="logo" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            pt: 2,
            px: 3,
            pb: {
              xs: 2,
              md: 5,
              lg: 3
            },
            "& img": {
              width: "auto",
              height: {
                xs: 60,
                md: 120,
              },
            },
          }}
        >
          <Image src={HeaderLogo} alt="logo" />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
              ...(DrawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            {NavbarNavLinks.map((link, index) => (
              <Link
                href={link.href}
                key={"nav-link" + index}
                underline="none"
                variant="h5"
                fontWeight={200}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
