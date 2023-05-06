import { useState, useEffect } from 'react';
import fetchImagesByQuery from 'services/api-service';
import Searchbar from './Searchbar';
import ScrollToTop from 'react-scroll-up';
import Container from './Container';
import { ToastContainer } from 'react-toastify';
import ImagesGallery from 'components/ImagesGallery';
import LoadMoreButton from 'components/Button';
import Spinner from 'components/Loader/Loader';


const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(totalImages / 12);
  const showButton = images.length > 0 && currentPage < maxPage;

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        setError(null);
        const { hits, totalHits } = await fetchImagesByQuery(
          query, currentPage
        );
        setImages(prevImages => [...prevImages, ...hits]);
        setTotalImages(totalHits);
        setIsSubmitted(true);
      } catch (error) {
        setError('Try again');
      } finally {
        setIsLoading(false);
      }
    }
    
    getImages();
  }, [query, currentPage]);

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setImages([]);
    setError(null);
    setIsSubmitted(false);
  };

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
          <Container>
            {!query && !images.length && (
          <div style={{ maxWidth: '280px', margin: 'auto' }}>
            <p>
              To start using this app please type your search query and press 🔍
              button
            </p>
          </div>
        )}
        {isSubmitted && images.length === 0 && (
          <p style={{ maxWidth: '206px', margin: 'auto' }}>
            Sorry but we did not find any images 😔 Please try again
          </p>
        )}
        {images.length > 0 && <ImagesGallery images={images} />}
        {isLoading && <Spinner />}
        {showButton && <LoadMoreButton onButtonClick={loadMore} />}
            
            <ScrollToTop
              showUnder={160}
              style={{
                color: '#ffff',
                backgroundColor: '#0ead69',
                padding: '20px',
                borderRadius: '50%',
              }}
            >
              <span>UP</span>
            </ScrollToTop>
            <ToastContainer autoClose={1500} />
          </Container>
      </>
  );
};

export default App;