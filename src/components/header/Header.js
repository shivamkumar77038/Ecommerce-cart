import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { cartContext } from '../contextprovider/ContextProvider';

export default function Header() {
        
  const {cart} = useContext(cartContext);
  return (
    <>
    <div className=' fixed top-0 left-0 right-0 z-10 text-xs sm:text-base font-serif  w-full bg-gradient-to-r from-orange-400 to-orange-700 h-10  sm:h-14 flex  items-center '> 
       <div className=' flex justify-start items-center'>
          <div className='h-8 w-8 sm:w-10 sm:h-10 m-1 flex  items-center'>
             <img className= "object-cover" src="../images/shoplogo.png" alt="logo" />
        </div>
            <p className='font-serif m-1 text-sm sm:text-md '>EazyShop</p>
      </div>

       <div className=' w-full flex justify-start overflow-auto ml-2 '>
         <NavLink to='/'style={({ isActive }) => { return { color: isActive ? "white" : null,};
  }} className='hover:text-white'>Shop </NavLink>
      
         
       </div>

    <div className='  flex justify-end w-full h-8 items-center sm:h-10 '>
    <NavLink to='/cart' style={({ isActive }) => { return { color: isActive ? "white" : null,}}}>
        <div className='  hover:text-white flex justify-start items-center mr-3  '>
           <div  className='h-8 w-8 sm:w-10 sm:h-10 m-1 flex flex-row  items-center'><img src="../images/carts.png" alt="cartlogo" /></div>
           <h2 className='ml-1'>Cart<sup className='text-white '>{cart.length}</sup></h2>
        </div>
        </NavLink>
    </div>
    
    
     
                
            
 </div>
        
        
    </>
  )
}
