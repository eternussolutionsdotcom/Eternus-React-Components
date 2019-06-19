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

  it("renders the correct props", () => {
    let defaultProps = {
      variant : "success",
      title : "Export my data",
      data : [{name : "name1", id:1},{name : "name2", id:2}],
      fileName : "exportExcelFile",
      sheetName :"sheetName",
      extension : 'xlxs'
  }
    const wrapper = mount(<ExportToExcel {...defaultProps} />);
    expect(wrapper.props()).toEqual(defaultProps);
  });

  it("simulates the onClick of export button", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<ExportToExcel onClick={mockCallBack}/>);
    const exportButton = wrapper.find("#exportButton");
    exportButton.simulate('click');
    expect(mockCallBack.mock.calls.length).hasOwnProperty(1);
  });

  it("sets the default props correctly", () => {
    const wrapper = mount(<ExportToExcel />);
    expect(wrapper.prop('title')).toEqual('Export to Excel');
    expect(wrapper.prop('fileName')).toEqual('excel');
    expect(wrapper.prop('extension')).toEqual('xlsx');
    expect(wrapper.prop('variant')).toEqual('info');
    expect(wrapper.prop('sheetName')).toEqual('sheet1');
  });
});