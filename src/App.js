import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { reqToken } from './utils/spotify';
import { userSliceActions } from './store/user-slice';


function App() {

  const [ _token, setToken ] = useState(null);

  const dispatch = useDispatch();

  async function getUserData(token) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token[0][1]}`
      }
    })
    const data = await response.json();
    console.log(data);
    dispatch(userSliceActions.setUser(data));
  }

  useEffect(() => {
    const token = reqToken();
    setToken(token);
    // setTimeout(() => {
    //   console.log(token);
    //   window.location.hash = "";
    // },0)
    getUserData(token);

  },[])

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

