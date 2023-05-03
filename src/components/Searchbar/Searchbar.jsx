import { Component } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.error('Please write your search query');
    }
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
  };
  
  render() {
    const { query } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit" aria-label="search">
            <HiMagnifyingGlass />
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            onChange={this.handleChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
