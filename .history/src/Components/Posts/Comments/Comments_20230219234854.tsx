import { Post } from "@/atoms/postsAtom";
import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  communityId,
  selectedPost,
  user,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const onCreateComment = async (commentText: string) => {
    try {
    } catch (error: any) {
      console.log("Comment Create Error", error);
    }
  };

  const onDeleteComments = async (comment: any) => {};

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Box bg="white" borderRadius="0 0 4px 4px">
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
      >
        <CommentInput
          commentText={commentText}
          createLoading={createLoading}
          onCreateComment={onCreateComment}
          setCommentText={setCommentText}
          user={user}
        />
      </Flex>
    </Box>
  );
};
export default Comments;
