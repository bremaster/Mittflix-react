import React from 'react';
import * as MovieAPI from './MovieAPI';
import Header from './header';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      movies: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    MovieAPI.getAll()
      .then((movies) => {
        this.setState({movies: movies});
        MovieAPI.genres()
        .then((genres) => {
          let sort = [];
          for (var i = genres.length - 1; i >= 0; i--) {
            if(movies.filter(m => m.genre_ids.indexOf(genres[i].id)>0).length > 0){
              sort.push(genres[i])
            }
          }
          sort.sort((s1, s2) => {
            if(s1.name.toLowerCase() < s2.name.toLowerCase()) {
              return -1;
            } else {
              return 1;
            }
          });
          this.setState({genres: sort});
        })
      })
  }

  render() {
    return (
      <>
        <Header history={this.props.history} match={this.props.match}/>

        {this.state.genres.map((genre, i) => (
          <div className="titleList" key={i}>
            <div className="title">
              <h1>{genre.name}</h1>
              <div className="titles-wrapper">
                {this.state.movies.filter(m => m.genre_ids.indexOf(genre.id)>=0).map((movie) => (
                  <MovieItem key={movie.id} movie = {movie} getData={this.getData}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MovieList;
