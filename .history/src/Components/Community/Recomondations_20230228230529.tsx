import React, { useEffect } from "react";

const Recomondations = () => {
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
