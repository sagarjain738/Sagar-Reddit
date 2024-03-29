import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

type AuthButtonsProps = {};
const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{
          base: "none",
          sm: "flex",
        }}
        width={{
          base: "70px",
          md: "110px",
        }}
        mr="2"
        onClick={() => {
          setModalState((prev) => ({
            open: true,
            view: "login",
          }));
        }}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{
          base: "none",
          sm: "flex",
        }}
        width={{
          base: "70px",
          md: "110px",
        }}
        mr="2"
        onClick={() =>
          setModalState({
            open: true,
            view: "signup",
          })
        }
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
