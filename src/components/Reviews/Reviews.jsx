import { getMovieReviews } from '../../servises/API';
import { useEffect, useState } from 'react';
import { Blockquote } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import Notification from 'components/Notification/Notification';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(reviews => setMovieReviews(reviews));
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
          {movieReviews.length > 0 ? (
            <ul>
              {movieReviews.map(({ id, author, content }) => {
                return (
                  <li key={id}>
                    <Blockquote>
                      <cite>Author: {author}</cite>
                      <p>{content}</p>
                    </Blockquote>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Review not found</p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
