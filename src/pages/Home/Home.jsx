import { getTrendingMovies } from '../../servises/API';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container, Title } from './Home.Styled';

const Home = () => {
  const [TrendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    try {
      getTrendingMovies().then(movies => setTrendingMovies(movies));
    } catch {}
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MoviesList movieList={TrendingMovies} />
    </Container>
  );
};

export default Home;
