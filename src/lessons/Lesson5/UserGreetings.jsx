import "./lesson5.css";
import PropTypes from "prop-types";

const UserGreetings = (props) => {

    // New way to establish default prop values
    const UserGreetingsDefaultProps = {
        username: "Guest",
        isLoggedIn: false
    }

    const newProps = {...UserGreetingsDefaultProps, ...props};

    const welcomeMessage = <h2 className="welcome-message">
        Welcome {newProps.username}
    </h2>;

    const loginPrompt = <h2 className="login-prompt">
        Please log in to continue
    </h2>;

    return (
        newProps.isLoggedIn ? welcomeMessage : loginPrompt
    );
}

UserGreetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreetings;