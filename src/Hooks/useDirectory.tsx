import { communityState } from "@/atoms/communityAtoms";
import {
  DirectoryMenuItem,
  directoryMenuState,
} from "@/atoms/directoryMenuAtom";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaReddit } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const commuityStateValue = useRecoilValue(communityState);
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
    if (directoryState.isOpen) toggleMenuOpen();

    router.push(menuItem.link);
  };

  useEffect(() => {
    const { currentCommunity } = commuityStateValue;

    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: {
        displayText: `r/${currentCommunity?.id}`,
        icon: FaReddit,
        iconColor: "brand.100",
        link: `/r/${currentCommunity?.id}`,
        imageURL: currentCommunity?.imageURL,
      },
    }));
  }, [commuityStateValue.currentCommunity]);

  return { directoryState, toggleMenuOpen, onSelectMenuItem };
};
export default useDirectory;
