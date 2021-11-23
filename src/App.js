import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import NewsHome from './components/NewsHome';
import data from './backend/fake-backend.json';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';

function App() {


  return (
    <>
    <div className="container">
      <Header/>
      <Home/>
      <NewsHome articles={data}/>
     
    </div>
     <Sponsors/>
     <Footer/>
     </>
  );
}

export default App;
