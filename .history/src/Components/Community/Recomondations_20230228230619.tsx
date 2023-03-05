import { Community } from "@/atoms/communityAtoms";
import React, { useEffect, useState } from "react";

const Recomondations = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const getCommunityRecommendation = async (): Promise<void> => {
    try {
      console.log("");
    } catch (error) {
      console.log("getCommunityRecommendation");
    }
  };
  useEffect(() => getCommunityRecommendation(), []);
  return <div>Have a good coding</div>;
};
export default Recomondations;
