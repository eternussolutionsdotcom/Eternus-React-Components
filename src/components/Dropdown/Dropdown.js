import React from 'react'
import {
    Dropdown,
    FormText
} from "react-bootstrap";
import PropTypes from 'prop-types'

const dropdown = props => {
    return (
        <div>
            <Dropdown drop={props.dropDirection ? props.dropDirection : "down"}>
                <Dropdown.Toggle variant={props.variant} >
                    {props.title}
                </Dropdown.Toggle>
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
                props.error && props.errorMessage.length > 0 ? <FormText className='text-muted-error'>{props.errorMessage}</FormText> : null
            }
            
        </div>
        
    )
}
export {dropdown as Dropdown};
