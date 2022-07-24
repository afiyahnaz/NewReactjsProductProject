import { Link } from "react-router-dom";
import React from 'react';


import Product from './Product';
import IfElse from './IfElse';
import productSvc from './Services/ProductSvc';



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

                    productSvc.get()
                    .then(res => this.setState({ products: res.data, hasError: false}))
                    .catch(err => this.setState( { hasError: true}))

      
                }

        onRemoveChild =async () => {
            console.log('child deleted');
            const res = await productSvc.get()
            this.setState({ products: res.data, hasError: false});
            
        };
    

    render() {
        return <div>

                     <h1>Product List</h1>
                     <Link to="/products/new" className = "m-2 btn btn-danger btn-sm">
                        Add Product
                        <i className="fa fa-plus ms-2"></i>
                     </Link>
                     <IfElse cond = {this.state.hasError}>
                            <div className = "alert alert-danger">Something went wrong please try again later.</div>     
                            {this.state.products.data.map(product => <Product product={product} onDelete={this.onRemoveChild}/>)}

                     </IfElse>
                
                </div>
    }
}




export default ProductList;