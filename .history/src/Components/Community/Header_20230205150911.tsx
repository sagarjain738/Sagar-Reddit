import { Community } from "@/atoms/communityAtoms";
import { Box, Flex, Image, Icon, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined = false;
  return (
    <Flex direction="column" height="146px" width="100%">
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
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
          <Flex padding="10px 16px">
            <Flex direction="column">
              <Text fontWeight="800" fontSize="16pt">
                {communityData.id}
              </Text>
              <Text fontSize="10pt" fontWeight="800" color="gray.400">
                r/{communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="30px"
              pr={6}
              pl={6}
              onClick={() => {}}
            >
              {isJoined ? "Joined" : "join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
