import { firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Post, postState } from "@/atoms/postsAtom";
import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  Timestamp,
  collection,
  doc,
  increment,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import CommentInput from "./CommentInput";
import { Comment } from "./CommentItem";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  communityId,
  selectedPost,
  user,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const setPostState = useSetRecoilState(postState);
  const { postStateValue, setPostStateValue } = usePosts();

  const onCreateComment = async () => {
    setCreateLoading(true);
    try {
      const batch = writeBatch(firestore);
      const commentDocRef = doc(collection(firestore, "comments"));
      // Create a new Comment
      const newComment: Comment = {
        id: commentDocRef.id,
        creatorId: user.uid!,
        creatorDisplayText: user.email!.split("@")[0],
        communityId,
        postId: selectedPost?.id!,
        postTitle: selectedPost?.title!,
        text: commentText,
        createdAt: serverTimestamp() as Timestamp,
      };

      batch.set(commentDocRef, newComment);

      // Update the posts collection with updated amount of comments
      const postDocRef = doc(firestore, "posts", selectedPost?.id as string);
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });
      await batch.commit();

      // Update the client Recoil State
      setCommentText("");
      setComments((prev) => [newComment, ...prev]);
      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
      }));
      setPostStateValue((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments + 1,
        } as Post,
      }));
    } catch (error: any) {
      console.log("Comment Create Error", error);
    }
    setCreateLoading(false);
  };

  const onDeleteComments = async (comment: any) => {};

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Box bg="white" borderRadius="0 0 4px 4px">
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
      >
        <CommentInput
          commentText={commentText}
          createLoading={createLoading}
          onCreateComment={onCreateComment}
          setCommentText={setCommentText}
          user={user}
        />
      </Flex>
    </Box>
  );
};
export default Comments;
