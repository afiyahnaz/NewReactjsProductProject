import { Link } from "react-router-dom";

const Header =() =>{

    return <nav class="navbar navbar-expand-lg navbar-success bg-info">
    <div class="container">
    <i className="fa fa-hashtag text-danger"></i>

      <a class="navbar-brand" href="#">FSA Products</a>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
         
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/products">Product</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/users">Users</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>

            <div className=" container d-flex flex-row   justify-content-end">
           <li>
            <button className = "btn btn-sm btn-danger mx-3 ">Creat An Account</button>
           </li>
           <li>
            <button className = "btn btn-sm btn-success ">Login</button>
           </li>
           </div>
         
          
         
          
        </ul>
       
      </div>
    </div>
  </nav>

};



export default Header;