import React from "react";
import { GetServerSideProps } from "next";

// type CommunityPageProps = {};

const CommunityPage: React.FC = () => {
  return <>Hello</>;
};
export default CommunityPage;

type Data = any

export async function getServerSideProps:GetServerSideProps<{communityData:Data}>() {
    return {
        props:{communityData}
    }
}
