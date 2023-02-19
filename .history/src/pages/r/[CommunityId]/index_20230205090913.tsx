import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

// type CommunityPageProps = {};

const CommunityPage: React.FC = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(props.)
  return <>Hello</>;
};
export default CommunityPage;

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
