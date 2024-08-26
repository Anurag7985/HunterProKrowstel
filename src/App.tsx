import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidenavItems, { SidenavItem } from './components/SideBar';
import { FaHome, FaUser, FaCog } from "react-icons/fa";

import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
const navItems: SidenavItem[] = [
  {
    icon: FaHome,
    label: "Home",
    to: "/home",
  },
  {
    icon: FaUser,
    label: "Profile",
    to: "/profile",
  },
  {
    icon: FaCog,
    label: "Settings",
    to: "/settings",
  },
];

const App: React.FC = () => {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);

  const toggleBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <ChakraProvider>
      <Router>
        <Box width="100vw" height="100vh" display="flex">
          <Box
            w={isSideBarOpen ? { lg: "15%" } : "5%"}
            transition="width 0.2s"
            h="100%"
            bg="yellow"
          >
            <Box>Icon</Box>
            <SidenavItems navItems={navItems} mode="semi" showLabels={isSideBarOpen} />
          </Box>
          <Box
            w={isSideBarOpen ? { lg: "85%" } : '95%'}
            transition="width 0.2s"
            h="100%"
          >
            <Box w="100%" bg="skyblue" h="15%"></Box>
            <Box w="100%" bg="green" h="85%">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Box>
          </Box>
        </Box>
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isSideBarOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleBar}
          position="absolute"
          top="4"
          left={isSideBarOpen ? { lg: '15%' } : '5%'}
          transform="translateX(-50%)"
          zIndex="1"
        />
      </Router>
    </ChakraProvider>
  );
};

export default App;
