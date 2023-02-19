import CreatePostLink from "@/Components/Community/CreatePostLink";
import Header from "@/Components/Community/Header";
import NotFound from "@/Components/Community/NotFound";
import PageContent from "@/Components/Layout/PageContent";
import Posts from "@/Components/Posts/Posts";
import { firestore } from "@/Firebase/clientApp";
import { Community, communityState } from "@/atoms/communityAtoms";
import { doc, getDoc } from "firebase/firestore";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import safeJsonStringify from "safe-json-stringify";

export default function CommunityPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const setCommunityStateValue = useSetRecoilState(communityState);
  if (!props.communityData) {
    return <NotFound />;
  }

  useEffect(() => {
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityState,
    }));
  }, []);

  return (
    <>
      <Header communityData={props.communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={props.communityData} />
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
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
