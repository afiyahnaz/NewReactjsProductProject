import React from 'react';
import axios from 'axios';
import ShouldRender from './ShouldRender';

class NewProduct extends React.Component{

    state ={
        product:{
            brand: '',
            model: '',
            price: '',
            instock: false,
            category: 'Electronics'

        },
        hasError: false,
        success: false
    };

    onInputChange = (event) =>{
        const product = this.state.product;
           const newProduct ={
            ...product,
        [event.target.name]:event.target.value
    };
        this.setState({ product: newProduct });

    }   
    onSave =  async () =>{
        try{
            await axios.post('https://new-products-project.herokuapp.com/api/product',this.state.product);
            this.setState({ success: true, hasError: false, product: {} });
            } catch (e) {
            this.setState({ success: false, hasError: true });
            console.log(e);
           }
      }

     

    render () {
        const { brand,model,price,inStock } = this.state.product;
        return <div className = "col-lg-3">
                     <h1>List Of products</h1>

                       <ShouldRender cond={this.state.success}>
                                <div className="alert alert-success">
                                  successfully Saved.
                             </div>
                        </ShouldRender>
                        <ShouldRender cond={this.state.hasError}>
                                <div className="alert alert-danger">
                               Something Went Wrong.Please try Again
                             </div>
                        </ShouldRender>
                          
                         
                  
                     <div>
                          <label for ="Brand" class="form-label text-danger font-bold mt-3">Brand Name</label>
                          <input id="Brand" name="brand" value={brand}
                          className="form-control"type ="text" placeholder="Brand name" onChange={this.onInputChange}/>
                     </div>
                     <div>
                        <label for="Model" className="form-label text-danger mt-3">Model</label>
                        <input  id ="Model" name="model"   value={model}
                        type="text" className="form-control" placeholder="Enter the Model" onChange={this.onInputChange}/>
                     </div>
                     <div>
                        <label for ="price" className="form-label text-danger mt-3">Price</label>
                        <input id ="price" name="price"  value={price} type = "text"  
                         className = "form-control" placeholder = "Enter the price" onChange={this.onInputChange}/>
                     </div>
                    
                        <label for="stock" className="form-label m-3 text-danger">InStock</label>
                        
                        <div class= "form-check">
                            <input className="form-check-input" value={inStock} type="radio" name="flexRadioDefault" id ="flexRadioDefault1" onChange={this.onInputChange}/>
                            <label className="form-check-label" for="flexRadioDefault1">Yes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" value={inStock} type="radio" name="flexRadioDefault" id ="flexRadiofault2" onChange={this.onInputChange}/>
                            <label class="form-check-label" for="flexRadioDefault2">No</label>
                        </div>
                         <div>
                        <button onClick ={this.onSave} className="btn btn-success btn-sm m-3" >save</button>

                         </div>
                       

        </div>
    }
};



 export default NewProduct;