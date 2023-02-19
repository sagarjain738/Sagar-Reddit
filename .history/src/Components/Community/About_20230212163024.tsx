import { Community } from "@/atoms/communityAtoms";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  return (
    <Box position="sticky" top="1rem">
      <Flex></Flex>
    </Box>
  );
};
export default About;
