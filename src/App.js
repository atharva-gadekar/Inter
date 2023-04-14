import React from "react";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ConnectionsPage from './pages/ConnectionsPage';
import ChatFinal from './pages/ChatFinal';
import Blog from './components/Blog';
import ProfileFinal from './pages/ProfileFinal';
import Notifications from './pages/Notifications';

function App() {
  
  return (

    
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login />}/>
        <Route path="/profile/:id" element={<ProfileFinal />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/chat" element={<ChatFinal />} />
        <Route path="/network" element={<ConnectionsPage />} />
        <Route path="/notifications" element={<Notifications />} />
        </Routes>
  </BrowserRouter>
    
   
    

   
  
 
    
  );
}

export default App;