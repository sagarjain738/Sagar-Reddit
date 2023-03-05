import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type MenuListItemProps = {
  displayText: string;
  link: string;
  icon: IconType;
  iconColor: string;
  imageURL?: string;
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  icon,
  iconColor,
  imageURL,
  link,
}) => {
  return <MenuItem></MenuItem>;
};
export default MenuListItem;
