import { Community } from "@/atoms/communityAtoms";
import React, { useState } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = () => {
  const [loading, setLoading] = useState(false);

  return <div>Posts</div>;
};
export default Posts;
