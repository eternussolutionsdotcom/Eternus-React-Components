import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MenuComponent from "../../src/components/Menu/Menu";
import Adapter from "enzyme-adapter-react-16";
import Sidebar from "../../src/components/Menu/Sidebar";
import Navbar from "../../src/components/Menu/Navbar"


Enzyme.configure({ adapter: new Adapter() });

describe("Menu component", () => {
  it("renders the component", () => {
    const wrapper = mount(<MenuComponent  />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct props", () => {
    let defaultProps = {
      alignment:"vertical" ,
      menuOptions:[{ name: "Link1",url: "#",icon:"fa fa-envelope-open"}],
      brandName:"Eternus",
      searchOption:true
    }
  const wrapper = mount(<MenuComponent {...defaultProps} />);
  expect(wrapper.props()).toEqual(defaultProps)
});


it("Have correct prop value", () => {
  let defaultProps = {
    alignment:"vertical" ,

  }
  const wrapper = mount(<MenuComponent {...defaultProps}  />);
    expect(wrapper.prop('alignment')).toEqual('vertical')
  
});



it("Render vertical Menu", () => {
  let defaultProps = {
    alignment:"vertical" ,

  }
  const wrapper = mount(<MenuComponent {...defaultProps}  />);
   expect(wrapper.prop('alignment')).toEqual('vertical')
    if (defaultProps.alignment  === 'vertical') 
    {
      const header = wrapper.find(Sidebar).first()
      expect(header.exists()).toBe(true)
    }
   
});


it("Render Horizontal Menu", () => {
  let defaultProps = {
    alignment:"Horizontal" ,

  }
  const wrapper = mount(<MenuComponent {...defaultProps}  />);
   expect(wrapper.prop('alignment')).toEqual('Horizontal')
    if (defaultProps.alignment  === 'Horizontal') 
    {
      const header = wrapper.find(Navbar).first()
      expect(header.exists()).toBe(true)
    }
   
});


});


