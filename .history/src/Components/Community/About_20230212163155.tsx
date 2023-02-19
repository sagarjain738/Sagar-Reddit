import { Community } from "@/atoms/communityAtoms";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  return (
    <Box position="sticky" top="1rem">
      <Flex
        justify="space-between"
        align="center"
        bg="blue.400"
        p={3}
        borderRadius="4px 4px 0 0"
      >
        <Text>About Community</Text>
      </Flex>
      <Flex></Flex>
    </Box>
  );
};
export default About;
