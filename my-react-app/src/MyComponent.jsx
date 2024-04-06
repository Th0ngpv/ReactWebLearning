// updater function = a function passed as an argument to setState()
//             ex: setYear(y => y + 1) 
//             Allow for safe updates based on the previous state
//             Used with multiple state updates and asynchronous functions
//             Good practice to use updater functions

import {useState} from 'react';

const MyComponent = () => {
    
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel };
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_,i) => i !== index));
    }

    const handleYearChange = (event) => {
        setCarYear(event.target.value);
    }

    const handleMakeChange = (event) => {
        setCarMake(event.target.value);
    }

    const handleModelChange = (event) => {
        setCarModel(event.target.value);
    }
    
    return (
        <div>
            <h2>List of Car Objects</h2>
            <ol>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ol>

            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange}
            placeholder='enter car make'/>
            <input type="text" value={carModel} onChange={handleModelChange}
            placeholder='enter car model'/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent;
