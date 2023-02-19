import PageContent from "@/Components/Layout/PageContent";
import NewPostForm from "@/Components/Posts/NewPostForm";
import { auth } from "@/Firebase/clientApp";
import useCommunityData from "@/Hooks/useCommunityData";
import { communityState } from "@/atoms/communityAtoms";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

// type SubmitProps = {};

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState);
  const {} = useCommunityData();

  return (
    <PageContent>
      <>
        <Box p="14px 0" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPostPage;
