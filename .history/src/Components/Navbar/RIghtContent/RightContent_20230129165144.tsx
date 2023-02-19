import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/Components/Modal/Auth/AuthModal";

type RightContentProps = {
  users: any;
};

const RightContent: React.FC<RightContentProps> = ({ users }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {users ? <div>Theres a User</div> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
