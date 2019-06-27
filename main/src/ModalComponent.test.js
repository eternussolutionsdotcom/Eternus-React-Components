import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Modal from "../../src/components/Modal/Modal";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Modal component", () => {
  let defaultProps = {
    variant:"#FFCC00",
    modalType:"message",
    show:true,
    handleClose: () => {},
    handleConfirm : () => {},
    modalHeading:"Modal Heading",
    modalMessage :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    cancelButtonText : "Ok",
    confirmButtonText : "Confirm",
    size:"lg"
  };
  it("renders the component", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBe(true);
  });

    it("renders correct props for message modal", () => {
    const wrapper = mount(<Modal {...defaultProps} />);
    expect(wrapper.props()).toEqual(defaultProps);
  });

  it('Test click event for cancel button', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<Modal onClick={mockCallBack}  {...defaultProps}/>));
    button.find('#close').simulate('click');
    expect(mockCallBack.mock.calls.length).hasOwnProperty(1);
  });

  it('renders modal type as message', () => {
    defaultProps.modalType="message";
    const wrapper = mount(<Modal {...defaultProps} />);
   expect(wrapper.prop('modalType')).toEqual('message');
  });

  it('renders modal type as confirm', () => {
    defaultProps.modalType="confirm";
    const wrapper = mount(<Modal {...defaultProps} />);
   expect(wrapper.prop('modalType')).toEqual('confirm');
  });
});