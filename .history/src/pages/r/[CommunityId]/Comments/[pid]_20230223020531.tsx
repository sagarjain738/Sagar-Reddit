import About from "@/Components/Community/About";
import PageContent from "@/Components/Layout/PageContent";
import Comments from "@/Components/Posts/Comments/Comments";
import PostItem from "@/Components/Posts/PostItem";
import PostLoader from "@/Components/Posts/PostLoader";
import { auth, firestore } from "@/Firebase/clientApp";
import useCommunityData from "@/Hooks/useCommunityData";
import usePosts from "@/Hooks/usePosts";
import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type PostPageProps = {};

const PostPage: React.FC<PostPageProps> = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);
  const {
    onDeletePost,
    onSelectPost,
    onVote,
    postStateValue,
    setPostStateValue,
    getCommunityPostVotes,
  } = usePosts();
  const { communityStateValue } = useCommunityData();

  const fetchPost = async (postId: string) => {
    setLoading(true);
    try {
      const postDocRef = doc(firestore, "posts", postId);
      const postDoc = await getDoc(postDocRef);

      setPostStateValue((prev) => ({
        ...prev,
        selectedPost: {
          id: postDoc.id,
          ...postDoc.data(),
        } as Post,
      }));
    } catch (error: any) {
      console.log("Error");
    }
    setLoading(false);
  };

  useEffect(() => {
    const { pid } = router.query;
    if (pid && !postStateValue.selectedPost) {
      fetchPost(pid as string);
    }
  }, [router.query, postStateValue.selectedPost]);
  if (!postStateValue.postVotes) return;
  return (
    <PageContent>
      <>
        {loading ? (
          <PostLoader single={true} />
        ) : (
          postStateValue.selectedPost && (
            <PostItem
              post={postStateValue.selectedPost}
              onVote={onVote}
              onDeletePost={onDeletePost}
              userVoteValue={
                postStateValue.postVotes.find(
                  (post) => post.postId === postStateValue.selectedPost?.id
                )?.voteValue
              }
              userIsCreator={
                postStateValue.selectedPost.creatorId === user?.uid
              }
            />
          )
        )}
        <Comments
          user={user as User}
          selectedPost={postStateValue.selectedPost as Post}
          communityId={postStateValue.selectedPost?.communityId as string}
        />
      </>
      <>
        {communityStateValue.currentCommunity && (
          <About communityData={communityStateValue.currentCommunity} />
        )}
      </>
    </PageContent>
  );
};
export default PostPage;
