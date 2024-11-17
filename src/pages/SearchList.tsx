import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as MovieAPI from '../services/MovieAPI';
import Header from '../components/Header';
import MovieItem from '../components/MovieItem';
import { Movie } from '../types';

const MovieList = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const { key } = useParams<{ key?: string }>();
  const searchKey = key ? key.toLowerCase() : "";

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    MovieAPI.getAll()
      .then((data: Array<Movie>) => {
        setMovies(data);
      })
  }

  return (
    <>
      <Header />

      <div className="titleList">
        <div className="title">
          <h1>Results</h1>
          <div className="titles-wrapper">
            {movies.filter(m => m.title.toLowerCase().indexOf(searchKey)>=0).map((movie) => (
              <MovieItem key={movie.id} movie = {movie} getData={getData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
