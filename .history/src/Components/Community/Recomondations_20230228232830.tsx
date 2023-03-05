import { firestore } from "@/Firebase/clientApp";
import useCommunityData from "@/Hooks/useCommunityData";
import { Community } from "@/atoms/communityAtoms";
import { Flex } from "@chakra-ui/react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Recomondations = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(false);
  const { communityStateValue, onJoinLeaveCommunity } = useCommunityData();

  const getCommunityRecommendation = async () => {
    setLoading(true);
    try {
      const communityQuery = query(
        collection(firestore, "communities"),
        orderBy("numberOfMembers", "desc"),
        limit(5)
      );
      const communityDocs = await getDocs(communityQuery);
      const communities = communityDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommunities(communities as Community[]);
    } catch (error) {
      console.log("getCommunityRecommendation");
    }
    setLoading(false);
  };
  useEffect(() => {
    getCommunityRecommendation();
  }, []);
  return (
    <Flex
      direction="column"
      bg="white"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="4px 4px 0 0"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        height="70px"
        borderRadius="4px 4px 0 0"
        fontWeight={700}
        bgImage="url(/images/recCommsArt.png)"
        backgroundSize="cover"
      ></Flex>
      <Flex></Flex>
    </Flex>
  );
};
export default Recomondations;
