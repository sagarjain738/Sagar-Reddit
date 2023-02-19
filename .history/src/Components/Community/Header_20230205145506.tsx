import { Community } from "@/atoms/communityAtoms";
import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  return (
    <Flex direction="column" height="146px" width="100%">
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white">
        <Flex width="95%" maxWidth="860px">
          {communityData.imageURL ? (
            <Image />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position="relative"
              top={-3}
              color="blue.500"
              border="4px solid white"
              borderRadius="full"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
