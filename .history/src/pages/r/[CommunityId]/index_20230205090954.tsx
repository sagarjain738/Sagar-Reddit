import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

// type CommunityPageProps = {};

export default function CommunityPage(props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(props.)
  return <>Hello</>;
};
;

type Data = {
  id: number;
  name: string;
};

export const getServerSideProps: GetServerSideProps<{
  communityData: Data;
}> = async (context: GetServerSidePropsContext) => {
  const data = {
    id: 1,
    name: "Sagar",
  };
  return {
    props: { communityData: data },
  };
};
