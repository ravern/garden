import { Modal, ModalOverlay } from "@chakra-ui/core";

import SignUpForm from "./components/SignUpForm";

export default function SignUpModal(props) {
  return (
    <Modal {...props} size="xs" isCentered>
      <ModalOverlay />
      <SignUpForm />
    </Modal>
  );
}
