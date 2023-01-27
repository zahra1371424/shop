import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/appLayout';
import About from './pages/about';
import Home from './pages/home';
import { ProductProvider } from './context';
import ProductDetails from './pages/home/details';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="details/:id" element={<ProductDetails />} />
              <Route path='/about' element={<About />} />
            </Route>
          </Routes>
        </ProductProvider>      
      </BrowserRouter>
    </div>
  );
}

export default App;
