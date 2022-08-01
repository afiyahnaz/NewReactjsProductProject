import React, { useEffect } from 'react';

import { useState } from 'react';




// class AutoCounter extends React.Component{

//      state = { count: 0  }
       

//      componentDidMount = () => {
//        this.interval = setInterval( ()=> {
//            console.log('set Interval');
//            let old = this.state.count;
//            this.setState({ count: ++old });
//        },1000);

//      }

//     componentWillUnmount(){
//         console.log('clear the interval');
//         clearInterval(this.interval);
//     }

//      render () {

//         return <>
//               <h1>Count: {this.state.count}</h1>
        
//         </>
//     }
// };

const AutoCounter = () =>{
    const [count, setCount ] = useState(0);//useState is hook

    useEffect(() => {
        //useEffect works as componentDidMount
        //useEffect works as componentDidUpdate
        //useEffcet works as componentWillUnMount
        const timmer = setTimeout(() => {
            console.log('set interval');
            // let old = this.state.count;
            // this.setState({ count: ++old});
            setCount(count + 1 );
        },1000);

        return () => {
            console.log('unMounted');
            clearInterval(timmer);
        }
     }, [count]);//only one dependency use this if not keep empty array

    return <h1>Count: {count}</h1>

};

export default AutoCounter;