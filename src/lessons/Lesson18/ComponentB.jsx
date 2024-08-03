import PropTypes from 'prop-types';
import {useContext} from "react";
import {UserContext} from "./Lesson18.jsx";

const ComponentB = () => {
    const user = useContext(UserContext);
    return <div className="component">
        <h2 >ComponentB. Props user: {user}</h2>
    </div>
}

ComponentB.propTypes = {
    user: PropTypes.object
}

export default ComponentB;