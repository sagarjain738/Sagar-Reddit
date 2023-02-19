import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/Components/Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "../../../Firebase/clientApp";
import Icons from "./Icons";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
