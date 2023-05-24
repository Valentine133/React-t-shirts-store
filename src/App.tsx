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
              element={<SignProductPage/>}/>
            <Route 
              path="*" 
              element={<NotFound/>}/>
         </Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
