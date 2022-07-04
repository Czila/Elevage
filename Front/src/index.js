import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepagepage from './pages/homepage';
import Newcatpage from './pages/newcat';
import UpdateCatpage from './pages/updatecat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <Router>
      <Routes>

            <Route path="/homepage">
                <Homepagepage />
            </Route>
            <Route path="/newcat">
                <Newcatpage />
            </Route>
            <Route path="/updatecat">
                <UpdateCatpage />
            </Route>

        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
