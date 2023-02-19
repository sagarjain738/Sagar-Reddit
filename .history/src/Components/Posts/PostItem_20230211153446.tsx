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
  post: Post;
  userIsCreator: boolean;
  userVoteValue: number | undefined;
  onVote: () => {};
  onDeletePost: () => {};
  onSelectPost: () => void;
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
    <Flex border="1px solid" borderColor="gray.300" bg="white" borderRadius={4}
    _hover={{
        borderColor"gray.500"
    }}
    >
      {post.title}
    </Flex>
  );
};
export default PostItem;
