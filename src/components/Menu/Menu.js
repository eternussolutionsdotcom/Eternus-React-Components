import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';

const Menu = props => {
  const navList = items => {
    return items.map((item, index) => navType(item, index));
  };

  const navType = (item, idx) =>
    item.children
      ? navDropdown(item, idx)
      : navItem(item, idx);

  const navDropdown = (item, key) => {
    console.log("values",item);
    console.log("values",item)
    return (
      <li key={key}><a href="/">{item.name}
        <span className="drop-icon">▾</span>
        <label title="Toggle Drop-down" className="drop-icon" style={{ float: "right" }} htmlFor="sm1">▾</label>
      </a>
        <input type="checkbox" id="sm1" />
        <ul className="sub-menu" >
          {navList(item.children)}
        </ul>
      </li>
    );
  };
  const navItem = (item, key) => {
    return (<li key={key}><a href="/">{item.name}</a></li>)
  };


  return (
    
    <nav id="menu" >
      <label htmlFor="tm" id="toggle-menu">Navigation <span className="drop-icon ">▾</span></label>
      <input type="checkbox" id="tm" />
      <ul className="main-menu clearfix menuHeight" >
        {props.logoUrl == "" ? <li><a href="/" className="noStyle ">
          {props.brandName == "" ? null : props.brandName} </a>
        </li> : <li className="imgStyle"><img src={props.logoUrl} height="40" width="40"></img></li>}
        <li><a href="/" className="noStyle">
        {props.brandName == "" ? null : props.brandName} </a>
        </li> 
        {navList(props.Menuoptions)}
       {props.searchOption == true ? <li className="formStyle">
           <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
         </li>:null}
       
        <li className="profileStyle drop-icon" >
          <label htmlFor="sm1"><img src={props.profileUrl} height="30" width="30"></img></label>
          <input type="checkbox" id="sm1" />
          <ul className="sub-menu sub-menu-profile ">
            {navList(props.profileOptions)}
          </ul>
        </li>
      </ul>
    </nav>

  )

}

Menu.propTypes = {
            Menuoptions: PropTypes.arrayOf(PropTypes.object),
            brandName:PropTypes.string.isRequired,
            icon:PropTypes.string.isRequired,
            logoUrl:PropTypes.string.isRequired,
            profileUrl:PropTypes.string.isRequired,
            searchOption:PropTypes.bool.isRequired,

}

Menu.defaultProps={
  Menuoptions: [{
    optionName: "No options",
    disabled: true
}],
  brandName:"Brandname",
  icon :"fa fa-balance-scale",
  logoUrl:"",
  profileUrl:"",
  searchOption:true

}

export default Menu
