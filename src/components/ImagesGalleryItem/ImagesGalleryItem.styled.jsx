import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
display: block;
  width: 100%;
  height: 100%;
`;

