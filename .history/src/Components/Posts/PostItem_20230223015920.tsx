import usePosts from "@/Hooks/usePosts";
import { Post, postState } from "@/atoms/postsAtom";
import {
  Alert,
  AlertIcon,
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { useRecoilValue } from "recoil";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue: number | undefined;
  onVote: (
    event: React.MouseEvent<SVGAElement, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
};

const PostItem: React.FC<PostItemProps> = ({
  onDeletePost,
  onSelectPost,
  onVote,
  post,
  userIsCreator,
  userVoteValue,
}) => {
  const usePostStateValue = useRecoilValue(postState);
  const router = useRouter();
  const {} = usePosts();
  const [loadingImage, setLoadingImage] = useState(true);
  const [error, setError] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostPage = !onSelectPost; // we are specifying it only in Post page & not in
  //  [pid] Page.

  const handleDeletePost = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);
      if (!success) {
        throw new Error("Failed to delete Post");
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoadingDelete(false);
    if (singlePostPage) {
      router.replace(`/r/${post.communityId}`);
    }
  };

  return (
    <Flex
      border="1px solid"
      borderColor={singlePostPage ? "white" : "gray.300"}
      bg="white"
      borderRadius={singlePostPage ? "4px 4px 0 0" : "4px"}
      _hover={{
        borderColor: singlePostPage ? "none" : "gray.500",
      }}
      cursor={singlePostPage ? "unset" : "pointer"}
      onClick={() => onSelectPost && onSelectPost(post)}
    >
      <Flex
        direction="column"
        align="center"
        bg={singlePostPage ? "none" : "gray.100"}
        p={2}
        width="40px"
        borderRadius={singlePostPage ? "none" : "3px 0 0 3px"}
      >
        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "brand.100" : "gray.400"}
          fontSize={22}
          onClick={(event) => onVote(event, post, 1, post.communityId)}
          cursor="pointer"
        />
        <Text fontSize="9pt">{post.voteStatus}</Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? "#4379ff" : "gray.400"}
          fontSize={22}
          onClick={(event) => onVote(event, post, -1, post.communityId)}
          cursor="pointer"
        />
      </Flex>
      <Flex direction="column" width="100%">
        {error && (
          <Alert status="error">
            <AlertIcon />
            <Text>{error}</Text>
          </Alert>
        )}
        <Stack spacing={1} p="10px">
          <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
            {/* {Home Page Checks} */}
            <Text>
              Posted by u/{post.creatorDisplayName}{" "}
              {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}{" "}
            </Text>
          </Stack>
          <Text fontSize="12pt" fontWeight="600">
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justifyContent="center" align="center" p={2}>
              {loadingImage && (
                <Skeleton width="100%" height="200px" borderRadius={4} />
              )}
              <Image
                src={post.imageURL}
                maxH="460px"
                alt="Post Image"
                display={loadingImage ? "none" : "unset"}
                onLoad={() => setLoadingImage(false)}
              />
            </Flex>
          )}
        </Stack>

        {/* Footer */}

        <Flex ml={1} mb={0.5} color="gray.500">
          {/* First Icon */}
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{
              bg: "gray.200",
            }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.numberOfComments}</Text>
          </Flex>
          {/* Second Icon */}

          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{
              bg: "gray.200",
            }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>
          {/* Third Icon */}

          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{
              bg: "gray.200",
            }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>

          {/* Fourth Icon */}
          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{
                bg: "gray.200",
              }}
              cursor="pointer"
              onClick={handleDeletePost}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostItem;
