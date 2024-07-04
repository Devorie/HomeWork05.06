import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderRow from '../components/OrderRow';
import { Link, useNavigate, useParams } from 'react-router-dom';
const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/orders/getall');
            setOrders(data);
        }

        getOrders();
    }, []);

    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 30 }}>
            
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr style={{ backgroundColor: "#212529", color: "white", borderRadius: "15px" }}>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(o => <OrderRow order={o} key={o.id} />)}
                </tbody>
            </table>
        </div>
    );
}

export default ViewOrders;