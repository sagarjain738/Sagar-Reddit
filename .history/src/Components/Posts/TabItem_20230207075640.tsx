import React from "react";
import { TabItem } from "./NewPostForm";

type TabItemProps = {
  item: TabItem;
};

const TabItem: React.FC<TabItemProps> = ({ item }) => {
  return <div>{item.title}</div>;
};
export default TabItem;
