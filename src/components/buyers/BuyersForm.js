import React, {Component} from 'react';
import './styles/BuyersForm.css';

export default class BuyersForm extends Component{

    state = {
        pid: "",
        name: "",
        address: ""
    };

    _validateValues = data => {
        for(let value of data.entries()){
            if(String(value[1]) === ""){
                return false;
            }
        }
        return true;
    };

    _saveBuyer = async form => {
        const URL = '';
        const config = {
            method: 'POST',
            body: form
        };
        try{
            const data = await fetch(URL, config);
            const response = await parseInt(data.text());
            if(response === 1){
                alert("Buyer registered successfully");
            }
            else{
                alert("buyer could not register");
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
            this._saveBuyer(form);
        }
    };

    handleChange = e => {
        if(e.target.name === "pid"){
            this.setState({pid: e.target.value});
        }
        else if(e.target.name === "name"){
            this.setState({name: e.target.value});
        }
        else if(e.target.name === "address"){
            this.setState({address: e.target.value});
        }
    };

    render(){
        return (
            <form className="buyers-form" onSubmit={this.handleSubmit}>
                <input 
                    type="number" 
                    name="pid" 
                    placeholder="PID"
                    className="buyers-form-field"
                    value={this.state.pid}
                    onChange={this.handleChange}  
                />
                <input type="text" 
                    name="name" 
                    placeholder="Full name"
                    className="buyers-form-field"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input type="text" 
                    name="address" 
                    placeholder="Address"
                    className="buyers-form-field"
                    value={this.state.address}
                    onChange={this.handleChange}
                /> 
                <button className="buyers-form-field btn">
                    Aceptar
                </button>
            </form>
        );
    }
}