import Navbar from './components/Navbar/Navbar';
import HomePage from './routes/HomePage/HomePage';
import Layout from './routes/layout/Layout';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';

// Router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
