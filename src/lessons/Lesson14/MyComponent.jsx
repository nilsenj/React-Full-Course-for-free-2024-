import {useState} from "react";

const MyComponent = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");


    function handleCarAdd() {
        const newCar = {year: carYear, model: carModel, make: carMake};
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear())
        setCarModel("")
        setCarMake("")
    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    return (
        <>
            <h2>List of car objects</h2>

            {cars.map((item, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {item.year} {item.make} {item.model}
                </li>
            )
            }
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <br/>
            <input type="text" value={carMake} placeholder="Enter Car Make" onChange={handleMakeChange}/>
            <br/>
            <input type="text" value={carModel}  placeholder="Enter Car Model" onChange={handleModelChange}/>

            <br/>
            <br/>
            <button onClick={handleCarAdd}>Add New Car</button>
        </>
    );
}

export default MyComponent;