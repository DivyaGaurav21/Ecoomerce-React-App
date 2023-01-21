import React from 'react'
import Header from './components/Header';
import './App.css'
//---------Importing BootStrap Css Module-------------//
import 'bootstrap/dist/css/bootstrap.min.css';
// ---------Importing Carausel Image-----------------//
import MealDemo from './components/carousel/Carausal';
// ---------Importing routes , route ----------------//
import { Routes, Route } from 'react-router-dom'
// ----------import CardsDetails , Card--------------//
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'
import Footer from './components/footer/Footer';




function App() {
   

  return (
      <div className="App">
          <Header />
          <MealDemo />
          <Routes>
              <Route path='/' element={ <Cards/> } />
              <Route path='/cart' element={ <CardsDetails/> } />
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
