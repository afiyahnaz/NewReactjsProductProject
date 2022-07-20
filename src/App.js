import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Counter from './Counter';
import Naz from './Naz';







const App = () =>{
   return  <div>
            <Counter count = {10}/>
            <Naz discount ={100}/>
            <Counter count = {20}/>
            <Naz discount = {50}/>
            <Counter count = {80}/>
            <Naz discount = {200}/>
          
       
         
          
           </div>

};

export default App;