import React, { Component } from 'react'
import {Dropdown} from '../../src';

export default class DropdownComponent extends Component {

 optionClicked ()  {
        console.log("Hello I am clicked");
    };
    render() {
        const options = [
            {optionName : "Action 1", Link : "#/action1" , icon : 'fa fa-arrow-right'},
            {optionName : "Action 2", onClick: this.optionClicked.bind(this), icon : 'fa fa-arrow-right'},
            {optionName : "Action 3", onClick : this.optionClicked.bind(this), icon : 'fa fa-arrow-right'},
        ];
        return (
                 <Dropdown 
                    title="Test dropdown" 
                    variant="danger" 
                    options={options}
                    error = {false}
                    errorMessage = "Something is wrong" />
        )
    }
}
