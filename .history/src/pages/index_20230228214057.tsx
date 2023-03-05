import CreatePostLink from "@/Components/Community/CreatePostLink";
import PageContent from "@/Components/Layout/PageContent";
import PostItem from "@/Components/Posts/PostItem";
import PostLoader from "@/Components/Posts/PostLoader";
import { auth, firestore } from "@/Firebase/clientApp";
import useCommunityData from "@/Hooks/useCommunityData";
import usePosts from "@/Hooks/usePosts";
import { Post } from "@/atoms/postsAtom";
import { Stack } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setloading] = useState(false);
  const { communityStateValue } = useCommunityData();
  const {
    setPostStateValue,
    postStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
    getCommunityPostVotes,
  } = usePosts();

  const buildUserHomeField = async () => {
    setloading(true);
    try {
      if (communityStateValue.mySnippets.length) {
        const myCommunityId = communityStateValue.mySnippets.map(
          (snippet) => snippet.communityId
        );
        const postQuery = query(
          collection(firestore, "posts"),
          where("communityId", "in", myCommunityId),
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
      } else {
        buildNoUserHomeField();
      }
    } catch (error) {
      console.log("BuildUserHomeField Error");
    }
    setloading(false);
  };

  const buildNoUserHomeField = async () => {
    setloading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("voteStatus", "desc"),
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

  const getUserPostVotes = async () => {
    try {
      const postIds = postStateValue.posts.map((post) => post.id);
      const postVotesQuery = query(
        collection(firestore, `users/${user?.uid}/postVotes`),
        where("postId", "in", postIds)
      );
      const postVoteDocs = await getDocs(postVotesQuery);
    } catch (error) {
      console.log("getUserPostVotes Error");
    }
  };

  useEffect(() => {
    if (!user && !loadingUser) buildNoUserHomeField();
  }, [user, loadingUser]);

  useEffect(() => {
    // We have added new key to communityStateValue because we would like to call the function
    // buildUserHomeField(); when we are sure that we have fetched the snippets and there are
    // some snippets for the user as the user may be new, so once we get confirmation that the data
    // has been fetched successfully then we can check for the size.
    // we are not adding User dependancy here because the when we call the communityState here
    // the hook useCommunityData is in background updating data once the user is available
    // using getMySnippets();
    // Thats why we are not taking any user dependancy & directly checking if data is fetched or not.

    if (communityStateValue.snippetsFetched) buildUserHomeField();
  }, [communityStateValue.snippetsFetched]);

  useEffect(() => {
    if (user && postStateValue.posts.length) getUserPostVotes();
  }, [user, postStateValue.posts]);

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
          <>
            <CreatePostLink />
            {loading ? (
              <PostLoader />
            ) : (
              <Stack>
                {postStateValue.posts.map((post) => (
                  <PostItem
                    key={post.id}
                    onDeletePost={onDeletePost}
                    onSelectPost={onSelectPost}
                    onVote={onVote}
                    post={post}
                    userIsCreator={post.creatorId === user?.uid}
                    userVoteValue={
                      postStateValue.postVotes.find(
                        (posts) => posts.postId === post.id
                      )?.voteValue
                    }
                    homePage={true}
                  />
                ))}
              </Stack>
            )}
          </>
          <>Recomendation</>
        </PageContent>
      </main>
    </>
  );
}
