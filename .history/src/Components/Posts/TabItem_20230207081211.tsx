import React from "react";
import { TabItem } from "./NewPostForm";
import { Flex, Text } from "@chakra-ui/react";

type TabItemProps = {
  item: TabItem;
  selected: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ item }) => {
  return (
    <Flex>
      <Flex></Flex>
      <Text>{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
