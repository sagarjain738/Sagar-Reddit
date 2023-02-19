import { Community } from "@/atoms/communityAtoms";
import { Flex } from "@chakra-ui/react";
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
      Hello
    </Flex>
  );
};
export default Header;
