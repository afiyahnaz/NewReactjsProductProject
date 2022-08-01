//16.x
//hooks
import React from 'react';

import { useState }   from 'react';



//hooks
const CounterFunc = ({ count }) => {

    const [countState, setCountState] = useState(count); //destructuring
                                       //useState is hook
    
const inc =() => {
    setCountState(countState + 1 );

}

const dec =() => {
   setCountState(countState - 1 );

}
    return<>
             <h1>Counter {countState}</h1>
             <div className='btn-group'>
                <button className="btn btn-lg btn-success" onClick={inc}>++</button>
                <button className="btn btn-lg btn-danger" onClick={dec}>--</button>
             </div>
           </>
    

};


export default CounterFunc;