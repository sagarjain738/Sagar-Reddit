import { Flex } from "@chakra-ui/react";
import React from "react";

type PageLayoutProps = {};

const PageLayout: React.FC<PageLayoutProps> = () => {
  return (
    <Flex>
      <Flex>
        {/* LHS */}
        <Flex></Flex>
        {/* RHS */}
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};
export default PageLayout;
