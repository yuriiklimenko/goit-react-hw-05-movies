import { getTrendingMovies } from '../../servises/API';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container, Title } from './Home.Styled';
import Notification from 'components/Notification/Notification';

const Home = () => {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getTrendingMovies().then(movies => setTrendingMovies(movies));
    } catch {
      setError(true);
    }
  }, []);

  return (
    <Container>
      {error ? (
        <Notification message="Something went wrong..." />
      ) : (
        <>
          <Title>Trending today</Title>
          <MoviesList movieList={TrendingMovies} />
        </>
      )}
    </Container>
  );
};

export default Home;
