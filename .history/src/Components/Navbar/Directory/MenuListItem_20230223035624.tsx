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
  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{
        bg: "gray.100",
      }}
    ></MenuItem>
  );
};
export default MenuListItem;
