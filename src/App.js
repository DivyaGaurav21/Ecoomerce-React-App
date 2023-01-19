import React from 'react'
import Header from './components/Header';
import './App.css'
//---------Importing BootStrap Css Module-------------//
import 'bootstrap/dist/css/bootstrap.min.css';
// ---------Importing Carausel Image-----------------//
import MealDemo from './components/Carausal';
// ---------Importing routes , route ----------------//
import { Routes, Route } from 'react-router-dom'
// ----------import CardsDetails , Card--------------//
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'




function App() {
   

  return (
      <div className="App">
          <Header />
          <MealDemo />
          <Routes>
              <Route path='/' element={ <Cards/> } />
              <Route path='/cart' element={ <CardsDetails/> } />
          </Routes>
    </div>
  );
}

export default App;
