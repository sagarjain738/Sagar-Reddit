import { firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Community } from "@/atoms/communityAtoms";
import { Post } from "@/atoms/postsAtom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
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
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {postStateValue.posts.map((post) => (
        <PostItem
          onDeletePost={onDeletePost}
          onSelectPost={onSelectPost}
          onVote={onVote}
          post={post}
          userIsCreator={false}
          userVoteValue={}
          key={post.createdAt}
        />
      ))}
    </>
  );
};
export default Posts;
