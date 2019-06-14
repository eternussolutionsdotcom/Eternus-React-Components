import React from 'react';
import { render} from 'react-dom';
import DropdownComponent from "./DropdownComponent";
import FileUploadComponent from "./FileUploadComponent";
// import {ExportToExcel, Dropdown,Login,Table,Menu,FileUpload} from "../../src";

//You can experiment your developed components
// using them here and run the command # npm start

const App = () => (
     // <DropdownComponent/>
      <FileUploadComponent/>
);
render(<App />, document.getElementById("root"));