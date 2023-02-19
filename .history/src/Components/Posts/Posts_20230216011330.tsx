import { auth, firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Community } from "@/atoms/communityAtoms";
import { Post } from "@/atoms/postsAtom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { Stack } from "@chakra-ui/react";
import PostLoader from "./PostLoader";
import {PostVote} from "../../atoms/postsAtom"

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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading ? (
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
              userVoteValue={postStateValue.postVotes.find(vote:PostVote)=>vote.postId}
              key={item.id}
            />
          ))}
        </Stack>
      )}
    </>
  );
};
export default Posts;
