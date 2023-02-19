import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

type IconsProps = {};

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        border="1px solid"
        borderColor="gray.200"
      >
        <Flex>
          <Icon as={BsArrowRightCircle} />
        </Flex>
      </Flex>
      <></>
    </Flex>
  );
};
export default Icons;
