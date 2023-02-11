import { getMovieReviews } from '../../servises/API';
import { useEffect, useState } from 'react';
import { Blockquote } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    const movieReviewsId = JSON.parse(localStorage.getItem('savedMovie'));
    try {
      getMovieReviews(movieReviewsId).then(reviews => setMovieReviews(reviews));
    } catch {
      console.log('error');
    }
  }, []);
  return (
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
  );
};

export default Reviews;
