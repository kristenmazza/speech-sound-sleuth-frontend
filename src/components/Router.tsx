import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../components/Error';
import Home from './Home';
import App from '../App';
import Sounds from './Sounds';
import Game from './Game';
import Leaderboard from './Leaderboard';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/:scene/sounds',
          element: <Sounds />,
        },
        {
          path: '/leaderboard',
          element: <Leaderboard />,
        },
        {
          path: '/:game/:sound/play',
          element: <Game />,
        },
        { path: '*', element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
