import React, {  useReducer } from 'react'
import { createContext } from 'react'
import cartReducer from '../reducer/CartReducer';
import { useEffect } from 'react';



export const cartContext = createContext();
 function ContextProvider({children}) {
const getdata =()=>{
  const cart = JSON.parse(localStorage.getItem('cartdata')) || []
  return cart;
}

const intialstate = getdata();
       
    const [cart, dispatch] = useReducer(cartReducer,intialstate);
 useEffect(()=>{
      localStorage.setItem("cartdata",JSON.stringify(cart));

 },[cart])

  return (
   <>
    <cartContext.Provider value={{cart,dispatch}}>
      {children}
    </cartContext.Provider>
   </>
  )
}

export default ContextProvider
