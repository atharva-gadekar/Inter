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
import ProfileSettings from './components/ProfileSettings';
import Test from './components/Test';import Connections from './components/Connections';
import UserProfile from './components/UserProfile';
import ConnectionsPage from './pages/ConnectionsPage';
import LeftChat from './components/LeftChat';
import ChatPage from './components/ChatPage';
import ChatFinal from './pages/ChatFinal';
import Blog from './components/Blog';
import ProfileFinal from './pages/ProfileFinal';

function App() {
  return (

    
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage />} />
     
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfileFinal />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/chat" element={<ChatFinal />} />
        <Route path="/connections" element={<ConnectionsPage />} />
        </Routes>
  </BrowserRouter>
    
   
    

   
  
 
    
  );
}

export default App;