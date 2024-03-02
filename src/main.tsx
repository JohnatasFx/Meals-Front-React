import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import './index.css';
import Meals from './pages/Meals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Meals />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
