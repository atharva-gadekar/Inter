import Homepage from './pages/Homepage';
import Navbarhome from './components/Navbarhome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './components/CreatePost';
import ProfileSidebar from './components/ProfileSidebar';
// import Post from './components/Post';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <>
      <CreatePost/>
    </>
  //   <BrowserRouter>
  //   <Routes>
  //       <Route path="/home" element={<Homepage />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/signup" element={<Signup />} />
  //       </Routes>
  // </BrowserRouter>
  
 
    
  );
}

export default App;