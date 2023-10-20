import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import App from '../App';
import Sounds from '../pages/Sounds/Sounds';
import Game from '../pages/Game/Game';
import Leaderboard from '../pages/Leaderboard/Leaderboard';
import Error from '../pages/Error/Error';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/:sceneTitle/sounds',
          element: <Sounds />,
        },
        {
          path: '/leaderboard',
          element: <Leaderboard />,
        },
        {
          path: '/:sceneTitle/:sound/play',
          element: <Game />,
        },
        { path: '*', element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
