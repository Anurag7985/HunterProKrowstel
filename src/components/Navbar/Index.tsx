import React, { useState } from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react'
import { InputGroup, Input, InputLeftElement, Button } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Navbar: React.FC = () => {

  const[isProfileBoxVisible, setProfileVisible] = useState(false)

  function mouseEnter(){
    setProfileVisible(true)
  }
  function mouseLeave(){
    setProfileVisible(false)
    }

  return (
    <Box w='100%' h='100%' bg='white' display='flex' justifyContent='right' alignItems='center'>
      {/* Search box */}
      <Box width='20vw'>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <IoIosSearch fontSize='1.5vw'/>
        </InputLeftElement>
        <Input placeholder='Search Bar'  bg='#F5F7FA' border='0' borderRadius='40px' w='20vw' />
        </InputGroup>  
      </Box>
      {/* Icons  */}

      <Box display='flex' justifyContent='center' alignItems='center'  w='20%' h='100%' mr='0em' gap='3em' >
        <FaMessage fontSize='1.5vw'/>
        <IoNotifications fontSize='1.5vw'/>
        <IoMdSettings fontSize='1.5vw'/>
      </Box>

      {/*Profile pic*/}

      <Box mr='2em'>
        <Avatar size='md' _hover={{ transform: 'scale(1.05)' }} cursor='pointer' src='../profile.jpeg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
      </Box>

      {/* profile information box */}

      {isProfileBoxVisible &&(
        <Box position='absolute' top='4.5em' bg='white' width='20vw' color='black' height='25vh' p='1em' transform="translateY(-10px)" transition="opacity 0.2s ease, transform 0.2s ease"  _hover={{ opacity: '1', transform: 'translateY(0)' }} zIndex="10"  borderRadius="md" boxShadow="md">
        <Text fontWeight="bold">John Doe</Text>
        <Text fontSize="sm" color="gray.500">Hunter Pro</Text>
        <Text fontSize="sm" color="gray.500">johndoe@hunterpro.com</Text>
        <Text fontSize="sm" color="gray.500">Human Recruiter</Text>
        <Button mt={3} width="100%" colorScheme="teal">Logout</Button>
      </Box>)}
      
      
      

    </Box>

  );
};

export default Navbar;
