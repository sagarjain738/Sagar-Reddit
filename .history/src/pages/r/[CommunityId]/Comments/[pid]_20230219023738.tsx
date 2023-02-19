import PageContent from "@/Components/Layout/PageContent";
import PostItem from "@/Components/Posts/PostItem";
import { auth } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type PostPageProps = {};

const PostPage: React.FC<PostPageProps> = () => {
  const [user] = useAuthState(auth);
  const {
    onDeletePost,
    onSelectPost,
    onVote,
    postStateValue,
    setPostStateValue,
    getCommunityPostVotes,
  } = usePosts();
  return (
    <PageContent>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            onDeletePost={onDeletePost}
            userVoteValue={
              postStateValue.postVotes.find(
                (post) => post.id === postStateValue.selectedPost?.id
              )?.voteValue
            }
            userIsCreator={postStateValue.selectedPost.creatorId === user?.uid}
          />
        )}
        {/* Comments */}
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default PostPage;
