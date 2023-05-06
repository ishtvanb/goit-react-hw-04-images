import axios from 'axios';

export default async function fetchImagesByQuery(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '34459623-b0ea211fe3985b98adc104771',
      q: searchQuery,

      page: page,
      per_page: 12,
    },
  };
  const url = `${BASE_URL}`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}