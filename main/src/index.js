import React from 'react';
import { render } from 'react-dom';
import DropdownComponent from "./DropdownComponent";
import FileUploadComponent from "./FileUploadComponent";
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent"
import ExportToExcelComponent from "./ExportToExcelComponent";
import ModalComponent from "./ModalComponent";
//You can experiment your developed components
// using them here and run the command # npm start

const App = () => (
      <div>
          {
                /* Comment your component before commiting the changes */ }

          {
                /* <DropdownComponent/>
                       <FileUploadComponent/>
                       <LoginComponent/> 
                                 <ModalComponent/>

                    */
          }
            <MenuComponent/>
      </div>

  
);
render(<App />, document.getElementById("root"));