
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import BasicLayout from './layout/BasicLayout';
import AboutUs from './pages/AboutUs';
import AllCourses from './pages/AllCourses';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Instructor from './pages/Instructor';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<BasicLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/instructor' element={<Instructor />} />
      <Route path='/all-courses' element={<AllCourses />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/sitemap' element={<Sitemap />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up'element={<SignUp />} />

      </Route>
      
     
    </Routes>
  );
}

export default App;
