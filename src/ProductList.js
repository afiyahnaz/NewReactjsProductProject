import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


import Product from './Product';
import IfElse from './IfElse';
import ShouldRender from "./ShouldRender";
import productSvc from './Services/ProductSvc';
// import LoaderGif from './images/loaderGif.gif'
import Loader from './Loader';




const ProductList = () =>  {

    const [products, setProducts] = useState({
       
                 metadata:{},
                 data:[]

    });

    const [page, setPage]     = useState(1);
    const [ limit, setLimit]  = useState(10);
    const [search, setSearch] = useState('');
    const [sort, setSort]     = useState('');

    const [ hasError, setError]  = useState(false);
    const [ loading, setLoading] = useState(true);
   
    
       useEffect( ()=>{
        // IIFE
        (async function () {
            try{
                const res = await productSvc.get(page, limit, search, sort);
                setProducts(res.data);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }

        }) ();
       }, [page, limit, search, sort]); //no dependence so empty array

       const onRemoveChild = async () => {
           const res = await productSvc.get(); //deleteing child
          setProducts(res.data); //parent is refreshing
          setError(false);
        
          };

    const onPrev = () => {
        if (page > 1 )  setPage(page - 1 );
       };

    const onNext = () => {
       if (page < products.metadata.totalPages) setPage(page + 1 );
        
      };

    const onPageSizeChange = (evt) => {
           setLimit(evt.target.value);
          
        };

    const onSearch = (evt) => {
       if(evt.key === 'Enter') {
        console.log(evt.target.value);
        setSearch(evt.target.value); //make a api call
       }
       
    }

    const onSortChange = (evt) => {
        setSort(evt.target.value);
    };

    return <div>

    <h1>Product List</h1>
       <ShouldRender cond = {loading}>
                 <Loader/>
       </ShouldRender>
       

  <Link to="/products/new" className = "m-2 btn btn-danger btn-sm">
     Add Product
     <i className="fa fa-plus ms-2"></i>
  </Link>
  <IfElse cond = {hasError}>
         <div className = "alert alert-danger">Something went wrong please try again later.</div>  
         <div>
            <div className="btn-group">
                <button  disabled = {page === 1 } onClick = {onPrev } className="btn   btn-outline-secondary">
                    <i className = "fa fa-arrow-left"></i>
                </button>
                <div>
                    <select onChange={onPageSizeChange} value={limit} className="form-select">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
                <div>
                    <input  onKeyUp={onSearch} type = "text" className="form-control" placeholder = "search"/>
                </div>
                <div>
                    <select onChange={onSortChange} className="form-select">
                        <option value="">Sort By</option>
                        <option value ="price ASC">Price Ascending</option>
                        <option value="price DESC">price Descending</option>
                    </select>
                </div>
                <div>
                    <button  disabled className="btn btn-outline-secondary">
                            page {page} of {products.metadata.totalPages}
                    </button>
                  
                </div>
                <button  disabled ={page === products.metadata.totalPages} onClick ={onNext} className="btn   btn-outline-secondary">
                    <i className = "fa fa-arrow-right"></i>
                </button>
            </div>
              {products.data.map(product => <Product product={product} onDelete={onRemoveChild}/>)}
         </div>   
       

  </IfElse>

  </div>
};
export default ProductList;


  
          
    // constructor() { //constructor only used for instillazation purpose
        // super();

    // } 

        

      
    

 
     
    





// virtual DOM is also Object -->is in memory...update which is only changed
// DOM --> Browser
// Vue

//Mount
//constructor
//render
//copmponetDidMount

//update
//shouldComponentUpdate
//componetDidUpdate
//render

//unMount
//componentWillUnMount


