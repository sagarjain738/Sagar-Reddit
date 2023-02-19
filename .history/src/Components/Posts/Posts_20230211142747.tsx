import { firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Community } from "@/atoms/communityAtoms";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);
  const { postStateValue, setPostStateValue } = usePosts();
  const getPosts = async () => {
    try {
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postsQuery);
      // store data in post STATE
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      console.log("posts", posts);
    } catch (error: any) {
      console.log("Posts Error", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>Posts</div>;
};
export default Posts;
