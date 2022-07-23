import React from 'react';
import ProductSvc from './Services/ProductSvc';

class ProductDetail extends React.Component{

    state = {
        product:{}
      

    };


    constructor(props){
        super(props);
        ProductSvc.getProductById('62cfe000bc86965820e42cb3')
           .then(res=>{
            console.log(res,'response came');
            this.setState({ product:res.data });
        })
        .catch(err=>console.log(err));
    }


    render () {
       const {brand,model,price}  = this.state.product;
        return <div>  
                     <h2>Welcome to ProductDetails page</h2>
                      <b>{brand} </b>
                     <div><b>{model}</b></div> 
                      <div><b>${price}</b></div>
                 </div>
      
    }
};




export default ProductDetail;