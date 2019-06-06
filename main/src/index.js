import React from 'react';
import { render} from 'react-dom';
import {Dropdown} from '../../src';


//You can experiment your developed components
// using them here and run the command # npm start
const App = () => (
    <Dropdown name="snehal"/>
);
render(<App />, document.getElementById("root"));