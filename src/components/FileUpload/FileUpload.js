import React, { Component } from 'react'
import { Card, Button, FormControl } from "react-bootstrap";
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
    };
  }


  uploadFile(accept, size) {
    return () => {
      this.setState({ status: "" });
      var acceptExtension = new Array();
      var str, fileType;
      str = accept;
      fileType = str.split(",");

      for (var i = 0; i < fileType.length; i++) {
        var ext = fileType[i].replace(".", "");
        acceptExtension.push(ext);
      }

      var Count = 0;
      for (var i = 0; i < this.state.files.length; i++) {
        if (this.state.files[i].size > size) {
          Count++;
          this.setState({ status: "File size must under " + size / 1000 + "KB." });
        }
      }

      if (Count == 0) {
        if (accept != "") {
          var invalid = [];
          for (var i = 0; i < this.state.files.length; i++) {
            str = this.state.files[i].name;
            fileType = str.split(".");
            if ($.inArray(fileType[1], acceptExtension) == -1) {
              invalid.push(" "+str.substring(str.indexOf(".")));
            }
          }
          if (invalid.length > 0) {
            this.setState({ status: "Invalid file extension! " + invalid });
          } else if(this.state.files.length > 0) {
            this.setState({ status: "Your files uploded successfully." });
            console.log(this.state.files);
            this.setState({ files: [] });
          }
        } else if(this.state.files.length > 0) {
          this.setState({ status: "Your files uploded successfully." });
          console.log(this.state.files);
          this.setState({ files: [] });
        }
      }
    };
  }

  render() {

    const getFile = (e) => {
      this.setState({ files: Array.from(e.target.files) });
    }

    const fileItems = this.state.files.map((file, index) =>
      <li key={index} title={file.name}>
        {file.name}{' '}
        [{file.size / 1000}K]
            {' '}<a href="#" onClick={this.deleteFile(file.name)} title={'Remove ' + file.name}>
          <i className="fa fa-times" aria-hidden="true"></i></a>
      </li>
    );

    const fileselected = (this.state.files.length === 0)
      ? "No file selected."
      : (this.state.files.length) + " file selected"

    var ext = this.props.accept.split('.').join(' ');
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
                      onChange={(e) => getFile(e)}
                      id="file"
                      className="inputfile"
                  />
                  <label htmlFor="file">
                      <Button variant={this.props.variant}>
                      <i className="fa fa-paperclip fa-sm" aria-hidden="true"></i> {this.props.title1}
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
                    ? <div>Please upload only {ext} extention files.</div>
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
                    <Button variant={this.props.variant} id="uploadBtn"
                    onClick={this.uploadFile(this.props.accept, this.props.size)}>{this.props.title2}
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

fileupload.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  accept: PropTypes.string,
  size: PropTypes.number,
  multiple: PropTypes.string,
  variant: PropTypes.string.isRequired
}

fileupload.defaultProps = {
  title1: "Browse",
  title2: "Upload",
  accept: "",
  size: 1000,
  multiple: "",
  variant: "success btn-sm"
}