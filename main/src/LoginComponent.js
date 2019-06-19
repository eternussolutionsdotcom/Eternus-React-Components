import React, { Component } from 'react'
import { Login } from '../../src';
import { Col, Row } from 'react-bootstrap'
export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue:'',
            userPasswordValue:''            
        };
    }
   
    onChangeComponent=(e) => {
        this.setState({[e.target.name]: e.target.value});
       }

       onSubmit = () => {
           console.log("submit")
       }
    render() { 
        return (
            <Row>
                <Col xs={6} md='4'></Col>
                <Col xs={12} md='4'>
                <Login
                    title="Login"
                    usernameType="email"
                    usernamePlaceholder="Username" 
                    passwordPlaceholder="Password"
                    buttonTitle="Sign In"
                    onChange={this.onChangeComponent.bind(this)}
                    position="center"  
                    usernameName="usernameValue"     
                    passwordName="userPasswordValue"   
                    usernameValue={this.state.usernameValue}
                    userPasswordValue={this.state.userPasswordValue} 
                    forgotPasswordLink="#"  
                    signUpLink="#" 
                    error={false}
                    errorMessage="Username or password is wrong"
                    onSubmit= {this.onSubmit}
                />
                </Col>
                <Col xs={12} md='4'></Col>
                </Row>
        )
    }
}
