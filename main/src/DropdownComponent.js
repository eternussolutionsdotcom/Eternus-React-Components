import React, { Component } from 'react'
import {Dropdown} from '../../src';

export default class DropdownComponent extends Component {

 optionClicked = () => {
        console.log("Hello I am clicked");
    };
    render() {
        const options = [
            {optionName : "Action 1",onClick: this.optionClicked, Link : "#/action1", icon : 'fa fa-arrow-right'},
            {optionName : "Action 2", onClick: this.optionClicked, Link : "#/action2", icon : 'fa fa-arrow-right'},
            {optionName : "Action 3", onClick : this.optionClicked, Link : "#/action3", icon : 'fa fa-arrow-right'},
        ];
        return (
                 <Dropdown 
                    title="Dropdown" 
                    variant="success" 
                    options={options}
                    error = {true}
                    errorMessage = "Error message" />
        )
    }
}
