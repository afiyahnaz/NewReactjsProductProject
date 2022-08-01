//16.x
//hooks
import React from 'react';

import { useState }   from 'react';



//hooks
const CounterFunc = ({ count }) => {

    const [countState, setCountState] = useState(count);

    
const inc =() => {
    setCountState(1000);

}

const dec =() => {
   setCountState(10);

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