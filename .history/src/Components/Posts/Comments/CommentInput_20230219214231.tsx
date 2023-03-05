import { User } from "firebase/auth";
import React from "react";

type CommentInputProps = {
  commentText: string;
  setCommentText: string;
  user: User;
  createLoading: boolean;
};

const CommentInput: React.FC<CommentInputProps> = () => {
  return <div>Have a good coding</div>;
};
export default CommentInput;
