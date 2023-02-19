import { firestore } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import { doc, getDoc } from "firebase/firestore";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import safeJsonStringify from "safe-json-stringify";

export default function CommunityPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <div>Welcome to {props.communityData.id}</div>;
}

export const getServerSideProps: GetServerSideProps<{
  communityData: Community;
}> = async (context: GetServerSidePropsContext) => {
  try {
    const communityDocref = doc(
      firestore,
      "communities",
      context?.query.CommunityId as string
    );
    const communityDoc = await getDoc(communityDocref);
    return {
      props: { communityData: communityDoc?.data() },
    };
  } catch (error) {}
};
