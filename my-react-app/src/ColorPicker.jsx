//onChange = event handler used primarily with form elements
//             ex: <input>, <textarea>, <select>, <radio>,...
//             Triggers a function every time the value of the input changes

import {useState} from 'react';

const ColorPicker = () => {
    
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" onChange={handleColorChange}/>

        </div>
    );
}

export default ColorPicker;
