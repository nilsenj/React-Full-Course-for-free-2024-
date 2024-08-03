import Student from "./Student.jsx";

const Lesson4 = () => {
    return (
        <>
            <h2>Lesson4</h2>
            <Student name="SpongeBob" age={30} isStudent={true}></Student>
            <Student name="Patrick" age={42} isStudent={false}></Student>
            <Student name="Squidward" age={50} isStudent={false}></Student>
            <Student name="Sandy" age={27} isStudent={true}></Student>
            <Student />
        </>
    );
};


export default Lesson4;
