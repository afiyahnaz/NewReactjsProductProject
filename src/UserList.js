import React from 'react';
import axios from 'axios';


export default class UserList extends React.Component {

    state ={
        users : []
    };

    constructor(){
        super();

        axios.get('http://api.github.com/users')
           .then(res=> {
              this.setState({ users: res.data });
            })
            .catch(error => {
                console.log(error);
           
        })
    }

    render () {
        return <div className=" col-lg-4">
                  <h1>User</h1>
                  {this.state.users.map(user =>{
                    return <>
                               <div className ="card   col-lg-4">
                                  <img src={user.avatar_url} class="card-img-top" alt="image"></img>
                                      <div className = "card-body"> 
                                         <h3 className = "card-tittle">{user.login}</h3> 

                                  </div>
                                      <div className = "card-footer">
                                        <button className ="btn btn-sm btn-success">
                                            Favorite &nbsp;
                                            <i className="fa fa-heart"></i>

                                            </button>

                                      </div>

                              </div>
                           
                    
                           </>
                    })}
               </div>
    }
}




