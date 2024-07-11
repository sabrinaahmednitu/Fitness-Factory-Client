import AboutUs from '@/components/About Us/AboutUs';
import Home from '@/components/Home/Home';
import MainLayout from '@/components/Layouts/MainLayouts';
import SingleProduct from '@/components/SingleProduct/SingleProduct/SingleProduct';
import Products from '@/pages/Products/Products';

import NotFound from '@/pages/shared/NotFound';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
