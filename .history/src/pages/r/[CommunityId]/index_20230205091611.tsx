import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { Firestore, doc } from "firebase/firestore";
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
    const firestor: Firestore = firestore;
    const communityDocref = doc(
      firestor,
      "communities",
      context?.query.CommunityId as string
    );
  } catch (error) {}
  return {
    props: { communityData },
  };
};
