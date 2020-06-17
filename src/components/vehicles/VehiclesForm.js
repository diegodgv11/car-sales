import React, {Component} from 'react';
import './styles/VehiclesForm.css';

export default class VehiclesForm extends Component{

    state = {
        brand: "",
        model: "",
        price: ""
    };

    _validateValues = data => {
        for(let value of data.entries()){
            if(String(value[1]) === ""){
                return false;
            }
        }
        return true;
    };

    _saveVehicle = async form => {
        const URL = 'http://localhost:5000/app/services/register/registerVehicles.php';
        const config = {
            method: 'POST',
            body: form
        };
        try{
            const data = await fetch(URL, config);
            const response = parseInt(await data.text());
            if(response === 1){
                alert("Vehicle registered successfully");
                this.setState(
                    {
                        brand: "", 
                        model: "", 
                        price: ""
                    }   
                );
                this.props.updateMethod();
            }
            else{
                alert("Vehicle could not register");
            }
        }
        catch(e){
            alert("Something went wrong");
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        if(!this._validateValues(form)){
            alert("All inputs are required");
        }
        else{
            this._saveVehicle(form);
        }
    };

    handleChange = e => {
        if(e.target.name === "brand"){
            this.setState({brand: e.target.value});
        }
        else if(e.target.name === "model"){
            this.setState({model: e.target.value});
        }
        else if(e.target.name === "price"){
            this.setState({price: e.target.value});
        }
    };

    render(){
        return (
            <form className="vehicles-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="brand" 
                    placeholder="Brand"
                    className="vehicles-form-field"
                    value={this.state.brand}
                    onChange={this.handleChange}  
                />
                <input type="text" 
                    name="model" 
                    placeholder="Model"
                    maxLength="4"
                    className="vehicles-form-field"
                    value={this.state.model}
                    onChange={this.handleChange}
                />
                <input type="number" 
                    name="price" 
                    placeholder="Price"
                    className="vehicles-form-field"
                    value={this.state.price}
                    onChange={this.handleChange}
                /> 
                <button className="vehicles-form-field btn">
                    Accept
                </button>
            </form>
        );
    }
}