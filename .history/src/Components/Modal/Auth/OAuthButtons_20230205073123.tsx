import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../Firebase/clientApp";
import { User } from "firebase/auth";
import { setDoc, collection, doc, Firestore } from "firebase/firestore";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, user);
  };

  return (
    <Flex direction="column" mb="4">
      <Button
        variant="oauth"
        mb="4"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
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
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
