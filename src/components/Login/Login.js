import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'


const Login = props => {

    const [loginData, changeLoginData] = useState({ usernameRequired: false, passwordRequired: false });

    const onChange = (e) => {
        changeLoginData({ ...loginData, usernameRequired: false, passwordRequired: false });
        props.onChange(e);
    }

    const onSubmit = () => {
        if (props.usernameValue.trim().length === 0 || props.userPasswordValue.trim().length === 0) {
            let usernameRequired = false;
            let passwordRequired = false
            if (props.usernameValue.trim().length === 0) {
                usernameRequired = true;
            }
            if (props.userPasswordValue.trim().length === 0) {
                passwordRequired = true;
            }
            changeLoginData({ ...loginData, usernameRequired: usernameRequired, passwordRequired: passwordRequired });
        }
        else {
            props.onSubmit();
        }
    }

    return (
        <Card className="Container">
            <Card.Body >
                <Row className="justify-content-md-center">
                    <Col xs={12} >
                        <Card.Title className={props.position === "center" ? 'text-center' : 'text-left'}>{props.title}</Card.Title>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend  >
                            </InputGroup.Prepend>
                            <FormControl
                                id="usernameId"
                                name={props.username}
                                type={props.usernameType}
                                placeholder={props.usernamePlaceholder}
                                aria-describedby="basic-addon1"
                                onChange={onChange}
                                value={props.usernameValue}
                            />
                        {
                            loginData.usernameRequired ? <FormControl.Feedback className="showError error" type="invalid">
                                Please enter username
                    </FormControl.Feedback> : null
                        }
                        </InputGroup>
                        <InputGroup className="mb-3 form-group required">
                            <InputGroup.Prepend>
                            </InputGroup.Prepend>
                            <FormControl
                                id="passwordId"
                                name={props.passwordName}
                                type={props.passwordType}
                                placeholder={props.passwordPlaceholder}
                                aria-describedby="basic-addon1"
                                onChange={onChange}
                                value={props.userPasswordValue}
                            />
                      
                        {
                            loginData.passwordRequired ? <FormControl.Feedback className="showError error" type="invalid">
                                Please enter password
                            </FormControl.Feedback> : null
                        }
  </InputGroup>
                        <InputGroup className="mb-3">
                            <Button variant="success" id="signUp" type="submit" className="ButtonClass" onClick={() => onSubmit()} >{props.buttonTitle}</Button>

                        </InputGroup >

                        <a href={props.forgotPasswordLink} className="fontClass" >Forgot password?</a>
                        <span className="linkClass" >Don't have an account?<a href={props.signUpLink} > Sign Up</a></span>
                        
                        <InputGroup className="mb-3">
                            {
                                props.error ? <FormControl.Feedback className="showError" type="invalid">
                                    {props.errorMessage}
                                </FormControl.Feedback> : null
                            }
                        </InputGroup >

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

Login.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    variant: PropTypes.string.isRequired,
    passwordType: PropTypes.string.isRequired,
    title: PropTypes.string,
    usernameType: PropTypes.string,
    usernamePlaceholder: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    buttonTitle: PropTypes.string,
    onChange: PropTypes.func,
    position: PropTypes.string,
    username: PropTypes.string,
    passwordName: PropTypes.string,
    usernameValue: PropTypes.string,
    userPasswordValue: PropTypes.string,
    forgotPasswordLink: PropTypes.string,
    signUpLink: PropTypes.string,
    onSubmit : PropTypes.func.isRequired

}

Login.defaultProps = {
    variant: "success",
    error: false,
    errorMessage: "Invalid username or password",
    passwordType: "password",
    title: "Login",
    usernameType: "text",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    buttonTitle: "Sign In",
    position: "center",
    username: "username",
    passwordName: "password",
    usernameValue: "",
    userPasswordValue: "",
    forgotPasswordLink: "#",
    signUpLink: "#"

}

export default Login
