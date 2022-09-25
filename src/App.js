import React from 'react';
import './style.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
export default function App() {
  const category = ['zara original', 'men', 'women', 'kids'];
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home category={category} />} exact />
      </Routes>
    </div>
  );
}
