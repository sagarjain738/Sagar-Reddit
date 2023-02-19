import { firestore } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import { getDoc, query } from "firebase/firestore";
import React, { useState } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = () => {
  const [loading, setLoading] = useState(false);

  try {
    const postQuery = query(firestore, "posts");
  } catch (error: any) {
    console.log("Posts Error", error.messege);
  }

  return <div>Posts</div>;
};
export default Posts;
