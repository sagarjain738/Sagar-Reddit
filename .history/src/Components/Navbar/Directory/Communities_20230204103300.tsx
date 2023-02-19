import { Flex, MenuItem, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC = () => {
  return (
    <>
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{
          bg: "gray.100",
        }}
        onClick={() => {}}
      >
        <Flex align="center">
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
