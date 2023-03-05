import {
  DirectoryMenuItem,
  directoryMenuState,
} from "@/atoms/directoryMenuAtom";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const router = useRouter();
  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));

    router.push(menuItem.link);
  };

  return { directoryState, toggleMenuOpen };
};
export default useDirectory;
