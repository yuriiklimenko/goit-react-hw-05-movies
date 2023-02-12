import { useSearchParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { getSearchMovies } from '../../servises/API';
import { SearchContainer, Form, Input, Button, BtnIcon } from './Movies.styled';
import Notification from 'components/Notification/Notification';

import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    try {
      getSearchMovies(searchQuery).then(movies => setSearchMovie(movies));
    } catch {
      setError(true);
    }
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
      {error ? (
        <Notification message="Something went wrong..." />
      ) : (
        <>
          <SearchContainer>
            <Form onSubmit={showMovies}>
              <Input type="text" name="input" placeholder="Search movies" />
              <Button type="submit">
                <BtnIcon />
              </Button>
            </Form>
          </SearchContainer>

          <MoviesList movieList={searchMovie} />
        </>
      )}
    </>
  );
};

export default Movies;
