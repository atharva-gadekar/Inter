import Homepage from './pages/Homepage';
import Navbarhome from './components/Navbarhome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Chat from './components/Chat';
import Connect from './components/Connect'
import ProfileSidebar from './components/ProfileSidebar';
import ImgUpload from './components/ImgUpload';
import BlogPage from './components/BlogPage';
import Profile from './components/ProfileSettings';
import ProfileSettings from './components/ProfileSettings';
import Test from './components/Test';import Connections from './components/Connections';
import UserProfile from './components/UserProfile';
import ConnectionsPage from './pages/ConnectionsPage';
import LeftChat from './components/LeftChat';
import ChatPage from './pages/ChatPage';
import ChatFinal from './pages/ChatFinal';
import ProfileFinal from './pages/ProfileFinal';
import Hi from './pages/Hi';
function App() {
  return (

  //   <BrowserRouter>
  //   <Routes>
  //       <Route path="/home" element={<Homepage />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/" element={<Signup />} />
  //       <Route path="/profile" element={<ProfileSettings />} />
  //       <Route path="/blogs" element={<BlogPage />} />
  //       <Route path="/chat" element={<ChatFinal />} />
    //       <Route path="/connections" element={<ConnectionsPage />} />
    
        
  //       </Routes>
  // </BrowserRouter>
    
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<ProfileFinal />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/chat" element={<ChatFinal />} />
        <Route path="/connections" element={<ConnectionsPage />} />
        </Routes>
  </BrowserRouter>
    
   
    

   
  
 
    
  );
}

export default App;