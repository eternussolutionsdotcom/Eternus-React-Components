import React, { Component } from 'react';
import {FileUpload} from '../../src';

export default class FileUploadComponent extends Component {
    render() {

        return (
            <FileUpload  
                browseButtonTitle = "Browse"
                uploadButtonTitle = "Upload"
                accept = ".xls,.xlsx,.txt"
                size = {1}
                multiple = {true}
                variant = "success"
            />    
        )
    }
}
