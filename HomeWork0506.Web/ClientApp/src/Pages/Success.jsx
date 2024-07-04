import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    return (
        < div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#eee' }} >
            <div className="text-center">
                <h1 className="display-4">Order Placed Successfully</h1>
                <p className="lead">
                    <a href="/">
                        <button className="btn btn-outline-dark btn-lg">Click here to return to the home page</button></a>
                </p>
                <p className="lead">
                    <a href="/vieworders">
                        <button className="btn btn-outline-dark btn-lg">Click here to view all orders</button></a>
                </p>
                <p className="lead">
                    <a href="/order">
                        <button className="btn btn-outline-dark btn-lg">Click here to place another oreder</button></a>
                </p>
            </div>
        </div >
    );
};

export default Home;