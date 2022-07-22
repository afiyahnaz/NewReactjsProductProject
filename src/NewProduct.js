import React from 'react';


class NewProduct extends React.Component{

    state ={
        brand: '',
        model: '',
        price: '',
        instock: false,
        category: 'Electronics'
    };

    onInputChange = (event) =>{
      
        this.setState({
            [event.target.name]:event.target.value
        })

    }   
    onSave = () =>{
       console.log(this.state);

      }

     

    render () {
        return <div className = "col-lg-4">
                     <h1>ProductPage</h1>
                     <div>
                          <label for ="Brand" class="form-label text-danger font-bold mt-3">Brand Name</label>
                          <input id="Brand" name="brand" 
                          className="form-control"type ="text" placeholder="Brand name" onChange={this.onInputChange}/>
                     </div>
                     <div>
                        <label for="Model" className="form-label text-danger mt-3">Model</label>
                        <input  id ="Model" name="model"  
                        type="text" className="form-control" placeholder="Enter the Model" onChange={this.onInputChange}/>
                     </div>
                     <div>
                        <label for ="price" className="form-label text-danger mt-3">Price</label>
                        <input id ="price" name="price" type = "text"  
                         className = "form-control" placeholder = "Enter the price" onChange={this.onInputChange}/>
                     </div>
                    
                        <label for="stock" className="form-label m-3 text-danger">InStock</label>
                        
                        <div class= "form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id ="flexRadioDefault1" onChange={this.onInputChange}/>
                            <label className="form-check-label" for="flexRadioDefault1">Yes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id ="flexRadiofault2" onChange={this.onInputChange}/>
                            <label class="form-check-label" for="flexRadioDefault2">No</label>
                        </div>
                         <div>
                        <button onClick ={this.onSave} className="btn btn-success btn-sm m-3" >save</button>

                         </div>
                       

        </div>
    }
};



 export default NewProduct;