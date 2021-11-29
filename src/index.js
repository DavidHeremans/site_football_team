import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes,  Route } from 'react-router-dom';
import Club from './components/club/Club';
import Teams from './components/routes/Teams';
import Missie from './components/club/Missie';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="club" element={<Club />} />
      <Route path="teams" element={<Teams />} />
      <Route path="missie" element={<Missie />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
