import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import React from "react";

type CommentsProps = {
  user: User;
  post: Post;
};

const Comments: React.FC<CommentsProps> = () => {
  return <div>Have a good coding</div>;
};
export default Comments;
