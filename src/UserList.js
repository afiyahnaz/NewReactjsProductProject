import React from 'react';
import axios from 'axios';
import User from './User';


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

    render () {  // here rendering doen 2 times bcoz it is ascynronous function
        console.log('in render');
        return <div className=" col-lg-4">
                  <h1>User</h1>
                 
                  {this.state.users.map(usr => <User user = {usr} /> )}
               </div>
    }
}




