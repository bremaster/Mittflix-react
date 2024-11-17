import { useState, useEffect } from 'react';
import * as MovieAPI from '../services/MovieAPI';
import Header from '../components/Header';
import MovieItem from '../components/MovieItem';
import { Genre, Movie } from '../types';

const MovieList = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [genres, setGenres] = useState<Array<Genre>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies
        const movieRes = await MovieAPI.getAll();
        setMovies(movieRes);

        // Fetch genres
        const genreRes = await MovieAPI.genres();

        let sort: Genre[] = [];
        for (let i = genreRes.length - 1; i >= 0; i--) {
          let len = movieRes.filter((m: Movie) => m.genre_ids.includes(Number(genreRes[i].id))).length;

          if (len > 0) {
            sort.push(genreRes[i]);
          }
        }
        sort.sort((a: Genre, b: Genre) => a.name.localeCompare(b.name));
        setGenres(sort);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Dependencies array remains empty to run once on mount

  return (
    <>
      <Header />
      {genres.map((genre) => (
        <div className="titleList" key={genre.id}>
          <div className="title">
            <h1>{genre.name}</h1>
            <div className="titles-wrapper">
              {movies
                .filter((movie) => movie.genre_ids.includes(Number(genre.id)))
                .map((movie) => (
                  <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
