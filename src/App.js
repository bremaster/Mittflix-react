import React from 'react';
import {Route} from 'react-router-dom'
import MovieList from './MovieList';
import Mylist from './Mylist';
import SearchList from './SearchList';

import * as MovieAPI from './MovieAPI';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Route
          exact
          path="/"
          component={MovieList}
        />

        <Route
          exact
          path="/myList"
          component={Mylist}
        />

        <Route
          exact
          path="/search/:key"
          component={SearchList}
        />

        <Route
          exact
          path="/search"
          component={SearchList}
        />
      </>
    );
  }
}

export default App;
