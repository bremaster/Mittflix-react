import { useState } from 'react';
import * as MovieAPI from '../services/MovieAPI';
import { Movie } from '../types';

const MovieItem = ({
  movie,
  getData
}: {
  movie: Movie;
  getData: () => void;
}) => {
  const [toggled, setToggled] = useState<boolean>(movie.my_list);

  const addMylist = async () => {
    if (toggled) {
      await MovieAPI.removeFromList(movie);
    } else {
      await MovieAPI.addToList(movie);
    }
    setToggled(!toggled)
    getData()
  }

  return (
    <div className="movie">
      <img
        src={movie.poster_path}
        alt={movie.poster_path}
      />
      <div className="overlay">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}</div>
        <div className="plot">
          {movie.overview}
        </div>
      </div>
      <div data-toggled={toggled} onClick={() => addMylist()} className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
