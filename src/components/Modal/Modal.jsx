import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalBackdrop, ModalContent, Image } from './Modal.styled';

Modal.setAppElement('#root');

const ImageModal = ({ largeImageUrl, tags, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image modal"
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalContent {...props}>{children}</ModalContent>
      )}
      overlayElement={(props, contentElement) => (
        <ModalBackdrop {...props}>{contentElement}</ModalBackdrop>
      )}  
  >
      <div>
        <Image src={largeImageUrl} alt={tags} />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  };

export default ImageModal;
