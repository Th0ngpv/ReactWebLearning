// updater function = a function passed as an argument to setState()
//             ex: setYear(y => y + 1) 
//             Allow for safe updates based on the previous state
//             Used with multiple state updates and asynchronous functions
//             Good practice to use updater functions

import {useState} from 'react';

const MyComponent = () => {
    
    const [car, setCar] = useState( {year: 1970,
                                    make:"Tesla",
                                    model: "3"});
    const handleYearChange = (e) => {
        //updater for an object
        setCar(c => ({ ...c,year: e.target.value}));
    }
    const handleMakeChange = (e) => {
        setCar(c => ({ ...c,make: e.target.value}));
    }
    const handleModelChange = (e) => {
        setCar(c => ({ ...c,model: e.target.value}));
    }

    return (
        <div>
            <p>your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value = {car.year} onChange={handleYearChange}/>
            <input type="text" value = {car.make} onChange={handleMakeChange}/>
            <input type="text" value = {car.model} onChange={handleModelChange}/>
        </div>
    );
}

export default MyComponent;
