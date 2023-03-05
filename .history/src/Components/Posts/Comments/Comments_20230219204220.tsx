import { Post } from "@/atoms/postsAtom";
import { Box } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { useEffect } from "react";

type CommentsProps = {
  user: User;
  post: Post;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({ communityId, post, user }) => {
  const onCreateComment = async (commentText: string) => {};

  const onDeleteComments = async (comment: any) => {};

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Box bg="white" borderRadius="0 0 4px 4px">
      Here i present you My Comments
    </Box>
  );
};
export default Comments;
