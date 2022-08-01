import { Link } from "react-router-dom";
import React from 'react';


import Product from './Product';
import IfElse from './IfElse';
import ShouldRender from "./ShouldRender";
import productSvc from './Services/ProductSvc';
// import LoaderGif from './images/loaderGif.gif'
import Loader from './Loader';




class ProductList extends React.Component {


    state ={
         products : {
            metadata:{},
            data:[]
         },
         hasError: false,
         loading: true   //intial state false
    };
    // constructor() { //constructor only used for instillazation purpose
        // super();

    // } 

        componentDidMount = async () => {
            try{
                const res = await productSvc.get();
                this.setState({ products: res.data,  hasError: false});
            }  catch (err) {
                this.setState( { hasError: true});
            }  finally {
               this.setState({ loading: false})

            }

        }

        onRemoveChild = async () => {
            console.log('child deleted');
            const res = await productSvc.get(); //deleteing child
            this.setState({ products: res.data, hasError: false}); //parent is refreshing
            
        };
    

    render() {
        return <div>

                       <h1>Product List</h1>
                          <ShouldRender cond = {this.state.loading}>
                                    <Loader/>
                          </ShouldRender>

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