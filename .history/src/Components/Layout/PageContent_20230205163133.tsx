import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: (React.ReactElement | React.ReactNode)[];
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 8px" border="1px solid red">
      <Flex>
        {/* LHS */}
        <Flex>{children[0]}</Flex>
        {/* RHS */}
        <Flex>{children[1]}</Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
