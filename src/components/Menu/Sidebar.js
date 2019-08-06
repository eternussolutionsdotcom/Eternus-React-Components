import React from "react";
import PropTypes from 'prop-types'
import { Nav } from "react-bootstrap";

function Sidebar(props) {

    const navLink = (item, key) => {
        const url = item.url ? item.url : "";
        return (

            <li className="nav-item" key={key}>
                <a
                    className="nav-link"
                    href={url}
                    onClick={handleClick}
                   
                >
                    <i className={item.icon} style={{ marginRight: 10 }} />
                    {item.name}
                </a>
            </li>

        );
    };

    const navDropdown = (item, key) => {
        const url = item.url ? item.url : "";
        return (
            <li className="nav-item nav-dropdown" key={key}>
                <a
                    className={`nav-link nav-dropdown-toggle `}
                    href={url}
                    onClick={handleClick}
                >
                    <i className={item.icon} style={{ marginRight: 10 }} />
                    {item.name}
                    {item.children.length > 0 ? <span className="drop-icon " style={{ float: "right" }}>▾</span> : null}
                </a>
                <ul className={`nav-dropdown-items  nav-link-child`}>{navList(item.children)}</ul>
            </li>
        );
    };

    const navType = (item, idx) =>
        item.children
            ? navDropdown(item, idx)
            : navLink(item, idx);


    const navList = items => {
        return items.map((item, index) => navType(item, index));
    };

    const handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.toggle("open");
    }

    const brandDiv = () => {
        return (
            <li className=" nav-item">
                <a
                    className=""
                    style={{
                        fontSize: 25,
                        color: "aliceblue",
                        lineHeight: 3.5 + "rem",
                        padding: 12
                    }}
                    href="/"
                >
                  { !props.logoUrl ? props.brandName :<img src={props.logoUrl} height="40" width="40"></img>}
                </a>
            </li>
        )
    }
    return (
        <div className="sidebar sidebar-fixed ">
            <nav className="sidebar-nav sidebar sidebar-fixed">
                <Nav variant="tabs" className="flex-column nav">
                    {brandDiv()}
                    {navList(props.menuOptions)}</Nav>
            </nav>
        </div>
    )
}

Sidebar.propTypes = {
    menuOptions: PropTypes.arrayOf(PropTypes.object),
    brandName: PropTypes.string,
    logoUrl: PropTypes.string
}

Sidebar.defaultProps = {
    menuOptions: [{
        name: "Home",
        url: "#",
    }],
    brandName: "",
    logoUrl: ""
}

export default Sidebar
