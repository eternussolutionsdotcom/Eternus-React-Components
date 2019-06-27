import React from 'react'
import PropTypes from 'prop-types'
import {Modal,Button} from "react-bootstrap";

const ModalComponent = props => {
    return (
        <Modal 
            size={props.size} 
            show={props.show} 
            onHide={props.handleClose}
        >
            <Modal.Header closeButton style={{backgroundColor : props.variant}}>
                <Modal.Title>{props.modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.modalMessage}</Modal.Body>
            <Modal.Footer>
                {
                    props.modalType !== "message" && props.handleConfirm ?
                    <Button id="confirm" variant="success" onClick={props.handleConfirm}>
                        {props.confirmButtonText}
                    </Button> : null
                }
                <Button id="close" variant="danger" onClick={props.handleClose}>
                {props.cancelButtonText}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ModalComponent.propTypes = {
    size : PropTypes.string,
    show : PropTypes.bool.isRequired,
    handleClose : PropTypes.func.isRequired,
    variant : PropTypes.string,
    modalHeading : PropTypes.string,
    modalMessage : PropTypes.string,
    modalType : PropTypes.string,
    handleConfirm : PropTypes.func,
    confirmButtonText : PropTypes.string,
    cancelButtonText : PropTypes.string,
}
ModalComponent.defaultProps = {
    size : "md",
    show : false,
    handleClose : () => {},
    variant : "",
    modalHeading : "",
    modalMessage : "",
    modalType :"message",
    handleConfirm : () => {},
    confirmButtonText :"Confirm",
    cancelButtonText : "Cancel"
}

export default ModalComponent
