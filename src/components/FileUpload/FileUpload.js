import React, { Component } from 'react'
import {Card,Button,FormControl,FormText} from "react-bootstrap";


export default class fileupload extends Component {

    constructor(props) {
        super(props);
        this.state = {
          files: [],
          status: "",
          flag: false
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
      
      uploadFile() {
        return () => {

                for (var i = 0; i < this.state.files.length; i++) {
                    //console.log(this.state.files[i].name);
                     //console.log(this.state.files[i]);

                        if (this.state.files[i].size > 1000 ) {
                            this.state.flag = true;
                            //alert("Hello! Your file size is more!!");
                            console.log(this.state.flag);
                        } 
                    }













            this.setState({ status: "Hello! Your file uploaded successfully!!" });
            //alert("Hello! Your file uploaded successfully!!");
        //   this.setState(prevState => ({
        //     files: prevState.files.filter(file => file.name !== File)
        //   }));
           console.log(this.state.files);
        };
      }
        
    render() {


        const getFile = (e) => {

            // var file =[];
            // file.push(Array.from(e.target.files));
            this.setState({files : Array.from(e.target.files)});
            
            // for (var i = 0; i < e.target.files.length; i++) {
            //     var empty = e.target.files.length;
            //    if (empty > 0) {
            //     file.push();
            //     } 
            //    }
            //   this.setState({files : file});
           // console.log("e",Array.from(e.target.files));
             // console.log("e",this.files);
            //console.log("e",e.target.files);
            }

            const FileItems = this.state.files.map((file, index) =>
            <li key={index} title ={file.name}>
            {file.name}{' '}
            [{file.size/1000}K]
            {' '}<a href="#"  onClick={this.deleteFile(file.name)} title = {'Remove '+ file.name}>
            <i className="fa fa-times" aria-hidden="true"></i></a>
            </li>
          );

          //console.log(this.state.files);

        return (
            <div className="container">
            <div className="row">
                <Card>
                    <Card.Header>
                        <FormControl
                                type="file"
                                accept=".xls,.xlsx,.txt"
                                multiple={true}
                                onChange={(e) => getFile(e)}
                                />
                    </Card.Header>
                    <Card.Body>
                    <ul>{FileItems}</ul>
                    </Card.Body>
                    <Card.Footer>
                        <div style={{float:'left'}}>{this.state.status}</div>
                    <Button variant="outline-success btn-sm uploadBtn" onClick={this.uploadFile()}>Upload</Button>
                    </Card.Footer>
                </Card>
             </div>
            </div>
        )
    }
}


