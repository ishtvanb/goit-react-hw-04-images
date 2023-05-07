import { useState } from 'react';
import { GalleryImage } from './ImagesGalleryItem.styled';
import PropTypes from 'prop-types';
import ImageModal from 'components/Modal';

const ImagesGalleryItem = ({ webformatURL, tags, info }) => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  
    return (
      <>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          info={info}
          onClick={openModal}
        />
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          largeImageUrl={info.largeImageUrl}
          tags={tags}
        />
      </>
  );
};

ImagesGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
};

export default ImagesGalleryItem;
