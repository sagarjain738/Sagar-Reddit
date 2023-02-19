import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

// type NotFoundProps = {};

const NotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    ></Flex>
  );
};
export default NotFound;
