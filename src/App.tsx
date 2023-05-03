import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import { Cart, MainPage, NotFound, SignProductPage } from './pages';

import './scss/app.scss';


function App() {
  
  return (
    <Router basename="/React-t-shirts-store">
      <div className="App">
        <Routes>
         <Route path="/" element={<MainLayout/>}>
            <Route 
              path="" 
              element={<MainPage/>}/>
            <Route 
              path="cart" 
              element={<Cart/>}/>
            <Route 
              path="t-shirts/:id" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignProductPage/>
                </Suspense>
            }/>
            <Route 
              path="*" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound/>
                </Suspense>
            }/>
         </Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
