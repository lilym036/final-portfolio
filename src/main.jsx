import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // error kind of like 404
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
