import { auth, firestore } from "@/Firebase/clientApp";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

type CreateCommunitiesModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type CommunityType = "Public" | "Restricted" | "Private";

const CreateCommunitiesModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  setOpen,
}) => {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState<CommunityType>("Public");
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Here we will calculate the characters remaining

    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };
  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };

  const handleCreateCommunity = async () => {
    // Validate Community as it should be min 3 in length 21 char long max
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length <= 3) {
      setError(
        "Community Name must be between 3-21 characters, and can only contain letters, numbers or underscores"
      );
      return;
    }
    //  Validate Community as it should be 1 char long max & Unique
    const communityDocRef = doc(firestore, "communities", communityName);
    const communityDoc = await getDoc(communityDocRef);
    if (communityDoc.exists()) {
      setError(`Sorry, r/${communityName} is taken. Try another.`);
      return;
    }
    await setDoc(communityDocRef, {});

    // Create a community document in firestore
  };

  return (
    <Modal isOpen={open} onClose={setOpen} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          flexDirection="column"
          fontSize={15}
          padding={3}
        >
          Create a Community
        </ModalHeader>
        <Box pl={3} pr={3}>
          <Divider />
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" padding="10px 0">
            <Text fontWeight={600} fontSize={15}>
              Name
            </Text>
            <Text fontSize={11} color="gray.500">
              Community names including capitalization cannot be changes
            </Text>
            <Text
              color="gray.400"
              width="20px"
              position="relative"
              left="10px"
              top="28px"
            >
              r/
            </Text>
            <Input
              position="relative"
              value={communityName}
              size="sm"
              pl="22px"
              onChange={handleChange}
            />
            <Text
              fontSize="9pt"
              color={charsRemaining === 0 ? "red" : "gray.500"}
            >
              {charsRemaining} Characters Remaining
            </Text>
            <Text fontSize="9pt" pt={1} color="red">
              {error}
            </Text>
            <Box mt={4} mb={4}>
              <Text fontWeight={600} fontSize={15}>
                Community Types
              </Text>
              <Stack spacing={2}>
                <Checkbox
                  name="Public"
                  isChecked={communityType === "Public"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                    <Text fontSize="10pt" mr={1}>
                      Public
                    </Text>
                    <Text fontSize="8pt" pt={1} color="gray.500">
                      Anyone can view, post, And comment to this community
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="Restricted"
                  isChecked={communityType === "Restricted"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillEyeFill} color="gray.500" mr={2} />

                    <Text fontSize="10pt" mr={1}>
                      Restricted
                    </Text>
                    <Text fontSize="8pt" pt={1} color="gray.500">
                      Anyone can view this community, but only approved users
                      can post
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="Private"
                  isChecked={communityType === "Private"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={HiLockClosed} color="gray.500" mr={2} />

                    <Text fontSize="10pt" mr={1}>
                      Private
                    </Text>
                    <Text fontSize="8pt" pt={1} color="gray.500">
                      Only approved users can view and submit to this community
                    </Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </Box>
          </ModalBody>
        </Box>

        <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
          <Button
            variant="outline"
            height="30px"
            mr={3}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button height="30px" onClick={() => {}}>
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunitiesModal;
