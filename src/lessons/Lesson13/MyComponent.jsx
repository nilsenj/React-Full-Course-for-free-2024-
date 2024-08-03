import {useState} from "react";

const MyComponent = () => {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => index !== i));
    }
    return (
        <>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );
}

export default MyComponent;