import React from "react";
import { TabItem } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type TabItemProps = {
  item: TabItem;
  selected: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ item }) => {
  return (
    <Flex justify="center" align="center">
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
