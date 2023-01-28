import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//=================================Import Store============================//
import store from './store/store';
import { Provider } from 'react-redux'

//----------------------Importing Browse Router Dom ---------------------//
import { BrowserRouter } from 'react-router-dom';


// --------get root of html and put their our root react component------//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
         <Provider store={store}>
             <App />
         </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

