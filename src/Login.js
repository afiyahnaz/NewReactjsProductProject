import React, {useState} from 'react';
import userSvc from './Services/userSvc';
import ShouldRender from './ShouldRender';

const Login =  () => {


   const [ user, setUser]  =  useState({email: '', passwor: '' });
   const [hasError, setError] = useState(false);

    const  onLogin =async  (evt) => {
        try{
            evt.preventDefault();
            const res =   await userSvc.login(user);
            console.log(res);

        } catch (e)  {
            if (e.response.status === 401) setError(true);
        }
          
     
    };

    const  onInputChange =(evt) => {
      const newState = {...user, [evt.target.name]: evt.target.value};
      setUser(newState);

    }

 return<div className="col-md-6 mb-5">
    <ShouldRender  cond={hasError}>
        <div className="alert alert-danger">Wrong UserName or Password</div>

    </ShouldRender>
    <form onSubmit={onLogin}>
        <h3>Login</h3>
       <div className="m-3">
          <input  onChange={onInputChange} type ="text"  className="form-control" placeholder="Email"/>
       </div>
       <div className="m-3">
          <input  onChange={onInputChange} type ="password" className="form-control" placeholder="Password"/>
       </div>
       <div className="m-3 text-center">
          <button type="submit" className="btn btn-md btn-success">Login</button>
       </div>
    </form>     
 </div>

}




export default Login;