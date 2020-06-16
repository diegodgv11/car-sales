import React, {Component} from 'react';
import './styles/NavigationBar.css';
import {Link} from "react-router-dom";

export default class NavigationBar extends Component{
    render(){
        return (
            <nav className="nav-bar">
                <h1 className="logo">CarSales <span>PRO</span></h1>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/buy">Buy</Link>
                    </li>
                    <li>
                        <Link to="/buyers">Buyers</Link>
                    </li>
                    <li>
                        <Link to="/vehicles">Vehicles</Link>
                    </li>
                    <li className="down-menu">
                        Delete
                        <ul>
                            <li>
                                <Link to="/delete/buy">Buys</Link>
                            </li>
                            <li>
                                <Link to="/delete/buyers">Buyers</Link>
                            </li>
                            <li>
                                <Link to="/delete/vehicles">Vehicles</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
} 