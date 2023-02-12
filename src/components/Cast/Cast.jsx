import { getMovieСastById } from '../../servises/API';
import { useEffect, useState } from 'react';
import DefaultImage from '../../images/notFound.png';
import { ListCast, ItemCast, ItemText } from './Cast.styled';
import { useParams } from 'react-router-dom';
import Notification from 'components/Notification/Notification';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieСastById(movieId).then(cast => setMovieCast(cast));
    } catch {
      setError(true);
    }
  }, [movieId]);

  return (
    <>
      {error ? (
        <Notification message="Something went wrong..." />
      ) : (
        <>
          {movieCast.length > 0 ? (
            <ListCast>
              {movieCast.map(({ cast_id, profile_path, name, character }) => {
                return (
                  <ItemCast key={cast_id}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                          : DefaultImage
                      }
                      alt={name}
                    />
                    <ItemText>
                      <h3>{name}</h3>
                      <p>Character: {character}</p>
                    </ItemText>
                  </ItemCast>
                );
              })}
            </ListCast>
          ) : (
            <p>Actors not found</p>
          )}
        </>
      )}
    </>
  );
};
export default Cast;
