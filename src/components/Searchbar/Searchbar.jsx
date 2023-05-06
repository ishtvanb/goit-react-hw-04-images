import { useState } from 'react';
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

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Please write your search query');
    }
    onSubmit(query);
    setQuery('');
  };
  
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit" aria-label="search">
          <HiMagnifyingGlass />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          onChange={handleChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  )
};

  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;