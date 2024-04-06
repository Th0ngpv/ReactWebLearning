// updater function = a function passed as an argument to setState()
//             ex: setYear(y => y + 1) 
//             Allow for safe updates based on the previous state
//             Used with multiple state updates and asynchronous functions
//             Good practice to use updater functions

import {useState} from 'react';

const MyComponent = () => {
    
    const [foods, setFoods] = useState(["burger","apple","banana"]);
    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        if (newFood.length > 0) {
            document.getElementById("foodInput").value = "";
            //updater function for an array in React
            setFoods(f => [...f, newFood])
        }
    }
    const handleRemoveFood = (index) => {
        
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ol>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ol>
            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
