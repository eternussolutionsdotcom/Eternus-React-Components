import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Login from "../../src/components/Login/Login";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Login component", () => {
  it("renders the component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });


  it('Test click event', () => {
    let propsData = {
                   title:"Login",
                    usernameType:"email",
                    usernameTitle:"Username" ,
                    passwordTitle:"Password",
                    buttonTitle:"Sign In",
                    position:"center"  ,
                    userFieldName:"userFieldNameValue"     ,
                    passwordFieldName:"userFieldPasswordValue" ,  
                    userFieldNameValue:"",
                    userFieldPasswordValue:""    
    };
    
    const mockCallBack = jest.fn();
    const button = shallow((<Login onClick={mockCallBack}  {...propsData}>Ok!</Login>));
    button.find('#signUp').simulate('click');
    expect(mockCallBack.mock.calls.length).hasOwnProperty(1);
  });

  it("renders correct props for text", () => {
    let propsData = {
       usernameType:"text"
    };
    const wrapper = shallow(<Login {...propsData} />);
    const input = wrapper.find('#usernameId');
    expect(input.prop('type')).toEqual('text');
   
  });

  it("renders correct props for email", () => {
    
    const wrapper = shallow(<Login  usernameType="email" />);
    const input = wrapper.find('#usernameId');
    expect(input.prop('type')).toEqual('email');
   
  });

  it("renders correct props for number", () => {
  
    const wrapper = shallow(<Login usernameType="number" />);
    const input = wrapper.find('#usernameId');
    expect(input.prop('type')).toEqual('number');
   
  });

  it("renders correct props for password field", () => {
   
    const wrapper = shallow(<Login  passwordType="password" />);
    const input = wrapper.find('#passwordId');
    expect(input.prop('type')).toEqual('password');
   
  });



});