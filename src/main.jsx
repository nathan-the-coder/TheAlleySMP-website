import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>
)
