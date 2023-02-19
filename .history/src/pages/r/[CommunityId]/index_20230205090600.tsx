import React from "react";
import { GetServerSideProps } from "next";

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
}> = async () => {
  const data = {
    id: 1,
    name: "Sagar",
  };
  return {
    props: {},
  };
};
