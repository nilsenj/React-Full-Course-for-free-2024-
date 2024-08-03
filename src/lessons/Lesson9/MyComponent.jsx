import {useState} from "react";

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("visa");
    const [shipping, setShipping] = useState("Pick Up");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <>
            <div>
                <input type="text" value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>
                <input type="number" value={quantity} onChange={handleQuantityChange}/>
                <p>Quantity: {quantity}</p>
                <textarea value={comment} onChange={handleCommentChange} name="comment" id="comment" cols="30" rows="10"
                placeholder="Set delivery instructions"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange} name="payment" id="payment">
                    <option value="">Select an option</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="paypal">Paypal</option>
                    <option value="giftcard">Gift Card</option>
                </select>
                <p>Payment: {payment}</p>

                <label htmlFor="pickup">
                    <input type="radio" id="pickup" value="Pick Up" onChange={handleShippingChange}
                    checked={shipping === "Pick Up"}/>
                    Pick Up
                </label>
                <br/>
                <label htmlFor="delivery">
                    <input type="radio" id="delivery" value="Delivery" onChange={handleShippingChange}
                           checked={shipping === "Delivery"}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>

            </div>
        </>
    );
}

export default MyComponent;