import PageContent from "@/Components/Layout/PageContent";
import PostLoader from "@/Components/Posts/PostLoader";
import { auth, firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { communityState } from "@/atoms/communityAtoms";
import { Post } from "@/atoms/postsAtom";
import { Inter } from "@next/font/google";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setloading] = useState(false);
  const communityStateValue = useRecoilValue(communityState);
  const { setPostStateValue ,postStateValue} = usePosts();

  const buildUserHomeField = () => {};

  const buildNoUserHomeField = async () => {
    setloading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("votestatus", "desc"),
        limit(10)
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error) {
      console.log("BuildNoUserHomeField");
    }
    setloading(false);
  };

  const getUserPostVotes = () => {};

  useEffect(() => {
    if (!user && !loadingUser) buildNoUserHomeField();
  }, [user, loadingUser]);

  return (
    <>
      <Head>
        <title>Sag-Reddit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <PageContent>
          <>{loading ? <PostLoader /> : }</>
          <>Recomendation</>
        </PageContent>
      </main>
    </>
  );
}
