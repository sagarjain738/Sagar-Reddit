import { Community } from "@/atoms/communityAtoms";
import React from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = () => {
  return <div>Posts</div>;
};
export default Posts;
