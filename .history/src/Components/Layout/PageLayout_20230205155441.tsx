import { Flex } from "@chakra-ui/react";
import React from "react";
import { Flex } from "@chakra-ui/react";

type PageLayoutProps = {};

const PageLayout: React.FC<PageLayoutProps> = () => {
  return (
    <Flex>
      <Flex>
        <Flex></Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};
export default PageLayout;
