import "./lesson18.css";
import {createContext, useContext, useState} from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();
const Lesson18 = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState("BroCode");
    return (
        <>
            <h2>Lesson18. UseContext</h2>
            <div className="box component">
                <h2>Component A</h2>
                <h3>{`Hello ${user}`}</h3>
                <UserContext.Provider value={user}>
                    <ComponentB user={user}></ComponentB>
                </UserContext.Provider>
            </div>
        </>
    );
};


export default Lesson18;
