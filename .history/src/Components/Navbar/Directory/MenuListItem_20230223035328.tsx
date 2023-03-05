import React from "react";
import { IconType } from "react-icons";

type MenuListItemProps = {
  displayText: string;
  link: string;
  icon: IconType;
};

const MenuListItem: React.FC<MenuListItemProps> = () => {
  return <div>Have a good coding</div>;
};
export default MenuListItem;
