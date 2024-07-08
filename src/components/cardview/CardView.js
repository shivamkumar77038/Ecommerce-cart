import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { cartContext } from '../contextprovider/ContextProvider';

export default function CardView() {
    const {dispatch} = useContext(cartContext)
    const location = useLocation();
    const product = location.state;


  return (
    <>
     <div className='mt-16 -z-10'>
     <div className='  w-full h-full font-serif'>
     <div className=" mt-5 max-w-md mx-auto rounded-md overflow-hidden shadow-2xl shadow-orange-500">
    <div className="relative ">
        <img className="w-full" src={product.image} alt="Product"/>
        <div className="absolute top-0 right-0 bg-orange-300  text-white px-2 py-1 m-2 rounded-md text-xs font-medium">SALE
        </div>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <p className="text-black text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-base sm:text-base">Price: {product.price}</span>
            <button onClick={()=>dispatch({type:"add", product:product})} className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
        Add to cart
      </button>
        </div>
    </div>
</div>
     </div>

     </div>
    </>
  )
}
