import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
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
          <Textarea
            value={commentText}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setCommentText(event.target.value)
            }
            placeholder="what are your thoughts?"
            fontSize="10px"
            borderRadius={4}
            minHeight="160px"
            pb={10}
            _placeholder={{
              color: "gray.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid black",
            }}
          />
          <Flex
            position="absolute"
            left="1px"
            right={0.1}
            bottom="1px"
            justify="flex-end"
            bg="gray.100"
            p="6px 8px"
            borderRadius="0 0 4px 4px"
          >
            <Button
              height="26px"
              disabled={!commentText.length}
              isLoading={createLoading}
              onClick={() => onCreateComment(commentText)}
            >
              Comment
            </Button>
          </Flex>
        </>
      ) : (
        <Flex></Flex>
      )}
    </Flex>
  );
};
export default CommentInput;
