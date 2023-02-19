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
      height="146px"
      width="100%"
    >
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}></Flex>
    </Flex>
  );
};
export default Header;
