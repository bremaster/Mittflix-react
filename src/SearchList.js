import React from 'react';
import * as MovieAPI from './MovieAPI';
import Header from './header';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    MovieAPI.getAll()
      .then((movies) => {
        this.setState({movies: movies});
      })
  }

  reload = () => {
    MovieAPI.getAll()
      .then((movies) => {
        this.setState({movies: movies});
      })
  }

  render() {
    let searchkey = this.props.match.params.key ? this.props.match.params.key.toLowerCase() : "";
    return (
      <>
        <Header history={this.props.history} match={this.props.match}/>

        <div className="titleList">
          <div className="title">
            <h1>Results</h1>
            <div className="titles-wrapper">
              {this.state.movies.filter(m => m.title.toLowerCase().indexOf(searchkey)>=0).map((movie) => (
                <MovieItem key={movie.id} movie = {movie} reload={this.reload}/>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieList;
