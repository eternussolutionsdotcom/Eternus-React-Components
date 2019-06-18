import React from 'react'
import {
    Dropdown,
    ButtonGroup,
    Button,
    FormControl
} from "react-bootstrap";
import PropTypes from 'prop-types'

const DropdownComponent = props => {
    return (
        <div className="base-padding">
            <Dropdown as={ButtonGroup}  drop={props.dropDirection}>
                <Button variant={props.variant}>{props.title}</Button>
                <Dropdown.Toggle variant={props.variant}  split id="dropdown-split-basic"/>
                <Dropdown.Menu>
                    {
                       props.options.map((option,id) => {
                                return <Dropdown.Item 
                                            key={id} 
                                            href={option.Link}
                                            onClick={option.onClick}
                                            disabled={option.disabled}
                                        >
                                            <i className={option.icon}></i> {option.optionName} 
                                        </Dropdown.Item >
                            }) 
                    }
                </Dropdown.Menu>
            </Dropdown>
            {
                props.error && props.errorMessage.length > 0 ? 
                <FormControl.Feedback className="showError" type="invalid">
                    {props.errorMessage}
                </FormControl.Feedback> : null
            }
        </div>
    )
}

DropdownComponent.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    variant: PropTypes.string.isRequired,
    dropDirection: PropTypes.string,
}

DropdownComponent.defaultProps = {
    title: "Dropdown",
    variant: "success",
    options: [{
        optionName: "No options",
        disabled: true
    }],
    error: false,
    errorMessage: "",
    dropDirection: "down",
}

export default DropdownComponent;
