import { IconType } from "react-icons";
import { atom } from "recoil";

export type DirectoryMenuItem = {
  displayText: string;
  link: string;
  icon: IconType;
};

interface DirectoryMenuState {
  isOpen: boolean;
}
