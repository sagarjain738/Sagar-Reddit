import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RIghtContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";

// type NavbarProps = {};

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Flex bg="white" height="44px" padding="6px 12px">
        <Flex align="center">
          <Image src="images/redditFace.svg" alt="LOGO" height="30px" />
          <Image
            src="images/redditText.svg"
            alt="LOGO2"
            height="46px"
            display={{
              base: "none",
              md: "unset",
            }}
          />
        </Flex>
        {/* <Directory /> */}
        <SearchInput />
        <RightContent users={user} />
      </Flex>
    </>
  );
};
export default Navbar;
