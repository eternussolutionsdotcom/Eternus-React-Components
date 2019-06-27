import React, { Component } from 'react'
import { Card, Button, FormControl,Col ,Row} from "react-bootstrap";
import PropTypes from 'prop-types'

export default class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      status: ""
    };
  }

  getFile = (e) => {
    this.setState({ files: Array.from(e.target.files) });
  }

  deleteFile = (index) => {
    let files = [...this.state.files];
    files.splice(index, 1);
    this.setState({ files })
  }

  uploadFile = () => {
    this.setState({ status: "" });
    let filesLength = this.state.files.length;

    if (filesLength == 0) {
      this.setState({ status: "No file selected.", files: [] });
    } else {
      var Count = 0;
      this.state.files.forEach((file) => {
        if (file.size > this.props.size * 1000) {
          Count++;
          this.setState({ status: "File size must be under " + this.props.size + "KB." });
        }
      });

      if (Count == 0) {
        if (this.props.accept !== "") {

          let acceptExtension = [];
          let fileType = this.props.accept.split(",");
          fileType.forEach((fileType) => {
            acceptExtension.push(fileType.replace(".", ""));
          });
          let invalidFiles = [];

          this.state.files.forEach((file) => {
            fileType = file.name.split(".");
            if (acceptExtension.indexOf(fileType[1]) < 1) {
              invalidFiles.push(" " + fileType[1]);
            }
          });

          if (invalidFiles.length > 0) {
            this.setState({ status: "Invalid file extension " + invalidFiles });
          } else if (filesLength > 0) {
            this.props.fileResponse(this.state.files);
            this.setState({ status: "Your files are uploaded successfully.", files: [] });
          }
        } else if (filesLength > 0) {
          this.props.fileResponse(this.state.files);
          this.setState({ status: "Your files are uploaded successfully.", files: [] });
        }
      }
    }
  }

  render() {

    const fileItems = this.state.files.map((file, index) =>
      <li key={index} title={file.name}>
        {file.name}{' '}
        [{file.size / 1000} KB]
        {' '} 
        {/* <a href="#" onClick={() => this.deleteFile(index)} title={'Remove ' + file.name}> */}
          <i className="fa fa-times" aria-hidden="true" title={'Remove ' + file.name} onClick={() => this.deleteFile(index)}></i>
          {/* </a> */}
      </li>
    );

    const fileselected = (this.state.files.length === 0)
      ? "No file selected."
      : (this.state.files.length) + " file selected"

    let acceptedExtTypes = this.props.accept.split('.').join(' ');
    return (

       <div className="container" >
        <Row className="base-padding">
          <Card>
            <Card.Header>
              <Row>
                <Col xs="12" style={{ paddingLeft: '0px' }}>
                  <FormControl
                    id="fileInput"
                    type="file"
                    accept={this.props.accept}
                    multiple={this.props.multiple}
                    onChange={(e) => this.getFile(e)}
                    id="file"
                    className="inputfile"
                  />
                  <label htmlFor="file">
                    <Button variant={this.props.variant + " btn-sm"}>
                      <i className="fa fa-paperclip fa-sm" aria-hidden="true"></i> {this.props.browseButtonTitle}
                    </Button>
                  </label>
                  <span>
                    &nbsp;{fileselected}
                  </span>
                </Col>
              </Row>
              <Row>
                {
                  this.props.accept.length > 0
                    ? <FormControl.Feedback className="showError" type="valid">Please upload only {acceptedExtTypes} extention files.</FormControl.Feedback>
                    : null
                }
                </Row>
            </Card.Header>
            <Card.Body>
              <Row>
                    <ul >{fileItems}</ul>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col xs="10" style={{ float: 'left' }}>
                  <FormControl.Feedback className="showError" type="invalid">
                    {this.state.status}
                  </FormControl.Feedback>
                </Col>
                <Col xs="2">
                  <Button variant={this.props.variant + " btn-sm"} id="uploadBtn"
                    onClick={() => this.uploadFile()}>{this.props.uploadButtonTitle}
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Row>
       </div>
    )
  }
}

FileUpload.propTypes = {
  browseButtonTitle: PropTypes.string.isRequired,
  uploadButtonTitle: PropTypes.string.isRequired,
  accept: PropTypes.string,
  size: PropTypes.number,
  multiple: PropTypes.bool,
  variant: PropTypes.string.isRequired,
  fileResponse: PropTypes.func.isRequired
}

FileUpload.defaultProps = {
  browseButtonTitle: "Browse",
  uploadButtonTitle: "Upload",
  accept: "",
  size: 1,
  multiple: true,
  variant: "success"
}