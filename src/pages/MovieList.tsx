import { useState, useEffect, useCallback } from 'react';
import * as MovieAPI from '../services/MovieAPI';
import Header from '../components/Header';
import MovieItem from '../components/MovieItem';
import { Genre, Movie } from '../types';

const MovieList = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [genres, setGenres] = useState<Array<Genre>>([]);

  const getData = useCallback(() => {
    MovieAPI.getAll()
      .then((movieRes: Array<Movie>) => {
        setMovies(movieRes);
        MovieAPI.genres()
          .then((genreRes: Array<Genre>) => {
            let sort = [];
            for (var i = genreRes.length - 1; i >= 0; i--) {
              if (movies.filter(m => m.genre_ids.indexOf(genreRes[i].id) > 0).length > 0) {
                sort.push(genreRes[i])
              }
            }
            sort.sort((s1, s2) => {
              if (s1.name.toLowerCase() < s2.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
            setGenres(sort)
          })
      })
  }, [movies])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <Header />

      {genres.map((genre, i) => (
        <div className="titleList" key={i}>
          <div className="title">
            <h1>{genre.name}</h1>
            <div className="titles-wrapper">
              {movies.filter(m => m.genre_ids.indexOf(genre.id) >= 0).map((movie) => (
                <MovieItem key={movie.id} movie={movie} getData={getData} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
