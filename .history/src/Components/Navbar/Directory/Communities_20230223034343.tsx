import CreateCommunitiesModal from "@/Components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, MenuItem, Icon, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunitiesModal open={open} setOpen={setOpen} />
      <Box>
        <Text></Text>
      </Box>
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{
          bg: "gray.100",
        }}
        onClick={() => setOpen(true)}
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
