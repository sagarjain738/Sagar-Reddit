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
          bg: "red",
        }}
        onClick={() => {}}
      >
        <Flex align="center">
          <Icon as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
