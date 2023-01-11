
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import BasicLayout from './layout/BasicLayout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<BasicLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up'element={<SignUp />} />

      </Route>
      
     
    </Routes>
  );
}

export default App;
