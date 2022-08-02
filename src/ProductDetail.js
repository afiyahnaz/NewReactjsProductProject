import React, { useState, useEffect } from 'react';
import ProductSvc from './Services/ProductSvc';

const ProductDetail = () => {

   

    const [product, setProduct]   = useState({});



    useEffect(()=>{

        ProductSvc.getProductById('62cfe000bc86965820e42cb3')
        .then(res=>{
         console.log(res,'response came');
         setProduct(res.data);
     })
     .catch(err=>console.log(err));

    }, []);
    
       const {brand,model,price}  = product;
        return <div>  
                     <h2>Welcome to ProductDetails page</h2>
                      <b>{brand} </b>
                     <div><b>{model}</b></div> 
                      <div><b>${price}</b></div>
                 </div>
      
    
};
export default ProductDetail;