
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicLayout from './layout/BasicLayout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<BasicLayout />}>
         {/* <Route exact index element={<Home />} /> */}
      <Route path='/' element={<Home />} />

      </Route>
      
     
    </Routes>
  );
}

export default App;
