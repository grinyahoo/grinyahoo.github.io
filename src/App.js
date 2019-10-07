import React from 'react';
import NavBar from './components/NavBar/'
import ProductList from './components/ProductList/'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Contacts from "./components/Contacts"

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Resume />
      <ProductList />
      <Contacts />
    </>
  );
}

export default App;
