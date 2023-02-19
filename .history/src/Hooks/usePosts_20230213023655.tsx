import { firestore, storage } from "@/Firebase/clientApp";
import { Post, postState } from "@/atoms/postsAtom";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useRecoilState } from "recoil";

type usePostsProps = {};

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async (posts: Post, vote: number, cummunityId: string) => {
    if (newVote) {
      // Add OR Subtract 1 to/from post.voteState
      // Create a new postVote Document

      // Existing vote - they have voted on the post before

      if (removingVote) {
        // Add OR Subtract 1 to/from post.votestatus
        // Delete the postVote document
      }
      // Flipping their vote (up => Down OR down => Up)
      else {
        // add/subtract 2 to / from post.votestatus
        // updating the existing postVote document
      }
    }
  };

  const onSelectPost = () => {};

  const onDeletePost = async (post: Post): Promise<boolean> => {
    try {
      // Before deleting post check if post has image on it.
      if (post.imageURL) {
        // If yes then delete the image from storage
        const imageRef = ref(storage, `posts/${post.id}/image`); // ref to upload file
        await deleteObject(imageRef);
      }
      // Delete the post document from firestore
      const docRef = doc(firestore, "posts", post.id!);
      await deleteDoc(docRef);
      // Update the state so we no more see the deleted post
      setPostStateValue((prev) => ({
        ...prev,
        posts: prev.posts.filter((item) => item.id !== post.id),
      }));
    } catch (error) {
      return false;
    }
    return true;
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
export default usePosts;
