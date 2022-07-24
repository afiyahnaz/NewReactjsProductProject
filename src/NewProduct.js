import React from 'react';
import ShouldRender from './ShouldRender';
import ProductSvc from './Services/ProductSvc';

class NewProduct extends React.Component{

    state ={
        product:{
            brand: '',
            model: '',
            price: '',
            instock: false,
            category: 'Electronics',
            discount:20

        },
        hasError: false,
        success: false
    };

    onInputChange = (event) =>{
        const product = this.state.product;

      
         const newProduct ={
            ...product, //here spread operator is used to retain dta entered by user not to vanish
        [event.target.name]:event.target.value
    };
       
        this.setState({ product: newProduct });

    }   
    onSave =  async () =>{
        try{
            //consistance data
            await ProductSvc.post(this.state.product);
            this.setState({ success: true, hasError: false, product: {} });
            } catch (e) {
            this.setState({ success: false, hasError: true });
            console.log(e);
           }
      }

      isInValid = () => {
        const { brand, model, price }  = this.state.product;
        return !brand || !model || !price

      }

     

    render () {
        const { brand,model,price,inStock } = this.state.product;
        return <div className = "col-lg-4">
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
                          <label for ="Brand" class="form-label text-success fw-bold mt-3">Brand Name</label>
                          <input id="Brand" name="brand" value={brand}
                          className="form-control"type ="text" placeholder="Brand name" onChange={this.onInputChange}/>
                         { !brand && <span className="text-danger">Brand required</span>}
                     </div>
                     <div>
                          <label for="Model" className="form-label text-success fw-bold mt-3">Model</label>
                          <input  id ="Model" name="model"   value={model}
                                   type="text" className="form-control" placeholder="Enter the Model" onChange={this.onInputChange}/>
                            {!model && <span className="text-danger">Model required</span>}
                     </div>
                     <div>
                           <label for ="price" className="form-label text-success fw-bold mt-3">Price</label>
                           <input id ="price" name="price"  value={price} type = "text"  
                                 className = "form-control" placeholder = "Enter the price" onChange={this.onInputChange}/>
                            {!price && <span className="text-danger">Price required</span>}
                     </div>
                    
                        <label for="stock" className="form-label m-3 text-success fw-bold">InStock</label>
                        
                     <div   class= "form-check">
                            <input className="form-check-input" value={inStock} type="radio" name="flexRadioDefault" id ="flexRadioDefault1" onChange={this.onInputChange}/>
                            <label className="form-check-label" for="flexRadioDefault1">Yes</label>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input" value={inStock} type="radio" name="flexRadioDefault" id ="flexRadiofault2" onChange={this.onInputChange}/>
                            <label class="form-check-label" for="flexRadioDefault2">No</label>
                     </div>
                     <div>
                            <button disabled={this.isInValid()} onClick ={this.onSave} className="btn btn-success btn-sm m-3" >save</button>

                     </div>
                       

          </div>
    }
};



 export default NewProduct;