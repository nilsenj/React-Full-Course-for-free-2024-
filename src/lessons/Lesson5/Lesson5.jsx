import UserGreetings from "./UserGreetings.jsx";

const Lesson5 = () => {
    return (
        <>
            <h2>Lesson5</h2>
            <UserGreetings isLoggedIn={true} username="BroCode"></UserGreetings>
            <br/>
            <UserGreetings isLoggedIn={false}></UserGreetings>
        </>
    );
};


export default Lesson5;
