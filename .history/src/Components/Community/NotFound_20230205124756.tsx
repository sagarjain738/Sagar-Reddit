import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import { Flex } from "@chakra-ui/react";

// type NotFoundProps = {};

const NotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, that community does not exists or has been banned
    </Flex>
  );
};
export default NotFound;
