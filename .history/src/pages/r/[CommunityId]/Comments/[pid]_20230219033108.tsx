import PageContent from "@/Components/Layout/PageContent";
import PostItem from "@/Components/Posts/PostItem";
import { auth, firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Post } from "@/atoms/postsAtom";
import { doc, getDoc } from "firebase/firestore";
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

  const fetchPost = async (postId: string) => {
    try {
    } catch (error) {
      console.log("Error");
    }
  };

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
                (post) => post.postId === postStateValue.selectedPost?.id
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
