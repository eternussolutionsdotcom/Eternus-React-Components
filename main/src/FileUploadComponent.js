import React, { Component } from 'react';
import {FileUpload} from '../../src';
import {Row,Col} from "react-bootstrap";

export default class FileUploadComponent extends Component {
    getFiles = (files) => {
        //console.log("files",files)
    }
    render() {

        return (
            // <Row>
            //     <Col xs="12" md="6">
                <FileUpload  
                browseButtonTitle = "Browse"
                uploadButtonTitle = "Upload"
                accept = ".xls,.xlsx,.txt"
                size = {1}
                multiple = {true}
                variant = "success"
                fileResponse = {this.getFiles}
            />   
            //  </Col>
            //     <Col xs="12" md="6"></Col>
            // </Row>
            
        )
    }
}
