
import { useContext } from 'react'
import { cartContext } from './contextprovider/ContextProvider'
import Cartitem from './cartproduct/Cartitem';
import { totalprice,totalitems } from './reducer/CartReducer';
import { Link } from 'react-router-dom'

export default function Cart() {
  const {cart,dispatch} = useContext(cartContext);
  
 
  return (

    <div className='w-full h-screen'>
      <div className='w-full h-auto text-xs sm:text-base font-serif '>
      <div className='w-full h-12 bg-gradient-to-r from-orange-300 to-orange-600   flex justify-center items-center text-white shadow-md shadow-orange-800'>
           <h1>Shoping Cart</h1>
      </div>
           <div className='w-full h-10 bg-gradient-to-r from-orange-500 to-orange-300  flex justify-center items-end'>
               <div className='bg-gradient-to-r from-orange-300 to-orange-600 w-5/6 sm:w-4/6 md:w-4/6 flex justify-between  rounded-t-md'>
                <h2 >Product</h2>
                <h2>Name</h2>
                <h2>quantity</h2>
                <h2>Price</h2>
                <h2>Remove</h2>
               </div>
          </div>
            <div className='w-full h-full flex justify-center '>
         
              <div className='w-5/6   sm:w-2/3 sm:h-2/3 '>
                    {cart.map((product,index)=>(
                    < Cartitem key={index} product={product}></Cartitem>
                    ))}
           </div>
         </div>
       
         <div className='w-full h-10 flex justify-center items-end'>
               <div className=' w-5/6 sm:w-4/6 md:w-4/6 flex justify-between text-xs sm:text-base md:text-base rounded-t-md'>
           <Link to="/" >     <button className='bg-orange-500 w-20 h-9 rounded-md sm:text-xs'>continue Shopping</button> </Link>
                 <h2 className='flex'><p>Total Price: {totalprice(cart)}/- </p> <p>Total items: {totalitems(cart)}</p></h2>
               </div>
          </div>
          <div className='w-full h-10 flex justify-center items-end'>
               <div className=' w-5/6 sm:w-4/6 md:w-4/6 flex justify-between rounded-t-md'>
              <button className='bg-orange-500 w-20 h-9 rounded-md ' onClick={()=>dispatch({type:"clearcart"})}>Clear Cart</button>
                 
               </div>
          </div>
    </div>
    </div>
  )
}
