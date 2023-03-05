import { Flex } from "@chakra-ui/react";
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
  return (
    <Flex direction="column" position="relative">
      {user ? <></> : <></>}
    </Flex>
  );
};
export default CommentInput;
