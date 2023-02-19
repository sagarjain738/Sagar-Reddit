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

type CreateCommunitiesModalProps = {
  open: boolean;
  handleClose: (): Dispatch<SetStateAction<boolean>> => void;
};

const CreateCommunitiesModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  handleClose,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>hahhaahahah</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunitiesModal;
