import { Link } from 'react-router-dom';

import PhoneIcon from './images/phone.png';

import  './Product.css';


function  Product ({ product }) {

  const calculateDiscountPrice = () => {
    const discountAmount =  (product.price * product.discount / 100);
    return product.price - discountAmount;

  };
    return <>
     <div className = "card col-lg-2 m-5">
            {
              product.img ?  
                 <img className = "card-img" src = {product.img}  /> :
                 <img className = "card-img" src = {PhoneIcon}  /> 
            }     
       
        
          <div className = "card-body">
             <Link to = "/products/{product._id}">
               <div className = "card-title">{product.brand} {product.model}</div>
                 <div className="old-price"><b>${product.price}</b></div> 
                   <div className="new-price"><b>${calculateDiscountPrice()}</b></div>
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