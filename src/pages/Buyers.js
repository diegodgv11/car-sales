import React, { Component } from 'react';
import BuyersForm from '../components/buyers/BuyersForm';
import BuyersList from '../components/buyers/BuyersList';
import './styles/Buyers.css';

export default class Buyers extends Component {

    state = {
        data: {}
    };

    getData = async () => {
        const URL = 'http://localhost:5000/app/services/selects/selectBuyers.php';
        try {
            const response = await fetch(URL);
            const json = await response.json();
            this.setState({ data: [json] });
        }
        catch (e) {
            alert("Something went wrong");
        }
    };

    componentDidMount() {
        this.getData();
    }
    
    render() {
        return (
            <div className="buyers">
                <div className="buyers-form-container">
                    <h1 className="buyers-form-title">Buyers Registration</h1>
                    <BuyersForm updateMethod={this.getData}/>
                </div>
                <BuyersList buyers={this.state.data} />
            </div>
        );
    }
} 