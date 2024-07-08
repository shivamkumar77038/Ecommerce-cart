export const totalprice = (cart)=>{
    return cart.reduce((total,product)=>total+product.quantity*product.price,0)
}

export const totalitems = (cart)=>{
    return cart.reduce((sum,product)=>sum+product.quantity,0)
}



const cartReducer = (state,action)=>{
    switch(action.type){
        case 'add':
           return [...state,action.product];
           
           
        case 'remove':
            return state.filter((item)=>item.id!==action.payload);

        case 'clearcart':
            state = [];
            return state;
            

        case 'increament':
            const item = state.map((product)=>{
              if(product.id===action.payload){
                return {...product,quantity:product.quantity+1}
              }else{
                return product;
              }
            })
           return item;
        
            
           case 'decreament':
            const item2 = state.map((product)=>{
              if(product.id===action.payload){
                return {...product,quantity:product.quantity-1}
              }else{
                return product;
              }
            })
           return item2;
          
         

              
        default :
           return state;
   
   
     }



}

export default cartReducer ;