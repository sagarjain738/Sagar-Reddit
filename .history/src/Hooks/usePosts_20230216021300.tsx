import { auth, firestore, storage } from "@/Firebase/clientApp";
import { Post, PostVote, postState } from "@/atoms/postsAtom";
import { collection, deleteDoc, doc, writeBatch } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

type usePostsProps = {};

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);
  const [user] = useAuthState(auth);
  const onVote = async (post: Post, vote: number, communityId: string) => {
    // Check for user => if not , open Auth Modal
    console.log("Initial Values", postStateValue.postVotes);
    try {
      const { voteStatus } = post;
      console.log(post.id, postStateValue.postVotes);
      const existingVote = postStateValue.postVotes.find(
        (vote) => vote.postId === post.id
      );

      const batch = writeBatch(firestore);
      // Creating multiple new variables so we can update the state in final easily
      const updatedPost = { ...post };
      const updatedPosts = [...postStateValue.posts];
      let updatedPostVotes = [...postStateValue.postVotes];
      let voteChange = vote;

      if (!existingVote) {
        // Add OR Subtract 1 to/from post.voteState
        // Create a new postvote document
        const postVoteRef = doc(
          collection(firestore, "users", `${user?.uid}/postVotes`)
        );
        // Create a new postVote Document
        const newVote: PostVote = {
          id: postVoteRef.id,
          postId: post.id!,
          communityId,
          voteValue: vote, // 1 OR -1
        };
        batch.set(postVoteRef, newVote);
        // Update the vote status in new variable so we can use it to update final data
        updatedPost.voteStatus = voteStatus + vote;
        updatedPostVotes = [...updatedPostVotes, newVote];
      }
      // Existing vote - they have voted on the post before
      else {
        const postVoteRef = doc(
          firestore,
          "users",
          `${user?.uid}/postVotes/${existingVote.id}`
        );
        if (existingVote.voteValue === vote) {
          // Add OR Subtract 1 to/from post.votestatus
          updatedPost.voteStatus = voteStatus - vote;
          // remove the voted PostVote because you undo your vote with same vote
          updatedPostVotes = updatedPostVotes.filter(
            (votes) => votes.id !== existingVote.id
          );
          // Delete the postVote document
          batch.delete(postVoteRef);
          voteChange *= -1;
        }
        // Flipping their vote (up => Down OR down => Up)
        else {
          // add/subtract 2 to / from post.votestatus
          updatedPost.voteStatus = voteStatus + 2 * vote;

          // Get the index of existing vote to update it with new Value
          const voteIndex = postStateValue.postVotes.findIndex(
            (votes) => votes.id === existingVote.id
          );
          // update the postVotes array of above index with voteValue to vote
          updatedPostVotes[voteIndex] = {
            ...existingVote,
            voteValue: vote,
          };

          // updating the existing postVote document
          batch.update(postVoteRef, {
            voteValue: vote,
          });

          voteChange = 2 * vote;
        }
      }

      const postIndex = postStateValue.posts.findIndex(
        (item) => item.id === post.id
      );
      updatedPosts[postIndex] = updatedPost;

      const postRef = doc(firestore, "posts", post.id!);
      batch.update(postRef, {
        voteStatus: voteStatus + voteChange,
      });

      await batch.commit();
      setPostStateValue((prev) => ({
        ...prev,
        posts: updatedPosts,
        postVotes: updatedPostVotes,
      }));
      // update the frontEnd with updated state values
      console.log("Updated State", postStateValue.postVotes);
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };

  const onSelectPost = () => {};

  const onDeletePost = async (post: Post): Promise<boolean> => {
    try {
      // Before deleting post check if post has image on it.
      if (post.imageURL) {
        // If yes then delete the image from storage
        const imageRef = ref(storage, `posts/${post.id}/image`); // ref to upload file
        await deleteObject(imageRef);
      }
      // Delete the post document from firestore
      const docRef = doc(firestore, "posts", post.id!);
      await deleteDoc(docRef);
      // Update the state so we no more see the deleted post
      setPostStateValue((prev) => ({
        ...prev,
        posts: prev.posts.filter((item) => item.id !== post.id),
      }));
    } catch (error) {
      return false;
    }
    return true;
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
export default usePosts;
