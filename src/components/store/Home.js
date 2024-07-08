

import ProCard from '../productcard/ProCard';
import { product } from '../../productData'

export default function Home() {
  const produclist = product;
 
  return (
    <>
    <div className=' max-w-full max-h-full text-xs sm:text-base '>
     <img className='object-contain rounded-b-full' src="../images/homepage.jpg" alt="homepagelogo" />
    </div>
   <div className='w-auto h-auto items-center'>
   <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 w-auto  m-2 justify-items-center'>
       {produclist.map((item,index)=>(
     <ProCard key={index} ProductItem = {item}/> 
     ))}
       </div>
   </div>
    </>
  )
}
