import { Post } from "@/atoms/postsAtom";
import React from "react";

type PostItemProps = {
  post: Post[];
};

const PostItem: React.FC<PostItemProps> = () => {
  return <div>Have a good coding</div>;
};
export default PostItem;
