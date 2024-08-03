import {useState} from "react";
import './lesson10.css'
const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    return (
        <div className="colorpicker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>selected color: {color}</p>
            </div>
            <lable>Select a color:</lable>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker;