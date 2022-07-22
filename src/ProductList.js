import { Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';

import Product from './Product';
import IfElse from './IfElse';



class ProductList extends React.Component {


    state ={
         products : {
            metadata:{},
            data:[]
         },
         hasError: false
    };
    constructor() {
        super();

        axios.get('https://new-products-project.herokuapp.com/api/product/page/1/size/15')
        .then(res=> this.setState({ products: res.data}))   //CORS
        .catch(err=>this.setState({ hasError: true}));  //Cross origin resource sharing
                                          //not allowed
                                          //enable cors
        }
    

    render() {
        return <div>

                     <h1>Product List</h1>
                     <Link to="/products/new" className = "m-2 btn btn-danger btn-sm">
                        Add Product
                        <i className="fa fa-plus ms-2"></i>
                     </Link>
                     <IfElse cond = {this.state.hasError}>
                            <div className = "alert alert-danger">Something went wrong please try again later.</div>     
                            {this.state.products.data.map(product => <Product product={product}/>)}

                     </IfElse>
                
                </div>
    }
}




export default ProductList;