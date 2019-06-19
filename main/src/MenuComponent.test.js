import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MenuComponent from "../../src/components/Menu/Menu";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown component", () => {
  it("renders the component", () => {
    const wrapper = shallow(<MenuComponent  />);
    expect(wrapper.exists()).toBe(true);
  });
  
});