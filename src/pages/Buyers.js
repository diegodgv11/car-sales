import React, {Component} from 'react';
import BuyersForm from '../components/buyers/BuyersForm';
import BuyersList from '../components/buyers/BuyersList';
import './styles/Buyers.css';

export default class Buyers extends Component{
    render(){
        return (
            <div className="buyers">
                <div className="buyers-form-container">
                    <h1 className="buyers-form-title">Buyers Registration</h1>
                    <BuyersForm/>  
                </div>
                <BuyersList/>
            </div>
        );
    }
} 