import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/Firebase/clientApp";

// type CommunityPageProps = {};

export default function CommunityPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props.communityData);
  return <>Hello</>;
}
type Data = {
  id: number;
  name: string;
};

export const getServerSideProps: GetServerSideProps<{
  communityData: any;
}> = async (context: GetServerSidePropsContext) => {
  try {
    const communityDocref = doc(
      firestore,
      "communities",
      context?.query.CommunityId as string
    );
    const communityDoc = await getDoc(communityDocref);
  } catch (error) {}
  return {
    props: { communityData: communityDoc },
  };
};
