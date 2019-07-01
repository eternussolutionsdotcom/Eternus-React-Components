import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap';
import profile from "../../../main/src/profile.png";



const Navbar = props => {

    const navList = items => {
      return items.map((item, index) => navType(item, index));
    };

    const navType = (item, idx) =>
      item.children ?
      navDropdown(item, idx) :
      navItem(item, idx);

    const navDropdown = (item, key) => {
        return (
      <li key={key}><a href={item.url}>{item.name}
      {
        item.rootParent ?  <span className="drop-icon">▾</span> : 
        <span className="drop-icon" style={{float : "right"}}>▸</span>
      }
        <label htmlFor="sm1"></label>
      </a>
        <input type="checkbox" id="sm1" />
        <ul className="sub-menu" >
          {navList(item.children)}
        </ul>
      </li>
    );
  };

  const navItem = (item, key) => {
    return (<li key={key}><a href={item.url}>{item.name}</a></li>)
  };

  return (
    <nav id="menu" >
      <label htmlFor="tm" id="toggle-menu">{props.brandName} <span className="drop-icon ">▾</span></label>
      <input type="checkbox" id="tm" />
      <ul className="main-menu clearfix menuHeight" >
      <Row>
      <Col xs="12" md="7">
      {
            !props.logoUrl ? 
          <li><a href="#" className="noStyle">
            {props.brandName} </a>
          </li> : 
          <li className="imgStyle"><img src={props.logoUrl}  height="40" width="40"></img></li>
        }
      {navList(props.menuOptions)}
      </Col>
      <Col md="4">
      {props.searchOption == true ? <li className="formStyle">
           <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.onSearchKeyChange} value={props.searchKey} />
            <button className="btn btn-outline-success" type="button" onClick={props.onSearch}>Search</button>
          </form>
         </li>:null}
      </Col>

      <Col md="1">
      <li className="profileStyle drop-icon" >
          <label htmlFor="sm1"><img src={props.profileUrl}  height="40" width="40"></img></label>
          <input type="checkbox" id="sm1" />
          <ul className="sub-menu sub-menu-profile ">
            {navList(props.profileOptions)}
          </ul>
        </li>
        </Col>
    </Row>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.object),
  brandName: PropTypes.string,
  logoUrl: PropTypes.string,
  profileUrl: PropTypes.string,
  searchOption: PropTypes.bool,
  profileOptions: PropTypes.arrayOf(PropTypes.object),
  onSearchKeyChange : PropTypes.func,
  searchKey : PropTypes.string,
  onSearch : PropTypes.func,
}

Navbar.defaultProps = {
  menuOptions: [{
    name: "Home",
    url: "#",
  }],
  brandName: "",
  logoUrl:"",
  profileUrl:profile,
  searchOption: true,
  profileOptions: [{
    name: "Logout",
    url: "#",
  }],
  onSearchKeyChange : () => {},
  searchKey : "",
  onSearch : () => {},
}

export default Navbar;
