import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  { path: '/', element: <Home movies={movies} /> },
  { path: '/directors', element: <Directors directors={directors} /> },
  { path: '/actors', element: <Actors actors={actors} /> },
  { path: '/movie/:id', element: <Movie movies={movies} /> },
  { path: '*', element: <ErrorPage /> },
];

export default routes;
