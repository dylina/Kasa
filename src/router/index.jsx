import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about';
import Flat from '../pages/flat';
import Error404 from '../pages/error404';

function Router() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Flat />} />
        <Route path="*" element={<Error404 />} />    
      </Routes>
  )
}

export default Router
