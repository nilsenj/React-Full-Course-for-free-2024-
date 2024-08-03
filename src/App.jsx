import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainHeader from "./Components/MainHeader.jsx";
import Lesson1 from "./lessons/Lesson1/Lesson1.jsx";
import Lesson2 from "./lessons/Lesson2/Lesson2.jsx";
import Lesson3 from "./lessons/Lesson3/Lesson3.jsx";
import Lesson4 from "./lessons/Lesson4/Lesson4.jsx";
import Lesson5 from "./lessons/Lesson5/Lesson5.jsx";
import Lesson6 from "./lessons/Lesson6/Lesson6.jsx";
import Lesson7 from "./lessons/Lesson7/Lesson7.jsx";
import Lesson8 from "./lessons/Lesson8/Lesson8.jsx";
import Lesson9 from "./lessons/Lesson9/Lesson9.jsx";
import Lesson10 from "./lessons/Lesson10/Lesson10.jsx";
import Lesson11 from "./lessons/Lesson11/Lesson11.jsx";
import Lesson12 from "./lessons/Lesson12/Lesson12.jsx";
import Lesson13 from "./lessons/Lesson13/Lesson13.jsx";
import Lesson14 from "./lessons/Lesson14/Lesson14.jsx";
import Lesson15 from "./lessons/Lesson15/Lesson15.jsx";
import Lesson16 from "./lessons/Lesson16/Lesson16.jsx";
import Lesson17 from "./lessons/Lesson17/Lesson17.jsx";
import Lesson18 from "./lessons/Lesson18/Lesson18.jsx";

function App() {
    return (
        <>
            <Router>
                <MainHeader></MainHeader>
                <Routes>
                    <Route path="/lesson1" element={ <Lesson1/> }/>
                    <Route path="/lesson2" element={ <Lesson2/> }/>
                    <Route path="/lesson3" element={ <Lesson3/> }/>
                    <Route path="/lesson4" element={ <Lesson4/> }/>
                    <Route path="/lesson5" element={ <Lesson5/> }/>
                    <Route path="/lesson6" element={ <Lesson6/> }/>
                    <Route path="/lesson7" element={ <Lesson7/> }/>
                    <Route path="/lesson8" element={ <Lesson8/> }/>
                    <Route path="/lesson9" element={ <Lesson9/> }/>
                    <Route path="/lesson10" element={ <Lesson10/> }/>
                    <Route path="/lesson11" element={ <Lesson11/> }/>
                    <Route path="/lesson12" element={ <Lesson12/> }/>
                    <Route path="/lesson13" element={ <Lesson13/> }/>
                    <Route path="/lesson14" element={ <Lesson14/> }/>
                    <Route path="/lesson15" element={ <Lesson15/> }/>
                    <Route path="/lesson16" element={ <Lesson16/> }/>
                    <Route path="/lesson17" element={ <Lesson17/> }/>
                    <Route path="/lesson18" element={ <Lesson18/> }/>
                    {/* ... add routes for all lessons */}
                    <Route path="/" exact element={() => <h1>Home Page</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
