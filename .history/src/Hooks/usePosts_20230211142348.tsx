import { postState } from "@/atoms/postsAtom";
import React from "react";
import { useRecoilState } from "recoil";

type usePostsProps = {};

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  return <div>Have a good coding</div>;
};
export default usePosts;
