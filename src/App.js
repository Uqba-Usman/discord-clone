import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Chat from './Chat';
import { login, logout ,selectUser } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      console.log("User is ", authUser);
      if(authUser){
        //The user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
      } else {
        //The user is logged out
        console.log("User is logout");
        dispatch(logout());
      }
    })
  },[dispatch]);
  return (  
    <div className="app">

      {user ? (
      <>
        <Sidebar/>
        <Chat/>
      </>
      ):(
        <Login/>
      )
    }
      
      
    </div>
  );
}

export default App;
