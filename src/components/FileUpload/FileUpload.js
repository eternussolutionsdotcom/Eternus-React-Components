import React, { Component } from 'react'
import {Card,Button,FormControl} from "react-bootstrap";
import $ from 'jquery';
import PropTypes from 'prop-types'

export default class fileupload extends Component {

    constructor(props) {
        super(props);
        this.state = {
          files: [],
          status: ""
        };
        this.deleteFile = this.deleteFile.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    deleteFile(File) {
        return () => {
          this.setState(prevState => ({
            files: prevState.files.filter(file => file.name !== File)
          }));
          console.log(this.state.files);
        };
      }

    uploadFile(accept, size) {
        return () => {
                  this.setState({ status: "" });
                  var acceptExtension = new Array();
                  var str,fileType;
                  str = accept;
                  fileType = str.split(",");

                  for (var i = 0; i < fileType.length; i++) {
                    var ext = fileType[i].replace(".", "");
                    acceptExtension.push(ext); 
                  }

                var Count = 0;
                for (var i = 0; i < this.state.files.length; i++) {
                  if (this.state.files[i].size > size ) {
                    Count ++;
                    this.setState({ status: "File size must under "+ size/1000 + "KB" });
                    console.log(this.state.files[i]);
                    console.log(Count);
                  }
                }
                
                if(Count == 0){
                  for (var i = 0; i < this.state.files.length; i++) {

                    str = this.state.files[i].name;
                    fileType = str.split("."); 
    
                    if($.inArray(fileType[1], acceptExtension) == -1) {
                      this.setState({ status: "Invalid file extension! " + str.substring(str.indexOf("."))});
                      console.log(this.state.files[i]);
                     }else{
                      this.setState({ status: "Your files uploded successfully" });
                      console.log(this.state.files);
                      $("#fileInput").val('').clone(true);
                      this.setState({files : []});
                     }
                  }
                }
        };
      }
        
    render() {

        const getFile = (e) => {
            this.setState({files : Array.from(e.target.files)});
            }

            const fileItems = this.state.files.map((file, index) =>
            <li key={index} title ={file.name}>
            {file.name}{' '}
            [{file.size/1000}K]
            {' '}<a href="#"  onClick={this.deleteFile(file.name)} title = {'Remove '+ file.name}>
            <i className="fa fa-times" aria-hidden="true"></i></a>
            </li>
          );
        
        return (
          
            <div className="container">
                <div className="row">
                    <Card>
                        <Card.Header>
                            <FormControl id="fileInput"
                                type="file"
                                accept={this.props.accept}
                                multiple={this.props.multiple}
                                onChange={(e) => getFile(e)}
                            />
                            <div></div>
                        </Card.Header>
                        <Card.Body>
                            <ul>{fileItems}</ul>
                        </Card.Body>
                        <Card.Footer>
                        <div className="row">
                            <div className="col-10" style={{float:'left'}}>{this.state.status}</div>
                            <div className="col-2">
                              <Button variant={this.props.variant} id="uploadBtn" 
                              onClick={this.uploadFile(this.props.accept,this.props.size)}>{this.props.title}</Button>
                            </div>
                        </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}

fileupload.propTypes = {
  title: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  multiple:PropTypes.bool,
  variant: PropTypes.string.isRequired
}

fileupload.defaultProps = {
  title: "Upload",
  accept: "",
  size: 1000,
  multiple: true,
  variant: "success btn-sm"
}