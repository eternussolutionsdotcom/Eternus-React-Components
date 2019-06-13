import React, { Component } from 'react'

export default class fileupload extends Component {
    render() {
        const getFile = (e) => {
            console.log("e",e.target.files);
            }


        return (
            <div className="jumbotron">
            <div className="col-lg-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                    {/* <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                    </span> */}
                    </div>
                    <div className="custom-file">
                    
                        <input
                        type="file"
                        multiple={true}
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={(e) => getFile(e)}
                        />
                        { <label htmlFor="inputGroupFile01">
                        <i className="fa fa-paperclip fa-3x" aria-hidden="true"></i>
                            Choose file
                        </label> }
                    </div>
                </div>
            </div> 
            
            </div>
        )
    }
}


