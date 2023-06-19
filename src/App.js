import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { authRedirectLink, reqToken } from './utils/spotify';



function App() {

  const [ _token, setToken ] = useState(null);

  useEffect(() => {
    const token = reqToken();
    setToken(token);
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: _token ? <Home /> : <Login />
    }
  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App;
