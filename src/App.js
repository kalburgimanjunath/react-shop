import React from 'react';
import './style.css';
import Header from './components/Header';
import Carousal from './components/Carousal';
export default function App() {
  const category = ['zara original', 'men', 'women', 'kids'];
  return (
    <div>
      <Header />
      <Carousal category={category} />
    </div>
  );
}
