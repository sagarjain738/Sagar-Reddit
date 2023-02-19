import React from "react";
import { GetServerSideProps } from "next";

// type CommunityPageProps = {};

const CommunityPage: React.FC = () => {
  return <>Hello</>;
};
export default CommunityPage;

type Data = any;

export const getServerSideProps: GetServerSideProps<{
  communityData: Data;
}> = async () => {
  return {
    props: { communityData },
  };
};
