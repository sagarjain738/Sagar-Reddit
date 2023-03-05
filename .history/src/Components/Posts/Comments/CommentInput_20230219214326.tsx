import { User } from "firebase/auth";
import React from "react";

type CommentInputProps = {
  commentText: string;
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
  user: User;
  createLoading: boolean;
  onCreateComment: (commentText: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  commentText,
  createLoading,
  onCreateComment,
  setCommentText,
  user,
}) => {
  return <div>Have a good coding</div>;
};
export default CommentInput;
