import { Flex } from "@chakra-ui/react";
import React from "react";

type PageLayoutProps = {
  children: (React.ReactElement | React.ReactNode)[];
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Flex>
      <Flex>
        {/* LHS */}
        <Flex>{children[0]}</Flex>
        {/* RHS */}
        <Flex>{children[1]}</Flex>
      </Flex>
    </Flex>
  );
};
export default PageLayout;
