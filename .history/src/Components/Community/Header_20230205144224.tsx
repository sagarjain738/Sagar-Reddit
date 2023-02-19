import { Community } from "@/atoms/communityAtoms";
import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="146px"
      width="100%"
    >
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px" border="1px solid red">
          {communityData.imageURL ? (
            <Image />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position="relative"
              top={-3}
              color="blue.500"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
