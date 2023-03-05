import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import React from "react";

type CommentsProps = {
  user: User;
  post: Post;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({ communityId, post, user }) => {
  return <div>Have a good coding</div>;
};
export default Comments;
