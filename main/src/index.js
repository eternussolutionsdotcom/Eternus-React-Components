import React from 'react';
import { render} from 'react-dom';
import DropdownComponent from "./DropdownComponent";
import FileUploadComponent from "./FileUploadComponent";
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent"

//You can experiment your developed components
// using them here and run the command # npm start

const App = () => (
<>

     <DropdownComponent/>
     <FileUploadComponent/>
     <LoginComponent/>
       <MenuComponent/>
     </>
  
);
render(<App />, document.getElementById("root"));