import React, { Component } from 'react';
import Select from '../components/buy/Select';
import './styles/Buy.css';

export default class Buy extends Component {

    state = {
        buyers: [],
        vehicles: []
    }

    _getData = async _ => {
        const URL_BUYERS = "http://localhost:5000/app/services/selects/selectBuyers.php";
        const URL_VEHICLES = "http://localhost:5000/app/services/selects/selectVehiclesWithoutOwner.php";

        try {
            const responseBuyers = await fetch(URL_BUYERS);
            const responseVehicles = await fetch(URL_VEHICLES);

            const dataBuyers = await responseBuyers.json();
            const dataVehicles = await responseVehicles.json();

            this.setState({ buyers: dataBuyers });
            this.setState({ vehicles: dataVehicles });
        }
        catch (e) {
            alert("Something went wrong");
        }
    }

    componentDidMount() {
        this._getData();
    }

    _updateBuy = async form => {
        const URL = "http://localhost:5000/app/services/updates/updateBuy.php";
        const formBuy = new FormData(form);
        const config = {
            method: 'POST',
            body: formBuy
        };

        let counter = 0;
        for(let field of formBuy.entries()){
            if(field[1] === "Select a buyer" || field[1] === "Select a vehicle"){
                counter++;
            }
        }

        if(counter === 0){
            try {
                const response = await fetch(URL, config);
                const data = parseInt(await response.text());
                if(data === 1){
                    alert("Buy done successfully");
                }
                else{
                    alert("buy could not register");
                }
            } 
            catch (e) {
                alert("Something went wrong");
            }
        }
        else{
            alert("All fields are required");
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this._updateBuy(e.target);
    };

    render() {
        return (
            <div className="buy">
                <form className="buy-form" onSubmit={this.handleSubmit}>
                    <h1 className="title-buy"><span className="material-icons">storefront</span>Buy</h1>
                    <Select options={this.state.buyers} showIndex={2} default="Select a buyer" name="buyer"/>
                    <Select options={this.state.vehicles} showIndex={2} default="Select a vehicle" name="vehicle"/>
                    <button className="btn-buy">Accept</button>
                </form>
            </div>
        );
    }
} 