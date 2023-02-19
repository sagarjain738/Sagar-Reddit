import { Community, communityState } from "@/atoms/communityAtoms";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const joinCommunity = () => {};
  const leaveCommunity = () => {};

  const onJoinLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    //  Is the user Signed In
    //   if not open Auth Modal
  };

  return {
    communityStateValue,
    joinCommunity,
    leaveCommunity,
  };
};

export default useCommunityData;
