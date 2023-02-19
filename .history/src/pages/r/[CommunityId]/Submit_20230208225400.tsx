import PageContent from "@/Components/Layout/PageContent";
import NewPostForm from "@/Components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

// type SubmitProps = {};

const SubmitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        <Box p="0 0" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        <NewPostForm />
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPostPage;
