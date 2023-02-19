import { Flex } from "@chakra-ui/react";
import React from "react";

// type HeaderProps = {};

const Header: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    ></Flex>
  );
};
export default Header;
