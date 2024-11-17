import { useEffect, useState } from 'react';
import * as MovieAPI from '../services/MovieAPI';
import Header from '../components/Header';
import MovieItem from '../components/MovieItem';
import { Movie } from '../types';

const MovieList = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    MovieAPI.getAll()
    .then((data: Array<Movie>) => {
      setMovies(data);
    })
  }, [])

  return (
    <>
      <Header />

      <div className="titleList">
        <div className="title">
          <h1>My List</h1>
          <div className="titles-wrapper">
            {movies.filter(m => m.my_list === true).map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
