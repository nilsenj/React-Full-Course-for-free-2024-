import {useState} from "react";

const Lesson15 = () => {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the dog"])
    const [newtask, setNewtask] = useState([])

    function handleInputChange(event) {
        setNewtask(event.target.value);
    }

    function addTask() {
        if (newtask.trim().length) {
            setTasks(t => [...t, newtask]);
            setNewtask("");
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <h2>Lesson15</h2>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <ol>
                    {
                        tasks.map((task, index) =>
                            <li key={index}>
                                <span className="text">{task}</span>
                                <button
                                    className="delete-button"
                                    onClick={() => removeTask(index)}>Delete
                                </button>
                                <button
                                    className="move-button"
                                    onClick={() => moveTaskUp(index)}>👍
                                </button>
                                <button
                                    className="move-button"
                                    onClick={() => moveTaskDown(index)}>👎
                                </button>
                            </li>
                        )
                    }
                </ol>
                <input type="text" placeholder="Enter a task..."
                       value={newtask}
                       onChange={(event) => handleInputChange(event)}/>
                <button onClick={() => addTask()}
                        className="add-button">Add
                </button>
            </div>
        </>
    );
};


export default Lesson15;
