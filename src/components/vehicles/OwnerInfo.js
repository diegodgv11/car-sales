import React, {Component} from 'react';
import './styles/OwnerInfo.css';

export default class OwnerInfo extends Component{
    render(){
        return (
            <div className="owner-info">
                <h1>Owner Information</h1>
                <input value={this.props.owner.PID} className="owner-info-field" readOnly/>
                <input value={this.props.owner.Name} className="owner-info-field" readOnly/>
                <input value={this.props.owner.Address} className="owner-info-field" readOnly/>
                <span className="material-icons btn-close" onClick={this.props.closePopUp}>highlight_off</span>
            </div>
        );
    }
}