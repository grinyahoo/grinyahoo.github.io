import React from 'react';
import NavBar from './components/NavBar/'
import WorkList from './components/WorkList/'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Contacts from "./components/Contacts"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Resume />
      <WorkList />
      {/* <Contacts /> */}
      <Footer />
    </>
  );
}

export default App;
