import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import LivePreview from '../components/LivePreview';
import dayjs from "dayjs";

const baseFlavors = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];

const toppingsChoice = [
    "Chocolate Chips",
    "Caramel Drizzle",
    "Whipped Cream",
    "Pecans",
    "Almonds",
    "Toasted Coconut",
    "Graham Cracker Crumble",
    "Cookie Dough",
    "Mint Chocolate Chips",
    "Caramelized Bananas",
    "Rainbow Sprinkles",
    "Powdered Sugar",
    "White Chocolate Shavings",
    "Peanut Butter Drizzle",
    "Dark Chocolate Drizzle"
]; 

const Order = () => {

    
    const navigate = useNavigate();

    const [order, setOrder] = useState({
        name: '',
        email: '',
        baseFlavor: 'Classic',
        specialRequests: '',
        quantity: '',
        deliveryDate: ''
    });
    const [toppings, setToppings] = useState([]);
    const [complete, setComplete] = useState(false);


    const onTextChange = e => {
        const copy = { ...order };
        copy[e.target.name] = e.target.value;
        setOrder(copy);
        setComplete(order.name != '' && order.email != '' && order.quantity != '' && order.deliveryDate != '')
    }

    const onToppingChange = topping => {
        if (toppings.includes(topping)) {
            setToppings(toppings.filter(t => t !== topping));
        } else {
            setToppings([...toppings, topping]);
        }
        
    }

    const computeTotal = () => {
       
        return (49.99 + (toppings.length * 3.95)) * quantity;

    }

    const onSubmitClick = async () => {
        const toppingString = toppings.join(', ');
        const total = computeTotal() 
        const { name, email, baseFlavor, specialRequests, quantity, deliveryDate} = order;
        await axios.post('/api/orders/addorder', { name, email, baseFlavor, toppingString, specialRequests, quantity, deliveryDate, total});
        navigate('/');
    }

    const { name, email, baseFlavor, specialRequests, quantity, deliveryDate} = order;

    return (
        <>
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
        <h1 className="text-center my-4">Cheesecake Factory Order Form</h1><div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} name='name' onChange={onTextChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" value={email} onChange={onTextChange} name='email' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select onChange={onTextChange} name='baseFlavor' className="form-select">
                        {baseFlavors.map((f) => <option key={f}>{f}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                    {toppingsChoice.map(t => {
                        return <div key={t} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={toppings.includes(t)}
                                onChange={() => onToppingChange(t)}
                            />
                            <label className="form-check-label">{t}</label>
                        </div>
                    })}

                </div>
                <div className="mb-3">
                    <label className="form-label">Special Requests</label>
                    <textarea className="form-control" rows="3" value={specialRequests} name='specialRequests' onChange={onTextChange}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min="1" value={quantity} name='quantity' onChange={onTextChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Delivery Date</label>
                    <input type="date" className="form-control" value={deliveryDate} name='deliveryDate' onChange={onTextChange}></input>
                </div>
                    <button type="submit" disabled={!complete} className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                </div>
                <LivePreview
                    baseFlavor={baseFlavor}
                    toppings={toppings.join(', ')}
                    specialRequests={specialRequests}
                    quantity={quantity}
                    deliveryDate={dayjs(deliveryDate).format("MM/DD/YYYY")}
                    total={computeTotal()}
                />
                </div>
            </div>
        </>

    )
}

export default Order;