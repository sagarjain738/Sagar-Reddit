import { Flex, Text } from "@chakra-ui/react";
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
      {user ? (
        <>
          <Text mb={1}>
            Comment as{" "}
            <span
              style={{
                color: "#3182CE",
              }}
            >
              {user?.email?.split("@")[0]}
            </span>{" "}
          </Text>
        </>
      ) : (
        <>
          <Text>No User</Text>
        </>
      )}
    </Flex>
  );
};
export default CommentInput;
