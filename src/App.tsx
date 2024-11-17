import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import MovieList from './pages/MovieList';
import Mylist from './pages/Mylist';
import SearchList from './pages/SearchList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MovieList />}
        />
        <Route
          path="/myList"
          element={<Mylist />}
        />
        <Route
          path="/search/:key"
          element={<SearchList />}
        />
        <Route
          path="/search"
          element={<SearchList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
