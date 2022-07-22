import { Link } from 'react-router-dom';

import PhoneIcon from './images/phone.png';


function  Product ({ product }) {
    return <>
     <div className = "card col-lg-4 m-5">
            {
              product.img ?  
                 <img className = "card-img" src = {product.img}  /> :
                 <img className = "card-img" src = {PhoneIcon}  /> 
            }     
       
        
          <div className = "card-body">
             <Link to = "/products/{product._id}">
               <div className = "card-title">{product.brand} {product.model}</div>
                  <b>${product.price}</b>
                    <div>
                       In Stock: <input type ="checkbox" checked={product.instock} />
                 </div>
            </Link>  
           
             </div>
             <div className="card-footer">
                 <button className="btn btn-sm btn-success">
                     Add to cart &nbsp;
                     <i class="fa fa-cart-plus  "></i>
                 </button>
             </div>

          </div>
    </>
};




export default Product;