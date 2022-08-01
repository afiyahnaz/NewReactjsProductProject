import React from 'react';
import AutoCounter from './AutoCounter';
import Counter from './Counter';


// Life cycle methods


function Home() {
    return <>
         {/* <Counter/> */}
        <AutoCounter  count={0}/>
    
    </>
}




export default Home;