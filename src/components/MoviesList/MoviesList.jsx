import PropTypes from 'prop-types';
import DefaultImage from '../../images/notFound.png';
import { useLocation } from 'react-router-dom';

import { Item, List, MoviesName, Img, LinkStyled } from './MoviesList.Styled';

const MoviesList = ({ movieList }) => {
  const location = useLocation();

  return (
    <List>
      {movieList &&
        movieList.map(({ id, title, poster_path, name }) => (
          <Item key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : DefaultImage
                }
                alt={title}
              />
              <MoviesName>{title || name}</MoviesName>
            </LinkStyled>
          </Item>
        ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
