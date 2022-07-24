import axios from './axiosSvc';



const get = () =>{
   return  axios.get('/api/product/page/1/size/15')
       //CROS  //Cross origin resource sharing
                                          //not allowed
                                          //enable cors

};

const post = ( product ) => {
    return   axios.post('/api/product',product);
}

const getProductById = (id) => {
    return  axios.get('/api/product/' + id );

}


export default { get ,
                post,
                getProductById
            };