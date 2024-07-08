import React from 'react'
import { cartContext } from '../contextprovider/ContextProvider'
import { useContext } from 'react'

export default function Cartitem({product}) {
  const {dispatch} = useContext(cartContext);

  const decreament =(id)=>{
    if(product.quantity>1){
      return dispatch({type : "decreament", payload:id});
    }
   
   
  }

  const increament =(id)=>{
    if(product.quantity<10){
    return dispatch({type : "increament", payload:id});
    }
  }

  const remove =(id)=>{
    
    return dispatch({type : "remove", payload:id});
  }

  return (
   <>
      <div className='  w-full h-24 flex  border-solid border-b-orange-300 border-2 '>
                       <div className='  w-1/4 h-1/4 flex justify-start'>
                        <img className='w-24 h-20 object-fill' src={product.image} alt="productimage" />
                        </div>
                      <div className=' w-1/4 h-full flex items-center  '><p>{product.title}</p></div>
                      
                        <div className=' w-1/4 h-full flex justify-center items-center'>
                          <button className='w-1/4 h-1/4' onClick={()=>decreament(product.id)}>-</button>
                          <button  className='w-1/4 h-1/4' >{product.quantity}</button>
                          <button className='w-1/4 h-1/4' onClick={()=>increament(product.id)} >+</button>
                        </div>
                       
                      <div className=' w-1/4 h-full flex justify-end items-center'>{product.price}</div>
                      <div className=' w-1/4 h-full flex justify-end items-center pr-1' onClick={()=>remove(product.id)} ><button>remove</button></div>
                    
                  </div>
                  
   </>
  )
}
