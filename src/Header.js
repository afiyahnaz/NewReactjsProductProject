const Header =() =>{

    return <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <i className="fa fa-hashtag text-danger"></i>

      <a class="navbar-brand" href="#">FSA Products</a>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Product</a>
          </li>
           <li>
            <button className = "btn btn-sm btn-danger mx-3 ">Creat An Account</button>
           </li>
           <li>
            <button className = "btn btn-sm btn-success ">Login</button>
           </li>
          
         
          
        </ul>
       
      </div>
    </div>
  </nav>

};



export default Header;