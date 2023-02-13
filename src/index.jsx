import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Argentina from './pages/Argentina/Argentina';
import Brasil from './pages/Brasil/Brasil';
import Franca from './pages/Franca/Franca';
import Todos from './pages/Todos/Todos';
import './globalStyles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/argentina' element={<Argentina />} />
      <Route path='/brasil' element={<Brasil />} />
      <Route path='/franca' element={<Franca />} />
      <Route path='/todos' element={<Todos />} />
    </Routes>
  </BrowserRouter>
);
