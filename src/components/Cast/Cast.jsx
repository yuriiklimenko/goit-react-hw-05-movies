import { getMovieСastById } from '../../servises/API';
import { useEffect, useState } from 'react';
import DefaultImage from '../../images/notFound.png';
import { ListCast, ItemCast, ItemText } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const MovieId = JSON.parse(localStorage.getItem('savedMovie'));
    try {
      getMovieСastById(MovieId).then(cast => setMovieCast(cast));
    } catch {
      console.log('error');
    }
  }, []);

  return (
    <>
      {movieCast.length > 0 ? (
        <ListCast>
          {movieCast.map(({ id, profile_path, name, character }) => {
            return (
              <ItemCast key={id}>
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
  );
};
export default Cast;
