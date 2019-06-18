# Eternus-React-Components

[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-bootstrap)


React components inspired by react-bootstrap.

# Availale components

 - Dropdown
 - Login Component
 - File Upload
 - Export to Excel
 

# Install

``` bash
$npm install eternus-react-components
```

# Dropdown

**Usage**

```js
import {Dropdown} from "eternus-react-components";

export default class Sample extends Component {

    optionClicked = () => {
        ...
    }

    render() {
        const options = [
               {
                    optionName :"Action 1",
                    onClick:this.optionClicked,
                    Link :"#/action1",
                    icon :"fa fa-arrow-right"
                },
                {
                    ...
                }
           ];
        return (
            <div>;
                <Dropdown
                    title = "Dropdown"
                    variant = "success"
                    dropDirection = "down"
                    options = {options}
                    error = {true}
                    errorMessage = "error message"
                />
            </div>
        )
    }
}

```

**Props**

Common props you need to specify include:

| **Props** | **Default** | **Type** | **Description** |
| --- | --- | --- | --- |
| title | Dropdown | String | Title for the dropdown  |
| variant | success | String ['primary', 'secondary' , 'success' ,'danger' , 'warning' , 'info' , 'dark' , 'light'] | Color for the dropdown  |
| dropDirection | down | String ['up', 'down', 'left', 'right']  | Determines the direction and location of the Menu in relation to its toggle  |
| options | Empty array | Array of objects | Option menu for dropdown menu items  |
| error | false | Boolean | Allows the user to trigger an error  |
| errorMessage | Empty String | String | Error message to be displayed  |



**Options array object keys**

| **Key** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| optionName  | String |   | Name for menu item |
| onClick  | Function |   | Callback fired when the menu item is clicked |
| Link  | String |   | href link associated with menu item |
| icon  | String |   | Icon to be displayed along with menu item name |
| disabled  | Boolean | false | Disable the menu item, making it unselectable |


# Login

**Usage**

```js

import {Login} from "eternus-react-components";

export default class Sample extends Component {

    onChangeComponent=(e) => {
        ...
    }

    render() { 
        return (
            
                <Login
                    title="Login"
                    usernameType="email"
                    usernamePlaceholder="Username" 
                    passwordPlaceholder="Password"
                    buttonTitle="Sign In"
                    onChange={this.onChangeComponent.bind(this)}
                    position="Left"  
                    usernameName="usernameValue"     
                    passwordName="userPasswordValue"   
                    usernameValue={this.state.usernameValue}
                    userPasswordValue={this.state.userPasswordValue}
                    error={false}
                    errorMessage="Invalid username or password"    
                />

        )
    }
}

```

**Props**

Common props you need to specify include:


| **Props** | **Default** | **Type** | **Description** |
| --- | --- | --- | --- |
| variant             | success      | String ['primary', 'secondary' , 'success' ,'danger'  , 'warning' , 'info' , 'dark' , 'light'] | Color for sign in button                           |
| passwordType        | password     | string[password]                                                                               | Input type for password field                      |
| title               | Login        | string                                                                                         | Title for the login page                           |
| usernameType        | text         | string[email,number,text]                                                                      | Input type for username field                      |
| usernamePlaceholder | Username     | string                                                                                         | Placeholder for username field                     |
| passwordPlaceholder | Password     | string                                                                                         | Placeholder for password field                     |
| buttonTitle         | Sign In      | string                                                                                         | Text for sign in button                            |
| onChange            |              | function                                                                                       | onChange handler for username and password fields  |
| position            | center       | string[center,left]                                                                            | Position for login page title                      |
| usernameName        | username     | string                                                                                         | Input name for username field                      |
| passwordName        | password     | string                                                                                         | Input name for password field                      |
| usernameValue       | Empty String | string                                                                                         | Value for username field                           |
| userPasswordValue   | Empty String | string                                                                                         | Value for password field                           |
| forgotPasswordLink  |              | string                                                                                         | Redirect link for forgot password                  |
| signUpLink          |              | string                                                                                         | Redirect link for sign up                          |
| error               | false        | Boolean                                                                                        | Trigger error                                      |
| errorMessage        | Empty String | string                                                                                         | Error message to be displayed                      |                         |


# Fileupload

**Usage**

```js
import {FileUpload} from "eternus-react-components";

export default class Sample extends Component {

  
  render() {
 
        return (
            <div>;
                
				<FileUpload  
					browseButtonTitle = "Browse"
					uploadButtonTitle = "Upload"
					accept = ".xls,.xlsx,.txt"
					size = {1}
					multiple = {true}
					variant = "success"
				/> 
				
            </div>
        )
    }
}

```

**Props**

Common props you need to specify include:

| **Props** | **Default** | **Type** | **Description** |
| --- | --- | --- | --- |
| browseButtonTitle | Browse | String | Title for the Browse Button  |
| uploadButtonTitle | Upload | String | Title for the Upload Button  |
| accept | Empty String | String ".xls,.xlsx,.txt"  | Allows the user to restrict file extensions  |
| size |  Number | Number | Allows the user to restrict file size  |
| multiple | false | Boolean | Define single or multiple file selection criteria  |
| variant | success | String ['primary', 'secondary' , 'success' ,'danger' , 'warning' , 'info' , 'dark' , 'light'] | Color for the Browse and Upload Button  |



**File response array structure after upload**

```js
[
	{
        name: "fileName.txt",
        lastModified: 1560493560484,
        lastModifiedDate: Fri Jun 14 2019 11:56:00 GMT+0530 (India Standard Time),
        webkitRelativePath: "",
        size: 967
    }
]

```


# License

This project is licensed under the MIT License.
