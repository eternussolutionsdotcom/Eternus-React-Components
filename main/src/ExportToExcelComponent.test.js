import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ExportToExcel from "../../src/components/ExportToExcel/ExportToExcel";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ExportToExcel component", () => {
  it("renders the component", () => {
    const wrapper = shallow(<ExportToExcel  />);
    expect(wrapper.exists()).toBe(true);
  });

});