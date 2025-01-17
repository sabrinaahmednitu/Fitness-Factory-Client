import AboutUs from '@/components/About Us/AboutUs';
import Cart from '@/components/Cart/Cart/Cart';
import Checkout from '@/components/Checkout/Checkout';
import Home from '@/components/Home/Home';
import MainLayout from '@/components/Layouts/MainLayouts';
import SingleProduct from '@/components/SingleProduct/SingleProduct/SingleProduct';
import Success from '@/components/Success/Success';
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
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
