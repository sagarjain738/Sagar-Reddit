import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type CreateCommunitiesModalProps = {
  open: boolean;
};

const CreateCommunitiesModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
}) => {
  return (
    <Modal>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>hahhaahahah</ModalBody>
        <ModalFooter>
          <Button>Close</Button>
          <Button>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CreateCommunitiesModal;
