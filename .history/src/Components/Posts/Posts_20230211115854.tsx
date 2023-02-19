import { firestore } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import { collection, getDoc, query, where } from "firebase/firestore";
import React, { useState } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);

  try {
    const postQuery = query(
      collection(firestore, "posts"),
      where("communityId", "==", communityData.id)
    );
  } catch (error: any) {
    console.log("Posts Error", error.messege);
  }

  return <div>Posts</div>;
};
export default Posts;
