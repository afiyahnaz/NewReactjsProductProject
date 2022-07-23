import axios from 'axios';

const host = 'https://new-products-project.herokuapp.com';

const get = () =>{
   return  axios.get(host + '/api/product/page/1/size/15')
       //CROS  //Cross origin resource sharing
                                          //not allowed
                                          //enable cors

};

const post = ( product ) => {
    return   axios.post(host + '/api/product',product);
}

const getProductById = (id) => {
    return  axios.get(host + '/api/product/' + id );

}


export default { get ,
                post,
                getProductById
            };