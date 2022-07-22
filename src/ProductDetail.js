import axios from 'axios';
import React from 'react';


class ProductDetail extends React.Component{

    state = {
        product:{}
      

    };


    constructor(props){
        super(props);
        axios.get('https://new-products-project.herokuapp.com/api/product/62cfe000bc86965820e42cb3')
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