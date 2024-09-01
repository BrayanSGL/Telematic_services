import React, {useState} from "react";

function Slider(props) {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleMaxValue = () => {
        if (value === 100) {
            setValue(0);
        }
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                onMouseUp={handleMaxValue}
            />
            <p>Valor: {value}</p>
        </div>
    );
}

export default Slider;
