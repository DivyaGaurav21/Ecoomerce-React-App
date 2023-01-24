import Header from './components/Header';
import './App.css'

// -----Importing react Tostifier for showing Notification-------//
import {ToastContainer} from "react-toastify"
// --------------Import Toast Container css ---------------------//
import "react-toastify/dist/ReactToastify.css";
//----------------Importing BootStrap Css Module---------------//
import 'bootstrap/dist/css/bootstrap.min.css';
//--- --------Importing Carausel Image-------------------//
import MealDemo from './components/carousel/Carausal';
// ---------Importing routes , route ----------------//
import { Routes, Route } from 'react-router-dom'
// ----------import CardsDetails , Card , Footer--------------//
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'
import Footer from './components/footer/Footer';
import AddProduct from './components/addProduct/AddProduct';

// -----------Imprting useSelector & dispatch fn from react-redux---------//
// import { useSelector, useDispatch } from 'react-redux';
// import { addProduct } from './store/productSlice';



// my api---https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/db





function App() {




  return (
          < div className = "App" >
                  <ToastContainer />
                  <Header />
                  <MealDemo />
                  <Routes>
                      <Route path='/' element={<Cards />} />
                      <Route path='/cart' element={<CardsDetails />} />
                      <Route path="/addproducts" element={<AddProduct />} />
                  </Routes>
                  <Footer />
              </div >
   );
}

export default App;
