import { GalleryImage } from './ImagesGalleryItem.styled';
import PropTypes from 'prop-types';
import ImageModal from 'components/Modal';
import { useState } from 'react';

const ImagesGalleryItem = ({ webformatURL, tags, info }) => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          onclose={closeModal}
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
