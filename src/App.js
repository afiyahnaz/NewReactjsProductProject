import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Header from './Header';
import UserList from './UserList';
import Footer from './Footer';







const App = () =>{
   return  <div>
         <Header /> 
      
         <div className = "container">
               <UserList/>
         </div>  
           <Footer />
      
        
       </div>

};

export default App;