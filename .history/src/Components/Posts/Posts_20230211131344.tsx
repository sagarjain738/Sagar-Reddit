import { firestore } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useState } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);
  const getPosts = async () => {
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postQuery);
    } catch (error: any) {
      console.log("Posts Error", error.messege);
    }
  };
  return <div>Posts</div>;
};
export default Posts;
