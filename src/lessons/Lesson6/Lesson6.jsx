import List from "./List.jsx";
import "./lesson6.css";
const Lesson6 = () => {
    const fruits = [
        {id: 1, name: "apple", calories: 95},
        {id: 2, name: "orange", calories: 45},
        {id: 3, name: "banana", calories: 105},
        {id: 4, name: "coconut", calories: 159},
        {id: 5, name: "pineapple", calories: 37}
    ];
    const vegetables = [
        {id: 6, name: "potatoes", calories: 110},
        {id: 7, name: "celery", calories: 15},
        {id: 8, name: "carrots", calories: 25},
        {id: 9, name: "corn", calories: 63},
        {id: 10, name: "broccoli", calories: 50}
    ];
    return (
        <>
            <h2>Lesson6</h2>
            <List items={fruits} category="Fruits"></List>
            <List items={vegetables} category="Vegetables"></List>
        </>
    );
};


export default Lesson6;
