import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// type CommunityPageProps = {};

const CommunityPage: React.FC = () => {
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
