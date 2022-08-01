import React from 'react';



class AutoCounter extends React.Component{

     state = { count: 0  }
       

     componentDidMount = () => {
       this.interval = setInterval( ()=> {
           console.log('set Interval');
           let old = this.state.count;
           this.setState({ count: ++old });
       },1000);

     }

    componentWillUnmount(){
        console.log('clear the interval');
        clearInterval(this.interval);
    }
    
     render () {

        return <>
              <h1>Count: {this.state.count}</h1>
        
        </>
    }
};


export default AutoCounter;