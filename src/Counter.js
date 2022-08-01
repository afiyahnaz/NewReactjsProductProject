import React from 'react';


class Counter extends React.Component{


    state = {   //state can not be assiased outside the class
           count: 0 //it is internal to component
    };

    constructor(props){
        super(props);
        this.state.count = this.props.count;  //reading props from APP
        console.log('constructor')
        // this.onInc = this.onInc.bind(this);
        // this.onDec = this.onDec.bind(this);
    }

       onInc =() => {
              const currentCount = this.state.count;
              //mutation or modifing by using state and class
              this.setState({
                count:currentCount + 1
              });
       }
       onDec = ()=>  {
             const currentCount = this.state.count;
             //mutation or modifing by using state and class
             this.setState({
                count:currentCount - 1
             });
       }

    //    componentDidMount(){  //who is calling React Library
    //     console.log('componentDidMount');

    //    }

    //    shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.count === nextState.count) return false;
    //     return true;
    //    }

       componentDidUpdate(){
        console.log('Updated');
       }

       
       componentWillUnmount(){
        console.log('unmonted');
       }

       render () {
        console.log('render');

        return <>  
              <h1>Counter</h1>
              <h4>Count: {this.state.count}</h4>
              <button onClick ={this.onInc } className = "btn btn-small">++</button>
              <button onClick = {this.onDec} className = "btn btn-small">--</button>

         </>
                

    }
}


export default Counter;