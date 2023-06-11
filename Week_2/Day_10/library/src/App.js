import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NavBar from './components/Common/NavBar';
import RequireAuth from './components/Common/RequireAuth';
import Spinner from './components/custom/Spinner';

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated ] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user}/>
      {isUserUpdated ? (
        <Routes>
        <Route path='/' element={
          <RequireAuth user={user}>
            <HomePage user={user} />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>  
      ) : (
        <div className='mt-5 text-center'>
          <Spinner />
        </div>
      )
      }
      
    </BrowserRouter>
  );
}

export default App;
