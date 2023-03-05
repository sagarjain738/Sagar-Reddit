import { firestore } from "@/Firebase/clientApp";
import usePosts from "@/Hooks/usePosts";
import { Post, postState } from "@/atoms/postsAtom";
import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import CommentInput from "./CommentInput";
import CommentItem, { Comment } from "./CommentItem";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  communityId,
  selectedPost,
  user,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const setPostState = useSetRecoilState(postState);
  const { postStateValue, setPostStateValue } = usePosts();
  const [loadingDeleteId, setLoadingDeleteId] = useState("");

  const getPostComment = async () => {
    try {
      const commentQuery = query(
        collection(firestore, "comments"),
        where("postId", "==", selectedPost?.id),
        orderBy("createdAt", "desc")
      );
      const commentDocs = await getDocs(commentQuery);
      const comments = commentDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(comments as Comment[]);
    } catch (error) {
      console.log("Error in getPostComment", error);
    }
    setFetchLoading(false);
  };

  const onCreateComment = async () => {
    setCreateLoading(true);
    try {
      const batch = writeBatch(firestore);
      const commentDocRef = doc(collection(firestore, "comments"));
      // Create a new Comment
      const newComment: Comment = {
        id: commentDocRef.id,
        creatorId: user.uid!,
        creatorDisplayText: user.email!.split("@")[0],
        communityId,
        postId: selectedPost?.id!,
        postTitle: selectedPost?.title!,
        text: commentText,
        createdAt: serverTimestamp() as Timestamp,
      };

      batch.set(commentDocRef, newComment);
      newComment.createdAt = { seconds: Date.now() / 1000 } as Timestamp;
      // Update the posts collection with updated amount of comments
      const postDocRef = doc(firestore, "posts", selectedPost?.id as string);
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });
      await batch.commit();

      // Update the client Recoil State
      setCommentText("");
      setComments((prev) => [newComment, ...prev]);
      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
      }));
      // setPostStateValue((prev) => ({
      //   ...prev,
      //   selectedPost: {
      //     ...prev.selectedPost,
      //     numberOfComments: prev.selectedPost?.numberOfComments! + 1,
      //   } as Post,
      // }));
    } catch (error: any) {
      console.log("Comment Create Error", error);
    }
    setCreateLoading(false);
  };

  const onDeleteComment = async (comment: Comment) => {
    // Delete comment Document
    // update post numberOfComment -1
    // update client recoil state
    setLoadingDeleteId(comment.id);
    try {
      const batch = writeBatch(firestore);
      const commentDocRef = doc(firestore, "comment", comment.id);
      batch.delete(commentDocRef);

      const postDocRef = doc(firestore, "posts", selectedPost?.id!);
      batch.update(postDocRef, {
        numberOfComments: increment(-1),
      });
      await batch.commit();

      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! - 1,
        } as Post,
      }));

      setComments((prev) => prev.filter((item) => item.id !== comment.id));
    } catch (error) {
      console.log("Error in Comment Delete");
    }
    setLoadingDeleteId("");
  };

  useEffect(() => {
    if (!selectedPost) return;
    getPostComment();
  }, [selectedPost, postStateValue.postVotes]);

  return (
    <Box bg="white" borderRadius="0 0 4px 4px">
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
      >
        {!fetchLoading && (
          <CommentInput
            commentText={commentText}
            createLoading={createLoading}
            onCreateComment={onCreateComment}
            setCommentText={setCommentText}
            user={user}
          />
        )}
      </Flex>
      <Stack spacing={6} p={2}>
        {fetchLoading ? (
          <>
            {[0, 1, 2].map((item) => (
              <Box key={item} padding="6" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={2} spacing={4} />
              </Box>
            ))}
          </>
        ) : (
          <>
            {comments.length === 0 ? (
              <Flex
                direction="column"
                justify="center"
                align="center"
                borderTop="1px solid"
                borderColor="gray.100"
                p={20}
              >
                <Text fontWeight={700} opacity={0.3}>
                  No Comments Yet
                </Text>
              </Flex>
            ) : (
              <>
                {comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    loadingDelete={loadingDeleteId === comment.id}
                    onDeleteComment={onDeleteComment}
                    userId={user.uid}
                  />
                ))}
              </>
            )}
          </>
        )}
      </Stack>
    </Box>
  );
};
export default Comments;
