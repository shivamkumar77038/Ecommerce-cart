import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../contextprovider/ContextProvider'
import { useNavigate } from 'react-router-dom'




export default function ProCard({ ProductItem}) {
    const navigate = useNavigate();
    const {dispatch}   = useContext(cartContext)
  return (
    <>

    <div className=" text-xs sm:text-base ">
    <div  className=" sm:max-w-xs rounded-3xl overflow-hidden shadow-md shadow-orange-500 bg-white ">

    <div onClick={()=>navigate("/productview",{state:ProductItem})}>
    <img className='w-36 h-36 object-contain ' src={ ProductItem.image} alt="product img" />
            <div className="px-6 py-4 ">
                
                <div className="font-bold  mb-2  ">{ ProductItem.title}</div>
                
                <p className="text-gray-800 ">Price Rs: { ProductItem.price}</p>
    </div>
            </div>
                <div className=" flex justify-center items-center">
                    <button onClick={()=>dispatch({type:"add", product:ProductItem})} className="bg-orange-500 w-full hover:bg-orange-800 text-white py-2 font-bold rounded">
                        Add to Cart
                    </button>
                </div>
</div>

</div>

   </>
  )
}
