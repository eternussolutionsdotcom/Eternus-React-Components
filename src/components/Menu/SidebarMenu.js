import React, { Component } from "react";
import PropTypes from 'prop-types'
import classNames from "classnames";
import { Nav, Navbar } from "react-bootstrap";
import nav from './item'
import eternus from '../../components/Menu/eternus.png'


function SidebarMenu(props) {

    // nav item with nav link
    const navItem = (item, key) => {
        const classes = {
            item: classNames(item.class),
            link: classNames(
                "nav-link",
                item.variant ? `nav-link-${item.variant}` : ""
            ),
            // icon: classNames(item.icon)
        };
        return navLink(item, key, classes);
    };

    // nav link
    const navLink = (item, key, classes) => {
        const url = item.url ? item.url : "";
        return (
            <Nav.Item key={key} className={classes.item}>
                <Nav.Link
                    to={url}
                    className={classes.link}
                    onClick={hideMobile}
                >
                    {/* <i className={classes.icon} /> */}
                    {item.name}
                </Nav.Link>
            </Nav.Item>
        );
    };

    const navDropdown = (item, key) => {
        return (
         
            <li className="nav-item nav-dropdown" key={key}>
            
                <a
                    className="nav-link nav-dropdown-toggle"
                    href="/"
                    onClick={handleClick}
                >
                    {/* <i className={item.icon} /> */}
                    
                    {item.name}
                    { item.rootItem == true ?  <span className="drop-icon " style ={{ float :"right" }}>▾</span> :null}
                </a>
                <ul className="nav-dropdown-items">{navList(item.children)}</ul>
            </li>
        );
    };

    // nav type
    const navType = (item, idx) =>
        item.children
            ? navDropdown(item, idx)
            : navItem(item, idx);

    // nav list
    const navList = items => {
        return items.map((item, index) => navType(item, index));
    };



    const handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.toggle("open");
    }

    const hideMobile = () => {
        if (document.body.classList.contains("sidebar-mobile-show")) {
            document.body.classList.toggle("sidebar-mobile-show");
        }
    }
    return (

        <div className="sidebar sidebar-fixed ">
        <nav className="sidebar-nav sidebar sidebar-fixed">
        <h5><img src={eternus}></img>BrandName</h5>
        <Nav variant="tabs" className="flex-column nav">{navList(nav.items)}</Nav>
        </nav>
        </div>

    )
}

SidebarMenu.propTypes = {

}

export default SidebarMenu

