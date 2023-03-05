import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RIghtContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import Directory from "./Directory/Directory";
import { useRouter } from "next/router";
import useDirectory from "@/Hooks/useDirectory";
import { defaultMenuItem } from "@/atoms/directoryMenuAtom";

// type NavbarProps = {};

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();
  return (
    <>
      <Flex
        bg="white"
        height="44px"
        padding="6px 12px"
        justify={{
          md: "space-between",
        }}
      >
        <Flex
          align="center"
          width={{
            base: "40px",
            md: "auto",
          }}
          mr={{
            base: 0,
            md: 2,
          }}
          cursor="pointer"
          onClick={() => onSelectMenuItem(defaultMenuItem)}
        >
          <Image src="/images/redditFace.svg" alt="LOGO" height="30px" />
          <Image
            src="/images/redditText.svg"
            alt="LOGO2"
            height="46px"
            display={{
              base: "none",
              md: "unset",
            }}
          />
        </Flex>
        {user && <Directory />}
        <SearchInput user={user} />
        <RightContent user={user} />
      </Flex>
    </>
  );
};
export default Navbar;
