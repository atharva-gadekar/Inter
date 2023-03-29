import Homepage from './pages/Homepage';
import Navbarhome from './components/Navbarhome';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Chat from './components/Connect';
import ProfileSidebar from './components/ProfileSidebar';
import ImgUpload from './components/ImgUpload';
import BlogPage from './components/BlogPage';
import Post from './components/Post';



function App() {
  return (


  //   <BrowserRouter>
  //   <Routes>
  //       <Route path="/home" element={<Homepage />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/" element={<Signup />} />
  //       </Routes>
  // </BrowserRouter>
    <BlogPage></BlogPage>
  
 
    
  );
}

export default App;