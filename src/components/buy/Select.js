import React, {Component} from 'react';
import './styles/Select.css';

export default class Select extends Component{

    state = {
        value: 0
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    render(){
        let options = this.props.options.map(option => (
            <option value={option.ID} key={option.ID}> 
                {option[this.props.showIndex]} - {option[this.props.showIndex + 1]}
            </option>
        ));
        return (
            <select className="select" value={this.state.value} onChange={this.handleChange} name={this.props.name}>
                <option>{this.props.default}</option>
                {options}
            </select>
        );
    }
}