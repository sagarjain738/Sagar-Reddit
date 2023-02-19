import PageContent from "@/Components/Layout/PageContent";
import usePosts from "@/Hooks/usePosts";
import React from "react";

type PostPageProps = {};

const PostPage: React.FC<PostPageProps> = () => {
  const {
    onDeletePost,
    onSelectPost,
    onVote,
    postStateValue,
    setPostStateValue,
  } = usePosts();
  return (
    <PageContent>
      <></>
    </PageContent>
  );
};
export default PostPage;
