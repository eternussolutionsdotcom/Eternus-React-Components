import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Menu(props) {
    return (
        props.alignment === "vertical" ?  <Sidebar {...props}/> : props.alignment === "horizontal" ? <Navbar  {...props}/> : <Navbar  {...props}/>
    )
}

Menu.propTypes = {
    alignment: PropTypes.string,
}

Menu.defaultProps = {
    alignment : "horizontal"
}
export default Menu

