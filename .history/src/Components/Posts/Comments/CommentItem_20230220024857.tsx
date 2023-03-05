import { Flex } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import React from "react";

export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};
type CommentItemProps = {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  loadingDelete,
  onDeleteComment,
  userId,
}) => {
  return <Flex></Flex>;
};
export default CommentItem;
