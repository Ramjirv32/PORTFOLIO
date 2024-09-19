import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';  // Import Tailwind CSS
import './index.css';      // Other custom CSS
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
