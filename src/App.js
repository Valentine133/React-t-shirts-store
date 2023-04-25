import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Header/>
          <main className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
          </main>
      </div>
      </div>
    </Router>
  );
}

export default App;
