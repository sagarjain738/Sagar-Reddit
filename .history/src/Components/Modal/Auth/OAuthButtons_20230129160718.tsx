import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/clientApp";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC = () => {

  const [signInWithGoogle, user, loading, error] useSignInWithGoogle(auth)
  return (
    <Flex direction="column" mb="4">
      <Button variant="oauth" mb="4">
        <Image
          src="/images/googlelogo.png"
          height="20px"
          alt="Google Logo"
          mr="4"
        />
        Continue With Google
      </Button>
      <Button variant="oauth" mb="4">
        Continue With GitHub
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
