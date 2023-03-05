import { User } from "firebase/auth";
import React from "react";

type CommentInputProps = {
  commentText: string;
  setCommentText: string;
  user: User;
  createLoading: boolean;
  onCreateComment: (commentText: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = () => {
  return <div>Have a good coding</div>;
};
export default CommentInput;
