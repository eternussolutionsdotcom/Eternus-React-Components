import React, { Component } from 'react';
import {FileUpload} from '../../src';

export default class FileUploadComponent extends Component {
    getFiles = (files) => {
        //console.log("files",files)
    }
    render() {

        return (
            <FileUpload  
                browseButtonTitle = "Browse"
                uploadButtonTitle = "Upload"
                accept = ".xls,.xlsx,.txt"
                size = {1000}
                multiple = {true}
                variant = "success"
                fileResponse = {this.getFiles}
            />    
        )
    }
}
