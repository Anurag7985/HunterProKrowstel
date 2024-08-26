import React from 'react';
import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  return (
    <Flex
      as="header"
      bg="teal.500"
      color="white"
      padding={4}
      align="center"
      justify="space-between"
    >
      <Button onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <HamburgerIcon />
      </Button>
      <Box>Navbar Content</Box>
    </Flex>
  );
};

export default Navbar;
