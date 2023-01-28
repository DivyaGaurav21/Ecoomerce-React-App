import { useEffect } from 'react';
import Header from './components/Header';
import './App.css'

// --------Importing react Tostifier for showing Notification--------//
import { ToastContainer } from "react-toastify"

// ----------------Import Toast Container css -----------------------//
import "react-toastify/dist/ReactToastify.css";

//--------------------Importing BootStrap Css Module-----------------//
import 'bootstrap/dist/css/bootstrap.min.css';

//--- --------Importing Carausel MealDemo Component-------------------//
import MealDemo from './components/carousel/Carausal';

// ------------------Importing routes , route ------------------------//
import { Routes, Route } from 'react-router-dom'
// --------------import CardsDetails , Card , Footer------------------//

//================Add Cards , footer , AddProduct Component===========//
import Cards from './components/Cards'
import Footer from './components/footer/Footer';
import AddProduct from './components/addProduct/AddProduct';
import CardsDetails from './components/CardsDetails';


 // -----------Imprting useSelector & dispatch fn from react-redux---------//
import { useDispatch } from 'react-redux';



//***********/ my api(fake json -server)---> https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/db***********//
 //**********/ my Cardsdata url ----> "https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata"*********//


// =================Importing fetchCardsData from Product Slice===============//
import { fetchCardsData } from './store/productSlice';


// ************** Main App Component*******************//
function App() {

    const dispatch = useDispatch();
// ___________the main purpse of useEffect here that i rerender _____________//
// _____our Component after fetching data(able to create redux store)_______//
    useEffect(() => {
        dispatch(fetchCardsData());
    }, [dispatch]);
    

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
