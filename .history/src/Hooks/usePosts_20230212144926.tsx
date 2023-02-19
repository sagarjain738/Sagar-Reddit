import { firestore, storage } from "@/Firebase/clientApp";
import { Post, postState } from "@/atoms/postsAtom";
import { doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useRecoilState } from "recoil";

type usePostsProps = {};

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

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

      // Update the state so we no more see the deleted post
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
