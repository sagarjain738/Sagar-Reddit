import { Post } from "@/atoms/postsAtom";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";

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
  return <div>Have a good coding</div>;
};
export default PostItem;
