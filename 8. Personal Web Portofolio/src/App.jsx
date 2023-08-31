import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ConvertSQL } from './Pages/ConvertSQL';
import { ConvertSQL2 } from './Pages/ConvertSQL2';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
