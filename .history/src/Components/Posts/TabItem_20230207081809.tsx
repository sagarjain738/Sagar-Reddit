import React from "react";
import { TabItem } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type TabItemProps = {
  item: TabItem;
  selected: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ item, selected }) => {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0"
      cursor="pointer"
      fontWeight={700}
      _hover={{
        bg: "gray.50",
      }}
      color={selected ? "blue.500" : "gray.500"}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
