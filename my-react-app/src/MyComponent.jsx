// updater function = a function passed as an argument to setState()
//             ex: setYear(y => y + 1) 
//             Allow for safe updates based on the previous state
//             Used with multiple state updates and asynchronous functions
//             Good practice to use updater functions

import {useState} from 'react';

const MyComponent = () => {
    
    const [count, setCount] = useState(0);
    
    const increase = () => {

        //takes the PENDING state to cal the next state
        //react puts your updater function in a queue
        //during the next render, it will call them them in the same order

        setCount(c => c + 1);
        setCount(c => c + 1);
    };
    const decrease = () => {
        setCount(c => c - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            <button onClick = {reset}>reset</button>
        </>
    );
}

export default MyComponent;
