import { useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Modal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null);
    const finalRef = useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

export default Modal;
