import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { SetStateAction, Dispatch } from "react";

type CreateCommunitiesModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCommunitiesModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  setOpen,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Modal isOpen={open} onClose={setOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>hahhaahahah</ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunitiesModal;
