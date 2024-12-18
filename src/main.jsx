import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';

import './dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>
);
