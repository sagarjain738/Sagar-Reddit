import { Flex, MenuItem, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC = () => {
  return (
    <>
      <MenuItem>
        <Flex align="center">
          <Icon as={GrAdd} />
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
