import "./lesson4.css";
import PropTypes from "prop-types";

const Student = (props) => {

    // New way to establish default prop values
    const StudentDefaultProps = {
        name: "Guest",
        age: 0,
        isStudent: false
    }

    const newProps = {...StudentDefaultProps, ...props};

    return (
        <div className="student">
            <p>Name: {newProps.name}</p>
            <p>Age: {newProps.age}</p>
            <p>Student: {newProps.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

// DEPRECATED
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false
// }
export default Student;