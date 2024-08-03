import {useState} from "react";

const MyComponent = () => {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event) {
        setCar(c => {
            return {...c, year: event.target.value};
        });
    }
    function handleMakeChange(event) {
        setCar(c => {
            return {...c, make: event.target.value};
        });
    }
    function handleModelChange(event) {
        setCar(c => {
            return {...c, model: event.target.value};
        });
    }
    return (
        <>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </>
    );
}

export default MyComponent;