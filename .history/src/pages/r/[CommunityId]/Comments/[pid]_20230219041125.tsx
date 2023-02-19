import PageContent from "@/Components/Layout/PageContent";
import PostItem from "@/Components/Posts/PostItem";
import PostLoader from "@/Components/Posts/PostLoader";
import { auth, firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { communityState } from "@/atoms/communityAtoms";
import { Post } from "@/atoms/postsAtom";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue } from "recoil";

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
  const communityStateValue = useRecoilValue(communityState);

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
        {/* Comments */}
      </>
      <>{}</>
    </PageContent>
  );
};
export default PostPage;
