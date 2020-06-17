import React, {Component} from 'react';
import './styles/BuyersList.css';

export default class BuyersList extends Component{

    render(){
        if(this.props.buyers.length > 0){
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
                                this.props.buyers.map(buyer => (
                                    <tr className="buyers-item" key={buyer.id}>
                                        <td>{buyer.id}</td>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> 
            );
        }
        else{
            return <div className="message">There are not data yet</div>
        }
    }
}