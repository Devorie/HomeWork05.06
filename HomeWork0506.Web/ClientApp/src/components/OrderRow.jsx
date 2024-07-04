import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";

const OrderRow = ({ order }) => {
    return (
        <tr style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
            <td style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                <Link to={`/orderdetails/${order.id}`}>
                    {order.name} - {order.email}
                </Link>
            </td>
            <td>{order.baseFlavor}</td>
            <td>{order.toppingString}</td>
            <td>{order.specialRequests}</td>
            <td>{order.quantity}</td>
            <td>{dayjs(order.deliveryDate).format("MM/DD/YYYY")}</td>
            <td>${order.total}</td>
        </tr>
    )
}

export default OrderRow;