# Eternus-React-Components

[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-bootstrap)


Simple Dropdown component for React, inspired by react-bootstrap.

**Install:**
``` bash
$npm install eternus-react-components
```

## Dropdown

**#Usage**

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

**#Props**

Common props you need to specify include:

- `title` - title for the dropdown
- `variant` - color for the dropdown ['success', 'danger', 'warning', 'info', 'primary']
- `dropDirection` - determines the direction and location of the Menu in relation to
it's Toggle.
- `options` - Option menu for dropdown menu items
- `error` - allow the user trigger an error
- `errorMessage` - error message to be displayed


