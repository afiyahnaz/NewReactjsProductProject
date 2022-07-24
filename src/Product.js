import { Link } from 'react-router-dom';

import PhoneIcon from './images/phone.png';
import ProductSvc from './Services/ProductSvc';

import  './Product.css';


function  Product ({ product, onDelete }) {

  const calculateDiscountPrice = () => {
    const discountAmount =  (product.price * product.discount / 100);
    return product.price - discountAmount;

  };

  const onRemove = async  () =>{
    await  ProductSvc.remove(product._id);
    onDelete();
  };



    return <>
     <div className = "card col-lg-3 m-5">
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
                     <button className="btn btn-sm btn-danger ms-5" onClick ={ onRemove  }>
                      <i class = "fa fa-close">Delete</i>

                     </button>
                
             </div>

          </div>
    </>
};




export default Product;