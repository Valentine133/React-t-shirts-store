import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainPage from './pages/MainPage';
import SignProductPage from './pages/SignProductPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/" element={<MainLayout/>}>
            <Route path="" element={<MainPage/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="t-shirts/:id" element={<SignProductPage/>}/>
            <Route path="*" element={<NotFound/>}/>
         </Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
