import React, { Component } from 'react';
import {Fileupload} from '../../src';

export default class FileUploadComponent extends Component {
     getFile = (e) => {
        console.log("e",e);
        }
    render() {

        return (
            <Fileupload  
                title1 = "Browse"
                title2 = "Upload"
                accept = ".xls,.xlsx,.txt"
                size = {1000}
                multiple = "multiple"
                variant = "success btn-sm"
            />    
        )
    }
}
