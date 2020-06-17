import React, { Component } from 'react';
import './styles/VehiclesList.css';

export default class VehiclesList extends Component {

    render() {
        if (this.props.vehicles.length > 0) {
            return (
                <div className="vehicles-table-wrapper">
                    <table className="vehicles-table">
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Owner ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.vehicles.map(vehicle => (
                                    <tr className="vehicles-item" key={vehicle.ID}>
                                        <td>{vehicle.Brand}</td>
                                        <td>{vehicle.Model}</td>
                                        <td>{vehicle.Price}</td>
                                        <td className={"buyer-column" + (!!vehicle.IDBuyer ? " buyer-column-func" : "")} 
                                            idowner={vehicle.IDBuyer || null} 
                                            onClick={(vehicle.IDBuyer || null) ? this.props.changeOwnerInfoShow: null}>

                                            {vehicle.IDBuyer || 'N/A'}

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            return <div className="message">There are not data yet</div>
        }
    }
}