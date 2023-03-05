import useCommunityData from "@/Hooks/useCommunityData";
import { Community } from "@/atoms/communityAtoms";
import React, { useEffect, useState } from "react";

const Recomondations = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(false);
  const { communityStateValue, onJoinLeaveCommunity } = useCommunityData();

  const getCommunityRecommendation = async (): Promise => {
    try {
      setLoading(true);
    } catch (error) {
      console.log("getCommunityRecommendation");
    }
    setLoading(false);
  };
  useEffect(() => getCommunityRecommendation(), []);
  return <div>Have a good coding</div>;
};
export default Recomondations;
