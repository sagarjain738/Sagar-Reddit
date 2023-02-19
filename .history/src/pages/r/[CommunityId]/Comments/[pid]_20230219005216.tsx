import usePosts from "@/Hooks/usePosts";
import React from "react";

type PostPageProps = {};

const PostPage: React.FC<PostPageProps> = () => {
  const {} = usePosts();
  return <div>Have a good coding</div>;
};
export default PostPage;
