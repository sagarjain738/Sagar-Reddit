import { atom } from "recoil";

export type DirectoryMenuItem = {
  displayText: string;
};

interface DirectoryMenuState {
  isOpen: boolean;
}
