import { useLocation, useSearchParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { getSearchMovies } from '../../servises/API';
import { SearchContainer, Form, Input, Button, BtnIcon } from './Movies.styled';

import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const location = useLocation();

  const [searchMovie, setSearchMovie] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    getSearchMovies(searchQuery).then(movies => setSearchMovie(movies));
  }, [searchQuery]);

  const showMovies = e => {
    e.preventDefault();

    const query = e.target.elements.input.value;
    if (!query) {
      alert('Enter movie name');
      return;
    }

    setSearchParams({ query });
    e.target.reset();
  };

  return (
    <>
      <SearchContainer>
        <Form onSubmit={showMovies}>
          <Input type="text" name="input" placeholder="Search movies" />
          <Button type="submit">
            <BtnIcon />
          </Button>
        </Form>
      </SearchContainer>

      <MoviesList movieList={searchMovie} location={location} />
    </>
  );
};

export default Movies;
