import React from 'react';



class Naz extends React.Component{


    state = {    //state cannot be used outside component
        discount :101
    };

    constructor(props){
        super(props);
        this.state.discount = this.props.discount
    }


    onInc =() =>{
        const currentDiscount = this.state.discount;
        this.setState({
            discount:currentDiscount + 1
        });
    }

    onDec =()=>{
        const currentDiscount = this.state.discount;
        this.setState({
            discount:currentDiscount -1 
        });
    }

    render () {

        return <>
        <h1>Naz</h1>
        <h2>calculation: {this.state.discount}</h2>
        <button  onClick ={this.onInc}  className = "btn btn-sm">++</button>
        <button  onClick ={this.onDec}   className = "btn btn-sm">--</button>
        
        </>
    }
}



export default Naz;