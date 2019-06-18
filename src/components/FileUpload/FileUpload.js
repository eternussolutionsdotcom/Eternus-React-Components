import React, { Component } from 'react'
import { Card, Button, FormControl } from "react-bootstrap";
import $ from 'jquery';
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

    var Count = 0;
    this.state.files.forEach((file) => {
      if (file.size > this.props.size * 1000) {
        Count++;
        this.setState({ status: "File size must under " + this.props.size + "KB." });
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
          if ($.inArray(fileType[1], acceptExtension) == -1) {
            invalidFiles.push(" " + file.name.substring(file.name.indexOf(".")));
          }
        });
        if (invalidFiles.length > 0) {
          this.setState({ status: "Invalid file extension " + invalidFiles });
        } else if (this.state.files.length > 0) {
          this.setState({ status: "Your files are uploaded successfully.", files: [] });
        }
      } else if (this.state.files.length > 0) {
        this.setState({ status: "Your files are uploaded successfully.", files: [] });
      }
    }
  }

  render() {

    const fileItems = this.state.files.map((file, index) =>
      <li key={index} title={file.name}>
        {file.name}{' '}
        [{file.size / 1000}KB]
        {' '} <a href="#" onClick={() => this.deleteFile(index)} title={'Remove ' + file.name}>
          <i className="fa fa-times" aria-hidden="true"></i></a>
      </li>
    );

    const fileselected = (this.state.files.length === 0)
      ? "No file selected."
      : (this.state.files.length) + " file selected"

    let acceptedExtTypes = this.props.accept.split('.').join(' ');
    return (

      <div className="container">
        <div className="row">
          <Card>
            <Card.Header>

              <div className="row">
                <div className="col-12">
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
                </div>
              </div>
              <div>
                {
                  (this.props.accept.length > 0)
                    ? <div>Please upload only {acceptedExtTypes} extention files.</div>
                    : <div></div>
                }</div>
            </Card.Header>
            <Card.Body>
              <ul>{fileItems}</ul>
            </Card.Body>
            <Card.Footer>
              <div className="row">
                <div className="col-10" style={{ float: 'left' }}>{this.state.status}</div>
                <div className="col-2">
                  <Button variant={this.props.variant + " btn-sm"} id="uploadBtn"
                    onClick={() => this.uploadFile()}>{this.props.uploadButtonTitle}
                  </Button>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </div>
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
  variant: PropTypes.string.isRequired
}

FileUpload.defaultProps = {
  browseButtonTitle: "Browse",
  uploadButtonTitle: "Upload",
  accept: "",
  size: 1,
  multiple: true,
  variant: "success"
}