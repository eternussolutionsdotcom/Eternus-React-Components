# Eternus-React-Components

[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-bootstrap)


React components inspired by react-bootstrap.

# Available components

 - Dropdown
 - Login Component
 - File Upload
 - Export to Excel
 

# Install

``` bash
$npm install eternus-react-component
```


# Dropdown

**Usage**

```js
import {Dropdown} from "eternus-react-component";

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

import {Login} from "eternus-react-component";

export default class Sample extends Component {

    onChangeComponent=(e) => {
        ...
    }

    onSubmit =()=>{
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
                    username ="usernameValue"     
                    passwordName="userPasswordValue"   
                    usernameValue={this.state.usernameValue}
                    userPasswordValue={this.state.userPasswordValue}
                    error={false}
                    errorMessage="Invalid username or password"  
                    onSubmit= {this.onSubmit}  
                />
        )
    }
}

```

**Props**

Common props you need to specify include:

| **Props** | **Default** | **Type** | **Description** |
| --- | --- | --- | --- |
| title | Login | String | Title for the login page |
| variant | info | String ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'dark' , 'light'] | Color for sign in button                   |
| usernameType | text | String [email, number, text] | Input type for username field |
| passwordType | password | String [password] | Input type for password field |
| usernamePlaceholder | Username | String                                               | Placeholder for username field |
| passwordPlaceholder | Password | String | Placeholder for password field |
| buttonTitle | Sign In | String | Text for sign in button |
| onChange |   | Function | onChange handler for username and password fields |
| position | center | String[center,left] | Position for login page title |
| username | username | String | Input name for username field |
| passwordName | password | String | Input name for password field |
| usernameValue | Empty String | String | Value for username field   |
| userPasswordValue | Empty String | String | Value for password field |
| forgotPasswordLink |   | String | Redirect link for forgot password |
| signUpLink |   | String | Redirect link for sign up |
| error | false | Boolean | Trigger error |
| errorMessage | Empty String | String | Error message to be displayed |
| onSubmit |   | Function | Callback function to submit the login credentials |



# File Upload

**Usage**

```js
import {FileUpload} from "eternus-react-component";

export default class Sample extends Component {

   getFiles = (files) => {
        //console.log("files",files)
    }
  render() {
 
        return (  
				<FileUpload  
					browseButtonTitle = "Browse"
					uploadButtonTitle = "Upload"
					accept = ".xls,.xlsx,.txt"
					size = {1}
					multiple = {true}
                    variant = "success"
                    fileResponse = {this.getFiles}
				/> 
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
| size |  Number | Number | Allows the user to restrict file size. File size should be in KB  |
| multiple | false | Boolean | Define single or multiple file selection criteria  |
| variant | success | String ['primary', 'secondary' , 'success' ,'danger' , 'warning' , 'info' , 'dark' , 'light'] | Color for the Browse and Upload Button  |
| fileResponse |   | Function | Callback function to recieve uploaded files |



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



# Export to excel

**Usage**

```js
import {ExportToExcel} from "eternus-react-component";

export default class Sample extends Component {

   render() {
        const data= [
            {id : 1, name: 'name1', gender: 'female'},
            {id : 2, name: 'name2', gender: 'female'},
            {id : 3, name: 'name3', gender: 'male'},
            {id : 4, name: 'name4', gender: 'female'},
            {id : 5, name: 'name5', gender: 'male'},
        ]
        return (
            <div>
                <ExportToExcel 
                    variant="success" 
                    title="Export to excel" 
                    data={data} 
                    fileName="dataFile" 
                    sheetName="sheet1"/>
            </div>
        )
    }
}
}

```

**Props**

Common props you need to specify include:

| **Props** | **Default** | **Type** | **Description** |
| --- | --- | --- | --- |
| title | Dropdown | String | Title for the export button  |
| variant | info | String ['primary', 'secondary', 'success','danger', 'warning' , 'info' , 'dark' , 'light']  | Color for the button  |
| data  |   | Array of objects [JSON] | Json data to export to the excel file  |
| fileName  | excel | String | File name for excel file  |
| sheetName  | sheet1 | String | Sheet name for the data sheet |
| extension  | xlsx | String ['xlsx', 'csv', 'tsv'] | File extension for export file |



# Modal Component

**Usage**

```js
import {Modal} from "eternus-react-component";

export default class Sample extends Component {
     
    this.state = {
            show: false
        }

    handleClose = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

   render() {
        return (
            <div>
                <Modal
                        size="md"
                        variant="#FFCC00"
                        modalType="confirm"
                        show={this.state.show} 
                        handleClose={this.handleClose}
                        handleConfirm={this.handleShow}
                        modalHeading="Modal Heading"
                        modalMessage ="Modal Message"
                        confirmButtonText = "Save data"
                        cancelButtonText = "Ok"
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
| variant |   | String [Any color code] | Color for modal heading background                   |
| modalType | 'message' | String ['message' , 'confirm'] | Modal type for displaying message modal or a confirmation modal |
| show | false | Boolean | Show and hide the modal using this attribute |
| handleClose |   | Function | Callback function for cancel button |
| handleConfirm |   | Function | Callback function for confirm button |
| modalHeading |   | String | Modal heading text to be displayed |
| modalMessage |   | String | Modal message to be displayed |
| cancelButtonText | 'Cancel' | String | Text for cancel button |
| confirmButtonText | 'Confirm' | String | Text for confirm button |
| size  | 'md' | String['sm','md','lg'] | Size of modal |


# License

This project is licensed under the MIT License.
