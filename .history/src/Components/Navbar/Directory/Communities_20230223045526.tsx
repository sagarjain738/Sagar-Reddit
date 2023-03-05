import CreateCommunitiesModal from "@/Components/Modal/CreateCommunity/CreateCommunityModal";
import { communityState } from "@/atoms/communityAtoms";
import { Flex, MenuItem, Icon, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import MenuListItem from "./MenuListItem";
import { FaReddit } from "react-icons/fa";

type CommunitiesProps = {};

const Communities: React.FC = () => {
  const [open, setOpen] = useState(false);
  const mySnippets = useRecoilValue(communityState).mySnippets;
  return (
    <>
      <CreateCommunitiesModal open={open} setOpen={setOpen} />

      <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
        Moderating
      </Text>
      {mySnippets
        .filter((snippet) => snippet.isModerator)
        .map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor="blue.500"
            imageURL={snippet.imageURL}
          />
        ))}

      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          My Communities
        </Text>
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
        {mySnippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor="blue.500"
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};
export default Communities;
