const Button = () => {
    const handleClick = () => {
        console.log("OUCH!");
    }

    let count = 0;
    const handleClick2 = (event, name) => {
        if (count < 3) {
            count++;
            console.log(`${name} YOU clicked me ${count} time/s`)
            event.target.textContent = `${name} YOU clicked me ${count} time/s`;
        } else {
            console.log(`${name} stop clicking me!`);
            event.target.textContent = `${name} stop clicking me!`;
        }
    }
    return (
        <>
            <button onClick={handleClick}>Click me 😜</button>
            <button onClick={(e) => handleClick2(e, "BRO")}>Click me 😜</button>
        </>
    );
}

export default Button;