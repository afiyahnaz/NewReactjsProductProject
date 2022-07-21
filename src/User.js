const User = ({ user }) => <div className ="card   col-lg-4 m-3">
                      <img src={user.avatar_url} class="card-img-top" alt="image"></img>
                          <div className = "card-body"> 
                             <h3 className = "card-tittle">{user.login}</h3> 
                             Site Admin: <input type = "checkbox" checked= {user.site_Admin}></input>
                      </div>
                          <div className = "card-footer ">
                            <button className ="btn btn-sm btn-success">
                                Favorite &nbsp;
                                <i className="fa fa-heart"></i>

                                </button>

                          </div>

                  </div>;
               
        
              
      






export default User;