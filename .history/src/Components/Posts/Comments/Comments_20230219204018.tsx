import { Post } from "@/atoms/postsAtom";
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

  return <div>Have a good coding</div>;
};
export default Comments;
