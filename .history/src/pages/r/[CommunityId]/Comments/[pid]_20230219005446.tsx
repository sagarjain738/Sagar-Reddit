import PageContent from "@/Components/Layout/PageContent";
import PostItem from "@/Components/Posts/PostItem";
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
      <>{postStateValue.selectedPost && <PostItem />}</>
      <></>
    </PageContent>
  );
};
export default PostPage;
