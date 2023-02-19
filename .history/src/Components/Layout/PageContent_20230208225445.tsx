import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: (React.ReactElement | React.ReactNode)[];
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center">
      <Flex width="95%" justify="center" maxWidth="860px">
        {/* LHS */}
        <Flex
          direction="column"
          width={{
            base: "100%",
            md: "65%",
          }}
          mr={{
            base: 0,
            md: 6,
          }}
        >
          {children[0]}
        </Flex>
        {/* RHS */}
        <Flex
          direction="column"
          display={{
            base: "none",
            md: "flex",
          }}
          flexGrow={1}
        >
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
