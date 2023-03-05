import { atom } from "recoil";

export type DirectoryMenuItem = {
  displayText: string;
  link: string;
};

interface DirectoryMenuState {
  isOpen: boolean;
}
