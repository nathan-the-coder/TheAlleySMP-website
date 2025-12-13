import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/gallery' element={<Gallery />} />
    </Routes>
  </BrowserRouter>,
)
