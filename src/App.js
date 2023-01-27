import { useEffect } from 'react';
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
// import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'
import Footer from './components/footer/Footer';
import AddProduct from './components/addProduct/AddProduct';

// import { useSelector } from 'react-redux';

// // -----------Imprting useSelector & dispatch fn from react-redux---------//
import { useDispatch } from 'react-redux';



// import { useParams } from 'react-router-dom';

// my api---https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/db

import { fetchCardsData } from './store/productSlice';
import CardsDetails from './components/CardsDetails';




function App() {
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchCardsData());
    }, [dispatch]);


    // const items = useSelector((state) => state.products.itemToDisplay)
    // console.log(items.rname)
    // let { id } = useParams();
    // console.log(id)
    // let requiredData = items.find(item => item.id === id);
    // console.log(requiredData)

  

    // const url = "https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata";




  return (
          < div className = "App" >
                  <ToastContainer />
                  <Header />
                  <MealDemo />
                  <Routes>
                      <Route path='/' element={<Cards />} />
              <Route path='/addproducts' element={<AddProduct />} />
              {/* here we not redirect with id query i simply manage this by product slice reducer  */}
              <Route path={`/productdetail`} element={<CardsDetails />} />
                  </Routes>
                  <Footer />
              </div >
   );
}

export default App;
