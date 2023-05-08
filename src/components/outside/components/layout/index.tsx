import React from "react";
import Box from "@mui/material/Box";
// import Header from "./Header";
// import SideBar from "./SideBar/SideBar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [DrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <Header
        DrawerOpen={DrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      /> */}
      {/* <SideBar
        open={DrawerOpen}
        handleDrawerClose={() => handleDrawerClose()}
      /> */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
