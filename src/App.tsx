import React from 'react';
import { Box , IconButton} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import Index from '../src/components/Navbar/Index';

const App: React.FC = () => {
   const [isSideBarOpen , setSideBarOpen] = useState<Boolean>(true);
   const togglebar = () =>{
    setSideBarOpen(!isSideBarOpen);
   }
  return (
    <ChakraProvider>
    <Box width='100vw' height='100vh'  display='flex' >
      <Box w={isSideBarOpen ?{lg: "15%"} : "5%"}
         transition="width 0.2s"
       h='100%' bg='yellow'>
       {/* Sidebar */}
       </Box>
      <Box  w={isSideBarOpen ? { lg: "85%" } : '100%'}
          transition="width 0.2s" h='100%' bg='purple' border='2px' borderColor='black'>
           <Box bg="aqua"  w='100%' h="15%">
            <Index/>

           </Box>
           <Box>

           </Box>
          </Box>
      
    </Box>
    <IconButton
            aria-label="Toggle Sidebar"
            icon={isSideBarOpen? <CloseIcon /> : <HamburgerIcon />}
            onClick={togglebar }
            position="absolute"
            top="4"
            left={isSideBarOpen? { lg: '15%' } : '5%'}
            transform="translateX(-50%)"
            zIndex="1"
          />
    </ChakraProvider>
  );
};

export default App;
