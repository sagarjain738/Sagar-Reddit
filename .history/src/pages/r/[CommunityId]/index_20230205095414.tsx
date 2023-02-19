import { firestore } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import { doc, getDoc } from "firebase/firestore";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export default function CommunityPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props.communityData);
  return <>Hello</>;
}
type CommunityPageProps = {
  CommunityData: Community;
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
    return {
      props: { communityData: communityDoc?.data() },
    };
  } catch (error) {}
};
