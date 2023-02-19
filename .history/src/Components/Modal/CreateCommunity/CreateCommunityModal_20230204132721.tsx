import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

type CreateCommunitiesModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCommunitiesModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  setOpen,
}) => {
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
            <Text>r/</Text>
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
