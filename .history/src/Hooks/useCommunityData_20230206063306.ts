import { communityState } from "@/atoms/communityAtoms";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const joinCommunity = () => {};
  const leaveCommunity = () => {};

  return {
    communityStateValue,
    joinCommunity,
    leaveCommunity,
  };
};
