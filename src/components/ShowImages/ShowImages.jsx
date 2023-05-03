import { Component } from 'react';
import fetchImagesByQuery from 'services/api-service';
import ImagesGallery from 'components/ImagesGallery/ImagesGallery';
import LoadMoreButton from 'components/Button';
import Spinner from 'components/Loader/Loader';
import PropTypes from 'prop-types';

class ShowImages extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };
  state = {
    images: [],
    page: 0,
    totalPages: 0,
    query: [],
    isLoading: false,
    error: null,
    showLoadMoreButton: true,
    isSubmitted: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.query !== nextProps.query) {
      return { page: 1, query: nextProps.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    
    if (
      (nextQuery !== prevQuery && nextQuery !== '') ||
      this.state.page !== prevState.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    if (this.state.error) {
      this.setState({ error: null });
    }
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await fetchImagesByQuery(
        this.props.query,
        this.state.page
      );
      this.setState(prev => ({
        images: this.state.page === 1 ? hits : [...prev.images, ...hits],
        totalPages: Math.floor(totalHits / 12),
        showLoadMoreButton: true,
        isSubmitted: true,
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    this.setState({ isLoading: true });
    this.setState({ showLoadMoreButton: false });
  };

  render() {
    const {
      query,
      images,
      isLoading,
      error,
      showLoadMoreButton,
      isSubmitted,
      page,
      totalPages,
    } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <>
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

        {showLoadMoreButton && images.length > 0 && page <= totalPages && (
          <LoadMoreButton onButtonClick={this.changePage} />
        )}
      </>
    );
  }
}

export default ShowImages;