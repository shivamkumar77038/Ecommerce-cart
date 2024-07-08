import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  
  RouterProvider,
  Route,

  createRoutesFromElements,
} from "react-router-dom";

import Home from './components/store/Home';
import ContextProvider from './components/contextprovider/ContextProvider';
import Cart from './components/Cart';
import CardView from './components/cardview/CardView';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
       <Route path='/' element={<Home/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/productview' element={<CardView/>} />
       </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ContextProvider >
     <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
