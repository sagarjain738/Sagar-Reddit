import { directoryMenuState } from "@/atoms/directoryMenuAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);

  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  return { directoryState };
};
export default useDirectory;
