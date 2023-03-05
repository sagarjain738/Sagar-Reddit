import { Box, Flex, Icon } from "@chakra-ui/react";
import { Timestamp } from "firebase/firestore";
import React from "react";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

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
  return (
    <Flex>
      <Box>
        <Icon as={FaReddit} />
      </Box>
    </Flex>
  );
};
export default CommentItem;
