import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
// eslint-disable-next-line no-undef
const router = createBrowserRouter([
  {
    path: '/',
    // eslint-disable-next-line react/jsx-no-undef
    element: <App />,
    // error kind of like 404
    // eslint-disable-next-line react/jsx-no-undef
    errorElement: <Error />,
    children: [
      {
        index: true,
        // eslint-disable-next-line react/jsx-no-undef
        element: <About />,
      },
      {
        path: '/Projects',
        // eslint-disable-next-line react/jsx-no-undef
        element: <Projects />,
      },
      {
        path: '/Contact',
        // eslint-disable-next-line react/jsx-no-undef
        element: <Contact />,
      },
      {
        path: '/Resume',
        // eslint-disable-next-line react/jsx-no-undef
        element: <Resume />,
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-undef
  <RouterProvider router={router} />
);
