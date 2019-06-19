import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import FileUploadComponent from "../../src/components/FileUpload/FileUpload";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("FileUpload component", () => {
  it("renders the component", () => {
    const wrapper = shallow(<FileUploadComponent  />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct props", () => {
      let defaultProps = {
        browseButtonTitle: "Browse",
        uploadButtonTitle: "Upload",
        accept: ".xls,.xlsx,.txt",
        size: 1,
        multiple: true,
        variant: "success"
      }
    const wrapper = mount(<FileUploadComponent {...defaultProps} />);
    expect(wrapper.props()).toEqual(defaultProps);
  });
});