import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../servises/API';
import Notification from 'components/Notification/Notification';

import {
  Back,
  Title,
  Wrapper,
  WrapperText,
  Image,
  SubTitle,
  Text,
  ListDetails,
  ItemDetails,
  LinkDetail,
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const back = location.state?.from ?? '/';

  useEffect(() => {
    try {
      getMovieById(movieId).then(movie => setMovie(movie));
    } catch {
      setError(true);
    }
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    movie;
  return (
    <>
      {error ? (
        <Notification message="Something went wrong..." />
      ) : (
        <>
          <Back to={back}>Go back</Back>
          <Wrapper>
            {poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            )}
            <WrapperText>
              {release_date && (
                <Title>
                  {movie.title} ({new Date(release_date).getFullYear()})
                </Title>
              )}
              <Text>User Score: {Math.round(vote_average * 10)}%</Text>
              <SubTitle>Overview</SubTitle>
              <Text>{overview}</Text>
              <SubTitle>Genres</SubTitle>
              {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
            </WrapperText>
          </Wrapper>
          <ListDetails>
            <ItemDetails>
              <LinkDetail to="cast" state={{ from: back }}>
                Cast
              </LinkDetail>
            </ItemDetails>
            <ItemDetails>
              <LinkDetail to="reviews" state={{ from: back }}>
                Reviews
              </LinkDetail>
            </ItemDetails>
          </ListDetails>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
