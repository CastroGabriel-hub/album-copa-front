import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import './globalStyles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);
