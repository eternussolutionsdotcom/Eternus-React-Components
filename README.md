# Eternus-React-Components

[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-bootstrap)


React components inspired by react-bootstrap.

# Availale components

 - Dropdown
 - Login Component
 - File Upload
 - Export to Excek
 

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



**#Options array object keys**

| **Key** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| optionName  | String |   | Name for menu item |
| onClick  | Function |   | Callback fired when the menu item is clicked |
| Link  | String |   | href link associated with menu item |
| icon  | String |   | Icon to be displayed along with menu item name |
| disabled  | Boolean | false | Disable the menu item, making it unselectable |
