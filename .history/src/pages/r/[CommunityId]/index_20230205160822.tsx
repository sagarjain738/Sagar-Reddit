import Header from "@/Components/Community/Header";
import NotFound from "@/Components/Community/NotFound";
import PageLayout from "@/Components/Layout/PageLayout";
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
  if (!props.communityData) return <NotFound />;
  return (
    <>
      <Header communityData={props.communityData} />
      <PageLayout>
        <>
          <div>LHS</div>
        </>
        <>
          <div>RHS</div>
        </>
      </PageLayout>
    </>
  );
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
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({
                id: communityDoc.id,
                ...communityDoc.data(),
              })
            )
          : "",
      },
    };
  } catch (error) {}
};
