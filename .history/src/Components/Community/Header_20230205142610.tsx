import { Community } from "@/atoms/communityAtoms";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <Box height={} >

      </Box>
    </Flex>
  );
};
export default Header;
