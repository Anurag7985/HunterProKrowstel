import React from 'react';
import { Box } from '@chakra-ui/react'
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <Box w='100%' h='100%' bg='brown' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <IoIosSearch fontSize='1.5vw'/>
        </InputLeftElement>
        <Input placeholder='Search Bar'  bg='#F5F7FA' />
        </InputGroup>
       
      </Box>
      <Box></Box>
      
      

    </Box>

  );
};

export default Navbar;
