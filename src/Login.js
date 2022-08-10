import React, {useState} from 'react';
import userSvc from './Services/userSvc';
import ShouldRender from './ShouldRender';
import { useNavigate } from 'react-router-dom';


const Login =  () => {


   const [ user, setUser]  =  useState({email: '', password: '' });
   const [hasError, setError] = useState(false);
   const navigate = useNavigate();

    const  onLogin =async  (evt) => {
      try{
         evt.preventDefault();
         const res = await userSvc.login(user);
         console.log(res);
          //save token here
          localStorage.setItem('user', JSON.stringify(res.data));
          //redirect user to products page
          navigate('/products');
      } catch (e) {
        if(e.response.status === 401) setError(true);
      }
       
    };

    const  onInputChange = (evt) => {
      const newState = {...user, [evt.target.name]: evt.target.value};
      setUser(newState);

    };

 return<div className="col-md-6 mb-5">
    <ShouldRender  cond={hasError}>
         <div className="alert alert-danger">Wrong UserName or Password</div> 

    </ShouldRender> 
    <form onSubmit={onLogin}>
        <h3>Login</h3>
       <div className="m-3">
          <input  onChange={onInputChange} name="email" type ="text"  className="form-control" placeholder="Email"/>
       </div>
       <div className="m-3">
          <input  onChange={onInputChange}  name="password" type ="password" className="form-control" placeholder="Password"/>
       </div>
       <div className="m-3 text-center">
          <button type="submit" className="btn btn-md btn-success">Login</button>
       </div>
    </form>     
 </div>

}




export default Login;