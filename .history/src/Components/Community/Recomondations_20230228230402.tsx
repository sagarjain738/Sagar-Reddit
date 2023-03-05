import React, { useEffect } from "react";

const Recomondations = () => {
  const getCommunityRecommendation = async (): void => {
    try {
    } catch (error) {
      console.log("getCommunityRecommendation");
    }
  };
  useEffect(() => getCommunityRecommendation(), []);
  return <div>Have a good coding</div>;
};
export default Recomondations;
