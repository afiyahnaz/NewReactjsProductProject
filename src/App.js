import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ProductList from './ProductList';
import Contact from './Contact';
import UserList from './UserList';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import NewProduct from "./NewProduct";




//SPA single page one
//one page index.html



const App = () =>{
   return  <div>
         
               <Header /> 
                    <div className = "container">
                        {/* dynamic content placeholder */}
                 
                           <Routes>
                               <Route path = '/' element = {<Home/>} />
                               <Route path = '/about' element = {<About/>} />
                               <Route path = '/contact' element = {<Contact/>} />
                               <Route path = '/users' element = {<UserList/>} />
                               <Route path = '/products' element = {<ProductList/>} />
                               <Route path = '/products/:id' element = {<ProductDetail/>} />
                               <Route path = '/products/new' element = {<NewProduct/>} />
                               {/* <Route path = '*' element = {<Home />} /> */}
                                <Route path = '*' element = {<NotFound/>} />
                           </Routes>
                      </div>  
              <Footer />
       

   </div>

};

export default App;