import { Post } from "@/atoms/postsAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";

type PostItemProps = {
  post: Post[];
  userIsCreator: boolean;
  userVoteValue: number;
  onVote: () => {};
  onDeletePost: () => {};
  onSelectPost: () => {};
};

const PostItem: React.FC<PostItemProps> = ({
  onDeletePost,
  onSelectPost,
  onVote,
  post,
  userIsCreator,
  userVoteValue,
}) => {
  return (
    <Flex border="1px solid" borderColor="" bg="white">
      {post.title}
    </Flex>
  );
};
export default PostItem;
