import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: (React.ReactElement | React.ReactNode)[];
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 8px" border="1px solid red">
      <Flex
        width="100%"
        justify="center"
        maxWidth="860px"
        border="1px solid green"
      >
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
          border="1px solid blue"
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
          border="1px solid purple"
        >
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
