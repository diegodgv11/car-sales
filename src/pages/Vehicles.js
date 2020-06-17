import React, { Component } from 'react';
import VehiclesForm from '../components/vehicles/VehiclesForm';
import VehiclesList from '../components/vehicles/VehiclesList';
import OwnerInfo from '../components/vehicles/OwnerInfo';
import './styles/Vehicles.css';

export default class Vehicles extends Component {

    state = {
        data: [],
        showPopUp: false,
        ownerPopUpInfo: {}
    };

    getData = async () => {
        const URL = 'http://localhost:5000/app/services/selects/selectVehicles.php';
        try {
            const response = await fetch(URL);
            const json = await response.json();
            this.setState({ data: json });
        }
        catch (e) {
            alert("Something went wrong");
        }
    };

    componentDidMount() {
        this.getData();
    }

    _findBuyer = async id => {
        const URL = `http://localhost:5000/app/services/selects/chooseBuyer.php?id=${id}`;
        try{
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }
        catch (e){
            alert("Something went wrong");
        }
    };

    changeOwnerPopUpInfo = e => {
        const owner = this._findBuyer(e.target.getAttribute("idowner"));
        owner.then((data) => {
            this.setState({ ownerPopUpInfo: data[0] });
            this.closePopUp();
        });
       
    };

    closePopUp = _ => {
        this.setState({ showPopUp: !this.state.showPopUp });
    };

    render() {
        return (
            <div className="vehicles">
                <div className="vehicles-form-container">
                    <h1 className="vehicles-form-title">
                        <span className="material-icons">directions_car</span>
                        Vehicles Registration
                    </h1>
                    <VehiclesForm updateMethod={this.getData} />
                </div>
                <VehiclesList vehicles={this.state.data} changeOwnerInfoShow={this.changeOwnerPopUpInfo} />
                {this.state.showPopUp ? <OwnerInfo closePopUp={this.closePopUp} owner={this.state.ownerPopUpInfo} /> : null}
            </div>
        );
    }
} 