import React, {
    Component
} from 'react'
import {
    Modal
} from "../../src";


export default class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    render() {
            return (
                <div>
                    <button onClick={this.handleClose}>Show modal</button>
                    <Modal
                        variant="#FFCC00"
                        modalType="confirm"
                        show={this.state.show} 
                        handleClose={this.handleClose}
                        handleConfirm={this.handleClose}
                        modalHeading="Modal Heading"
                        modalMessage ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        confirmButtonText = "Save data"
                        cancelButtonText = "Ok"
                    />
                </div>
        )
    }
}
