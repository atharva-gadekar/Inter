import React from "react";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import NewBlog from "./components/NewBlog";
import ConnectionsPage from './pages/ConnectionsPage';
import ChatFinal from './pages/ChatFinal';
import Blog from './components/Blog';
import ProfileFinal from './pages/ProfileFinal';
import Notifications from './pages/Notifications';
import ForgotPassword from "./components/ForgotPassword";
import Forgotpass from "./pages/Forgotpass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile/:id" element={<ProfileFinal />} />
         <Route path="/create/blog" element={<NewBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/chat" element={<ChatFinal />} />
        <Route path="/network" element={<ConnectionsPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        
        <Route path="/notifications" element={<Notifications />} />
        <Route path="forgot" element={<Forgotpass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
