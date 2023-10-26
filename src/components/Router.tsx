import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import App from '../App';
import Sounds from '../pages/Sounds/Sounds';
import Game from '../pages/Game/Game';
import Error from '../pages/Error/Error';
import Leaderboard from '../pages/Leaderboard/Leaderboard';
import SceneLeaderboard from '../pages/SceneLeaderboard/SceneLeaderboard';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/:sceneTitle',
          element: <Sounds />,
        },
        {
          path: '/leaderboard',
          element: <Leaderboard />,
        },
        {
          path: '/leaderboard/:sceneTitle',
          element: <SceneLeaderboard />,
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
