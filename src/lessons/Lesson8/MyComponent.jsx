import {useState} from "react";
import Counter from "./Counter.jsx";

const MyComponent = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
        console.log(name);
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmplyedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is employed: {isEmployed ? 'YES' : 'NO'}</p>
                <button onClick={toggleEmplyedStatus}>Toggle Status</button>

            </div>
            <h2>Counter</h2>
            <Counter></Counter>
        </>
    );
}

export default MyComponent;