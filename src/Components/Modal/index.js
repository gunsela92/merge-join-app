import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Modal,
} from '@chakra-ui/react'
import PropTypes from "prop-types";

const CustomModal = ({title, isOpen, onClose, children, onAction, actionText}) => {

  const handleActionButton = () => {
    onAction();
    onClose();
  }

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Kapat
            </Button>
            {onAction && actionText && (
                <Button colorScheme='teal' variant='outline' onClick={handleActionButton}>{actionText}</Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onAction: PropTypes.func,
  actionText: PropTypes.string,
}

CustomModal.defaultProps = {
  onAction: null,
  actionText: "",
}

export default CustomModal;
