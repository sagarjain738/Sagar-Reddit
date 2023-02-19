import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: (React.ReactElement | React.ReactNode)[];
};

const PageLayout: React.FC<PageContentProps> = ({ children }) => {
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
export default PageConPageContenttent;
