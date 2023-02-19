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
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";

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
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState<CommunityType>("Public");

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
  return (
    <Modal isOpen={open} onClose={setOpen}>
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
          <ModalBody
            display="flex"
            flexDirection="column"
            padding="10px 0"
            border="1px solid red"
          >
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
                    <Text fontSize="10pt" mr={1}>
                      Public
                    </Text>
                    <Text fontSize="8pt" pt={1}>
                      Anyone can view, post, And comment to this community
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="Restricted"
                  isChecked={communityType === "Restricted"}
                  onChange={onCommunityTypeChange}
                >
                  Restricted
                </Checkbox>
                <Checkbox
                  name="Private"
                  isChecked={communityType === "Private"}
                  onChange={onCommunityTypeChange}
                >
                  Private
                </Checkbox>
              </Stack>
            </Box>
          </ModalBody>
        </Box>

        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunitiesModal;
