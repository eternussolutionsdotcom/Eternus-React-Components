import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import {Dropdown} from "../../src/components/Dropdown/Dropdown";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown component", () => {
  it("renders the component", () => {
    const wrapper = shallow(<Dropdown  />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct props", () => {
      let defaultProps = {
          variant : "success",
          title : "Test drop",
          options : [{optionName : "Action 1", Link : "#/action1" , icon : 'fa fa-arrow-right'}],
          dropDirection : "up",
          error : true,
          errorMessage : "Something is wrong"
      }
    const wrapper = mount(<Dropdown {...defaultProps} />);
    expect(wrapper.props()).toEqual(defaultProps);
  });
});