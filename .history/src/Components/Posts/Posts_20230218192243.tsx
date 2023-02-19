import { auth, firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Community } from "@/atoms/communityAtoms";
import { Post, PostVote } from "@/atoms/postsAtom";
import { Stack } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PostItem from "./PostItem";
import PostLoader from "./PostLoader";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const {
    postStateValue,
    setPostStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
  } = usePosts();

  const getPosts = async () => {
    try {
      setLoading(true);
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postsQuery);
      // store data in post STATE
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log("Posts Error", error);
    }
    setLoading(false);
  };

  const getCommunityPostVotes = async (communityId: string) => {
    try {
      const postVotesQuery = query(
        collection(firestore, "users", `${user?.uid}/postVotes`),
        where("communityId", "==", communityId)
      );

      const postVoteDocs = await getDocs(postVotesQuery);
      const postVotesNew = postVoteDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log("Fetched Data", postVotesNew);
      setPostStateValue((prev) => ({
        ...prev,
        postVotes: postVotesNew as PostVote[],
      }));
    } catch (error: any) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getPosts();
    // getCommunityPostVotes(communityData.id);
    // getUserPostVotes();
  }, []);

  return (
    <>
      {loading && postStateValue.postVotes ? (
        <PostLoader />
      ) : (
        <Stack>
          {postStateValue.posts.map((item: Post) => (
            <PostItem
              onDeletePost={onDeletePost}
              onSelectPost={onSelectPost}
              onVote={onVote}
              post={item}
              userIsCreator={user?.uid === item.creatorId}
              userVoteValue={
                postStateValue.postVotes.find((vote) => vote.postId === item.id)
                  ?.voteValue
                // check if theres already postVote by User for this & if theres gets its voteValue
              }
              key={item.id}
            />
          ))}
        </Stack>
      )}
    </>
  );
};
export default Posts;
