import { Post } from "@/atoms/postsAtom";
import React from "react";

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
