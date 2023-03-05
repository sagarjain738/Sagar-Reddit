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
  return <div>Have a good coding</div>;
};
export default MenuListItem;
