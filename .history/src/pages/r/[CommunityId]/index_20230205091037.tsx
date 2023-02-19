import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

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
  return {
    props: { communityData },
  };
};
