import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY = '520d2e464644c0f1097ff46b301f91b7';

export const getTrendingMovies = async () => {
  const response = await axios(
    `${BASE_URL}/3/trending/movie/day?api_key=${KEY}`
  );
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios(`${BASE_URL}/3/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const getMovieСastById = async movieId => {
  const response = await axios(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}`
  );

  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data.results;
};

export const getSearchMovies = async searchQuery => {
  const response = await axios(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${searchQuery}`
  );

  return response.data.results;
};
