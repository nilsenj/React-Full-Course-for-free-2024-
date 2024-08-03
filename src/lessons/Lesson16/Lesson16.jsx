import {useEffect, useState} from "react";

const Lesson16 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = "Count: " + count;

        return () => {
            //some cleanup code
        }
    }, [count]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            //some cleanup code
            removeEventListener("resize", handleResize);
        }
    }, [count]);

    function handleResize(event) {
            console.log("RESIZE HAPPENED", "height: " + event.target.innerHeight, "width: " + event.target.innerWidth);
    }
    function addCount() {
        setCount(c => c + 1);
    }

    function subractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    return (
        <>
            <h2>Lesson16</h2>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
};


export default Lesson16;
