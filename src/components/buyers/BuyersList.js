import React, {Component} from 'react';
import './styles/BuyersList.css';

export default class Buyers extends Component{

    state = {
        buyers: [
            {
                id: 1, 
                name: "Juan Diego",
                address: "2da calle A 3-19"
            },
            {
                id: 2, 
                name: "Luis Miguel",
                address: "4ta calle 2-11"
            },
            {
                id: 3, 
                name: "Fernando Motta",
                address: "3ra calle 1-10"
            }
        ]
    };

    render(){
        return (    
            <div className="buyers-table-wrapper">       
                <table className="buyers-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.buyers.map(buyer => {
                                return (
                                    <tr className="buyers-item" key={buyer.id}>
                                        <td>{buyer.id}</td>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.address}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div> 
        );
    }
}