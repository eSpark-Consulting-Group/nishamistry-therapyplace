// import React from "react";
// import Image from "next/image";
// import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
// import List from "@mui/material/List";
// import MuiLink from "@mui/material/Link";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import ListItemButton from "@mui/material/ListItemButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import HeaderLogo from "../../../../../../public/svg/Logo_Header_SVG.svg";
// import { Contacts_Info, NavbarNavLinks } from "../constants";
// import Link from "../../Link";

// export const drawerWidth = 240;

// export const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface ISideBarProps {
//   open: boolean;
//   handleDrawerClose: () => void;
// }

// const SideBar: React.FC<ISideBarProps> = (props) => {
//   const theme = useTheme();
//   const { open, handleDrawerClose } = props;

//   return (
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//         },
//       }}
//       variant="persistent"
//       anchor="right"
//       open={open}
//     >
//       <DrawerHeader
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         <IconButton onClick={handleDrawerClose}>
//           {theme.direction !== "rtl" ? (
//             <ChevronRightIcon />
//           ) : (
//             <ChevronLeftIcon />
//           )}
//         </IconButton>
//         <Image
//           src={HeaderLogo}
//           style={{ marginLeft: "20px" }}
//           alt="Logo"
//           width={80}
//         />
//       </DrawerHeader>
//       <List>
//         {NavbarNavLinks.map((link) => (
//           <ListItemButton key={link.title}>
//             <Link
//               href={link.href}
//               underline="none"
//               variant="h5"
//               fontWeight={200}
//             >
//               {link.title}
//             </Link>
//           </ListItemButton>
//         ))}

//         {Contacts_Info.map((contact) => (
//           <ListItemButton key={contact.text}>
//             <Image
//               src={contact.icon}
//               alt={contact.text}
//               width={24}
//               height={24}
//             />
//             <Typography
//               variant="body1"
//               fontWeight={400}
//               component={MuiLink}
//               href={contact.href}
//               underline="none"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{
//                 ml: 2,
//                 wordBreak: "break-word",
//               }}
//             >
//               {contact.text}
//             </Typography>
//           </ListItemButton>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default SideBar;
