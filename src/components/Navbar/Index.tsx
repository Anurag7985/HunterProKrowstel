import React from 'react';
import { Avatar, Box, Text, Button } from '@chakra-ui/react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <Box w='100%' h='100%' bg='white' display='flex' justifyContent='right' alignItems='center' position="relative">
      {/* Search box */}
      <Box width='20vw'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <IoIosSearch fontSize='1.5vw' />
          </InputLeftElement>
          <Input placeholder='Search Bar' bg='#F5F7FA' border='0' borderRadius='40px' w='20vw' />
        </InputGroup>  
      </Box>
      
      {/* Icons and profile */}
      <Box display='flex' justifyContent='center' alignItems='center' w='20%' h='100%' mr='0em' gap='3em'>
        <FaMessage fontSize='1.5vw' />
        <IoNotifications fontSize='1.5vw' />
        <IoMdSettings fontSize='1.5vw' />
      </Box>

      {/* Profile pic and hover box */}
      <Box position="relative" mr='2em'>
        <Box 
          display="flex" 
          alignItems="center" 
          position="relative"
          _hover={{ '.profile-box': { opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' } }}
        >
          <Avatar size='md' cursor='pointer' src='../profile.jpeg' />
        
          {/* Profile information box */}
          <Box 
            className="profile-box"
            position='absolute' 
            top='3.5em' 
            right='0'
            bg='white' 
            width='20vw' 
            color='black' 
            height='25vh' 
            p='1em' 
            borderRadius="md" 
            boxShadow="md"
            opacity="0"
            transform="translateY(-10px)"
            transition="opacity 0.2s ease, transform 0.2s ease"
            pointerEvents="none"
            zIndex="10"
          >
            <Text fontWeight="bold">John Doe</Text>
            <Text fontSize="sm" color="gray.500">Hunter Pro</Text>
            <Text fontSize="sm" color="gray.500">johndoe@hunterpro.com</Text>
            <Text fontSize="sm" color="gray.500">Human Recruiter</Text>
            <Button mt={3} width="100%" colorScheme="teal">Logout</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
