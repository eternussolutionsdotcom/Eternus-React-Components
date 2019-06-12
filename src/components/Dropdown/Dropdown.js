import React from 'react'
import {
    Dropdown,
    ButtonGroup,
    Button,
    FormControl
} from "react-bootstrap";

const dropdown = props => {
    return (
        <div className="base-padding">
            <Dropdown as={ButtonGroup}  drop={props.dropDirection ? props.dropDirection : "down"}>
                <Button variant={props.variant}>{props.title}</Button>
                <Dropdown.Toggle variant={props.variant}  split id="dropdown-split-basic"/>
                <Dropdown.Menu>
                    {
                       props.options !== undefined && props.options.length > 0 ? props.options.map((option,id) => {
                                return <Dropdown.Item 
                                            key={id} 
                                            href={option.Link}
                                            onClick={option.onClick}
                                        >
                                            <i className={option.icon}></i> {option.optionName} 
                                        </Dropdown.Item >
                            }) : <Dropdown.Item disabled={true}> No options </Dropdown.Item>
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
export {dropdown as Dropdown};
