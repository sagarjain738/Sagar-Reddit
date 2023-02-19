import React from "react";
import { TabItem } from "./NewPostForm";

type TabItemProps = {
  item: TabItem;
  selected: string;
};

const TabItem: React.FC<TabItemProps> = ({ item }) => {
  return <div>{item.title}</div>;
};
export default TabItem;
