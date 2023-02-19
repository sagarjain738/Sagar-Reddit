import { auth } from "@/Firebase/clientApp";
import { Community } from "@/atoms/communityAtoms";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine } from "react-icons/ri";
type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const selectedFileRef = useRef<string>("");
  const router = useRouter();
  const [user] = useAuthState(auth);
  return (
    <Box position="sticky" top="1rem">
      <Flex
        justify="space-between"
        align="center"
        bg="blue.400"
        color="white"
        p={3}
        borderRadius="4px 4px 0 0"
      >
        <Text fontSize="10pt" fontWeight={700}>
          About Community
        </Text>
        <Icon as={HiOutlineDotsHorizontal} />
      </Flex>
      <Flex direction="column" p={3} bg="white" borderRadius="0 0 4px 4px">
        <Stack>
          <Flex width="100%" p={2} fontSize="10pt" fontWeight={700}>
            <Flex direction="column" flexGrow={1}>
              <Text>{communityData.numberOfMembers.toLocaleString()}</Text>
              <Text>Members</Text>
            </Flex>
            <Flex direction="column" flexGrow={1}>
              <Text>1</Text>
              <Text>Online</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex align="center" width="100%" fontWeight={500} fontSize="10pt">
            <Icon as={RiCakeLine} fontSize={18} mr={2} />
            {communityData.createdAt && (
              <Text>
                Created{" "}
                {moment(
                  new Date(communityData.createdAt?.seconds * 1000)
                ).format("MMM DD, YYYY")}
              </Text>
            )}
          </Flex>
          <Link href={`/r/${router.query.communityId}/Submit`}>
            <Button mt={3} height="30px">
              Create Post
            </Button>
          </Link>
          {console.log(user?.uid, communityData.creatorId)}
          {user?.uid === communityData.creatorId && (
            <>
              <Divider />
              <Stack spacing={1} fontSize="10pt">
                <Text fontWeight={600}>Admin</Text>
                <Flex align="center" justify="space-between">
                  <Text
                    color="blue.500"
                    cursor="pointer"
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    Change Image
                  </Text>
                </Flex>
              </Stack>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
export default About;
