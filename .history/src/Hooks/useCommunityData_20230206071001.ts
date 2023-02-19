import { auth } from "@/Firebase/clientApp";
import { Community, communityState } from "@/atoms/communityAtoms";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const joinCommunity = (communityData: Community) => {};
  const leaveCommunity = (communityId: string) => {};

  const onJoinLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    //  Is the user Signed In
    //   if not open Auth Modal

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  return {
    communityStateValue,
    onJoinLeaveCommunity,
  };
};

export default useCommunityData;
