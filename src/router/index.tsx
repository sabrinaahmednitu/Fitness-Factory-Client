import MainLayout from '@/components/Layouts/MainLayouts';
import AboutUs from '@/pages/AboutUs';
import NotFound from '@/pages/shared/NotFound';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        // element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
