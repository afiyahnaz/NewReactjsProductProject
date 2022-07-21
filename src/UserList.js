import React from 'react';
import axios from 'axios';



class UserList extends React.Component{

      state = {
        users : []
      };
     
        constructor(){
            super();


            axios.get('https://api.github.com/users')  //code for fetching data from github
            .then((resolve,reject) => {
               this.setState({users:resolve.data});
            })
            .catch(err => {
                   console.log(err);
            });
         
        
        }

    render (){

        return<div className = "col-lg-2 col-md-3">
            <h1>Users</h1>
            {this.state.users.map((users) =>{
                 return <div className = "card">
                           <img src={users.avatar_url}className="card-img-top" alt="image"></img>
                            <div className = "card-body">
                               <h3 className = "card-tittle">{users.login}</h3> 
                            </div>
                               <div className = "card-footer">
                                   <button className = "btn btn-sm btn-success">
                                           Favourite   &nbsp;
                                              <i className="fa fa-heart"></i>
                                   
                                    </button>
                                 </div>  
                 
                       </div>
                      })}
          
                 </div>
        
                
        
    }
}



export default UserList;
